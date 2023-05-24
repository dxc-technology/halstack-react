//@ts-nocheck
import {
  DxcBulletedList,
  DxcHeading,
  DxcLink,
} from "@dxc-technology/halstack-react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Code from "./Code";
import React from "react";

type Props = { markdown: string };

const HalstackMarkdownParser = ({ markdown }: Props) => (
  <ReactMarkdown
    components={{
      a: ({ href, children }) => (
        <DxcLink href={href} newWindow>
          {children}
        </DxcLink>
      ),
      code: ({ children }) => <Code>{children}</Code>,
      h3: ({ children }) => <DxcHeading level={4} text={children} />,
      ul: ({ children }) => (
        <DxcBulletedList>
          {React.Children.map(children, (child) =>
            child !== "\n" ? child : undefined
          )}
        </DxcBulletedList>
      ),
      li: ({ children }) => (
        <DxcBulletedList.Item>{children}</DxcBulletedList.Item>
      ),
    }}
  >
    {markdown}
  </ReactMarkdown>
);

export default HalstackMarkdownParser;
