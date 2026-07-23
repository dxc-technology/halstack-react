import { useCallback, useRef, useState } from "react";

export type SpeechRecognitionAlternative = {
  readonly transcript: string;
  readonly confidence: number;
};

export type SpeechRecognitionResult = {
  readonly length: number;
  [index: number]: SpeechRecognitionAlternative;
};

export type SpeechRecognitionResultItem = {
  readonly [index: number]: SpeechRecognitionAlternative;
  readonly length: number;
};

export type SpeechRecognitionResultList = {
  readonly [index: number]: SpeechRecognitionResultItem;
  readonly length: number;
};

export type SpeechRecognitionEvent = Event & {
  readonly results: SpeechRecognitionResultList;
};

export type SpeechRecognitionErrorEvent = Event & {
  readonly error: string;
};

export type ISpeechRecognition = EventTarget & {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
};

type ISpeechRecognitionConstructor = {
  new (): ISpeechRecognition;
};

export type WindowWithSpeechRecognition = Window & {
  SpeechRecognition?: ISpeechRecognitionConstructor;
  webkitSpeechRecognition?: ISpeechRecognitionConstructor;
};

type UseVoiceTranscriptionProps = {
  lang: string;
  continuous?: boolean;
  interimResults?: boolean;
  onError?: (error: string) => void;
};

type UseVoiceTranscriptionReturn = {
  transcript: string;
  isRecording: boolean;
  isSupported: boolean;
  startRecording: () => void;
  stopRecording: () => void;
  resetTranscript: () => void;
  error?: string;
};

export const useVoiceTranscription = ({
  lang,
  continuous = true,
  interimResults = true,
  onError,
}: UseVoiceTranscriptionProps): UseVoiceTranscriptionReturn => {
  const [transcript, setTranscript] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState<string>();
  const recognitionRef = useRef<ISpeechRecognition | null>(null);
  const resetTranscript = useCallback(() => setTranscript(""), []);

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
        .map((result) => {
          const best = result[0];
          return best && best.confidence >= 0.5 ? best.transcript : "";
        })
        .join(" ")
        .trim();
      setTranscript(fullTranscript);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setError(event.error);
      onError?.(event.error);

      resetTranscript();
      setIsRecording(false);
      recognitionRef.current = null;
    };

    recognition.onend = () => {
      setIsRecording(false);
      resetTranscript();
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

  return { transcript, isRecording, isSupported, error, startRecording, stopRecording, resetTranscript };
};
