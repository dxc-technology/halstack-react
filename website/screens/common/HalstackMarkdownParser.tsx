import {
  DxcBulletedList,
  DxcHeading,
  DxcLink,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Code from "./Code";
import BulletedList from "@dxc-technology/halstack-react/bulleted-list/BulletedList";
import React from "react";

type Props = { markdown: string };
const HalstackMarkdownParser = ({ markdown }: Props) => (
  <ReactMarkdown
    components={{
      h3: ({ children }) => <DxcHeading level={3} text={children} />,
      code: ({ children }) => <Code>{children}</Code>,
      ul: ({ children }) => {
        return (
          <DxcBulletedList>
            {React.Children.map(children, (child) =>
              child !== "\n" ? child : undefined
            )}
          </DxcBulletedList>
        );
      },
      li: ({ children }) => (
        <DxcBulletedList.Item>{children}</DxcBulletedList.Item>
      ),
      a: ({ href, children }) => (
        <DxcLink href={href} newWindow>
          {children}
        </DxcLink>
      ),
    }}
  >
    {markdown}
  </ReactMarkdown>
);

export default HalstackMarkdownParser;
