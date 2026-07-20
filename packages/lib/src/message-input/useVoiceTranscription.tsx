import { useCallback, useRef, useState } from "react";

interface SpeechRecognitionResult {
  readonly transcript: string;
  readonly confidence: number;
}

interface SpeechRecognitionResultItem {
  readonly [index: number]: SpeechRecognitionResult;
  readonly length: number;
}

interface SpeechRecognitionResultList {
  readonly [index: number]: SpeechRecognitionResultItem;
  readonly length: number;
}

interface SpeechRecognitionEvent extends Event {
  readonly results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent extends Event {
  readonly error: string;
}

interface ISpeechRecognition extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
}

interface ISpeechRecognitionConstructor {
  new (): ISpeechRecognition;
}

interface WindowWithSpeechRecognition extends Window {
  SpeechRecognition?: ISpeechRecognitionConstructor;
  webkitSpeechRecognition?: ISpeechRecognitionConstructor;
}

interface UseVoiceTranscriptionOptions {
  lang?: string;
  continuous?: boolean;
  interimResults?: boolean;
}

interface UseVoiceTranscriptionReturn {
  transcript: string;
  isRecording: boolean;
  isSupported: boolean;
  startRecording: () => void;
  stopRecording: () => void;
  resetTranscript: () => void;
}

export const useVoiceTranscription = ({
  lang = "en-US",
  continuous = true,
  interimResults = true,
}: UseVoiceTranscriptionOptions = {}): UseVoiceTranscriptionReturn => {
  const [transcript, setTranscript] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef<ISpeechRecognition | null>(null);

  const windowWithSpeech =
    typeof window !== "undefined" ? (window as unknown as WindowWithSpeechRecognition) : undefined;

  const isSupported = !!(windowWithSpeech?.SpeechRecognition ?? windowWithSpeech?.webkitSpeechRecognition);

  const startRecording = useCallback(() => {
    if (!isSupported || recognitionRef.current || !windowWithSpeech) return;

    const SpeechRecognitionConstructor = windowWithSpeech.SpeechRecognition ?? windowWithSpeech.webkitSpeechRecognition;

    if (!SpeechRecognitionConstructor) return;

    const recognition = new SpeechRecognitionConstructor();
    recognition.lang = lang;
    recognition.continuous = continuous;
    recognition.interimResults = interimResults;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const results: SpeechRecognitionResultItem[] = [];
      for (let i = 0; i < event.results.length; i++) {
        const result = event.results[i];
        if (result) {
          results.push(result);
        }
      }

      const fullTranscript = results
        .map((result) => result[0]?.transcript ?? "")
        .join(" ")
        .trim();
      setTranscript(fullTranscript);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Speech recognition error:", event.error);
      setIsRecording(false);
      recognitionRef.current = null;
    };

    recognition.onend = () => {
      setIsRecording(false);
      recognitionRef.current = null;
    };

    recognition.start();
    recognitionRef.current = recognition;
    setIsRecording(true);
  }, [isSupported, lang, continuous, interimResults, windowWithSpeech]);

  const stopRecording = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  }, []);

  const resetTranscript = useCallback(() => setTranscript(""), []);

  return { transcript, isRecording, isSupported, startRecording, stopRecording, resetTranscript };
};
