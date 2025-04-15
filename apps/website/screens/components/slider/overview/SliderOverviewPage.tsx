import { DxcBulletedList, DxcFlex, DxcParagraph, DxcInset } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import continuous from "./examples/continuous";
import discrete from "./examples/discrete";
import input from "./examples/input";
import Image from "@/common/Image";
import anatomy from "./images/slider_anatomy.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The <strong>slider</strong> component enhance user experience by providing a quick and intuitive way to adjust
        settings. It is particularly useful for adjusting parameters within a continuous or discrete scale, making it
        easier to explore multiple options efficiently
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Slider's anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Label:</strong> describes the purpose of the slider (e.g., "Select coverage amount").
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Helper text</strong> <em>(Optional)</em>: provides additional guidance or context for the user.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Minimum value:</strong> the lowest selectable value (e.g., 0).
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Track (bar):</strong> the line along which the thumb moves, visually representing the range.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Maximum value:</strong> the highest selectable value (e.g., 100).
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Input field</strong> <em>(Optional)</em>: displays the selected value, allowing manual input.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Tick marks</strong> <em>(Optional)</em>: small indicators on the track that represent key
            increments.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Thumb:</strong> the draggable element that allows users to adjust the value.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Selected value indicator:</strong> highlights the current value along the track.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Key interactions and features",
    content: (
      <>
        <DxcParagraph>
          Sliders provide an intuitive way for users to <strong>adjust values dynamically</strong> by interacting with a
          draggable thumb. Depending on the implementation, sliders can offer various interaction methods and features
          to enhance usability.
        </DxcParagraph>
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Dragging the thumb</strong>
            <DxcInset top="var(--spacing-padding-xs)" bottom="0.5rem">
              <DxcBulletedList>
                <DxcBulletedList.Item>
                  Users can <strong>click and drag</strong> the thumb along the track to adjust the value.
                </DxcBulletedList.Item>
                <DxcBulletedList.Item>
                  In <strong>discrete sliders</strong>, the thumb snaps to predefined increments.
                </DxcBulletedList.Item>
                <DxcBulletedList.Item>
                  In <strong>continuous sliders</strong>, the thumb moves smoothly without fixed steps.
                </DxcBulletedList.Item>
              </DxcBulletedList>
            </DxcInset>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Clicking the track</strong>
            <DxcInset top="var(--spacing-padding-xs)" bottom="0.5rem">
              <DxcBulletedList>
                <DxcBulletedList.Item>
                  Users can <strong>click</strong> anywhere on the track to move the thumb directly to that position.
                </DxcBulletedList.Item>
                <DxcBulletedList.Item>
                  In some implementations, clicking moves the thumb instantly, while in others, it may{" "}
                  <strong>animate toward the new position</strong>.
                </DxcBulletedList.Item>
              </DxcBulletedList>
            </DxcInset>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Keyboard support</strong>
            <DxcInset vertical="var(--spacing-padding-xs)">
              <DxcBulletedList>
                <DxcBulletedList.Item>
                  Users can adjust the slider using the arrow keys for precise control:
                  <DxcInset vertical="var(--spacing-padding-xxs)">
                    <DxcBulletedList type="circle">
                      <DxcBulletedList.Item>
                        <strong>Left / Down arrow:</strong> decrease value.
                      </DxcBulletedList.Item>
                      <DxcBulletedList.Item>
                        <strong>Right / Up arrow:</strong> increase value.
                      </DxcBulletedList.Item>
                    </DxcBulletedList>
                  </DxcInset>
                </DxcBulletedList.Item>
              </DxcBulletedList>
            </DxcInset>
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <DxcParagraph>
          Sliders come in two variants: <strong>discrete</strong> and <strong>continuous</strong>. Choosing the right
          variant depends on whether precise steps or smooth adjustments are needed.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Discrete slider",
        content: (
          <>
            <DxcParagraph>
              Allows users to <strong>select only predefined values</strong> along the track.
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>Each step is marked, and the thumb "snaps" to these values.</DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Best for <strong>limited, meaningful choices</strong> where precision matters.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <Example example={discrete} />
          </>
        ),
      },
      {
        title: "Continuous slider",
        content: (
          <>
            <DxcParagraph>
              Lets users <strong>select any value</strong> within the range, without fixed steps.
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>Offers smooth, fine-grained control over the selection.</DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Best for <strong>gradual adjustments</strong> where any value is valid.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <Example example={continuous} />
          </>
        ),
      },
    ],
  },
  {
    title: "Best practices",
    subSections: [
      {
        title: "Provide a clear label and context",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Use a <strong>descriptive label</strong> that explains what the slider controls (i.e., instead of "Adjust
              value", use "Select your coverage amount.").
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Add <strong>helper text</strong> if additional guidance is needed.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Set logical minimum and maximum values",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Ensure the range <strong>matches real-world expectations</strong> (e.g., an insurance deductible slider
              should not start at $0 if the lowest option is $250).
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Keep <strong>increment steps meaningful</strong> (e.g., increments of $10 instead of $1 for large ranges).
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Allow manual input when precise values are needed",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Some users prefer entering a value directly instead of using the slider.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Providing the <strong>input field next to the slider</strong> helps with this.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <Example example={input} />
          </>
        ),
      },
    ],
  },
];

const SliderOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/slider/overview/SliderOverviewPage.tsx" />
  </DxcFlex>
);

export default SliderOverviewPage;
