import { DxcBulletedList, DxcHeading, DxcLink } from "@dxc-technology/halstack-react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Code from "./Code";
import { Children } from "react";

const HalstackMarkdownParser = ({ markdown }: { markdown: string }) => (
  <ReactMarkdown
    components={{
      a: ({ href, children }) => (
        <DxcLink href={href} newWindow>
          {children as string}
        </DxcLink>
      ),
      code: ({ children }) => <Code>{children}</Code>,
      h3: ({ children }) => (
        <DxcHeading
          level={4}
          text={Children?.map(children, (child) => (child as string).replace(/[^\x00-\x7F]/g, ""))?.join("") ?? ""}
        />
      ),
      ul: ({ children }) => (
        <DxcBulletedList>{Children.map(children, (child) => (child !== "\n" ? child : undefined))}</DxcBulletedList>
      ),
      li: ({ children }) => <DxcBulletedList.Item>{children}</DxcBulletedList.Item>,
    }}
  >
    {markdown}
  </ReactMarkdown>
);

export default HalstackMarkdownParser;
