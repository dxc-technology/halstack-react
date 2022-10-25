import {
  DxcInset,
  DxcQuickNav,
  DxcFlex,
  DxcHeading,
  DxcParagraph,
} from "@dxc-technology/halstack-react";

const code = `() => {
  const links = [
    {
      label: "Accordion",
      links: [{ label: "Code" }, { label: "Usage" }],
    },
    {
      label: "Alert",
      links: [{ label: "Code" }],
    },
  ];

  return (
    <DxcFlex direction="row">
      <DxcInset space="2rem">
        <div id="accordion">
          <DxcHeading
            level={2}
            text="Accordion"
            margin={{ top: "xsmall", bottom: "xsmall" }}
          />
          <div id="accordion-code">
            <DxcHeading
              level={3}
              text="Code"
              margin={{ top: "xsmall", bottom: "xsmall" }}
            />
            <DxcParagraph>
              Accordions are used to group similar content and hide or show it
              depending on user needs or preferences. Accordions give users more
              granular control over the interface and help digest content in
              stages, rather than all at once.
            </DxcParagraph>
          </div>
          <div id="accordion-usage">
            <DxcHeading
              level={3}
              text="Usage"
              margin={{ top: "xsmall", bottom: "xsmall" }}
            />
            <DxcParagraph>
              The accordion component delivers large amounts of content in a
              small space through progressive disclosure.
            </DxcParagraph>
          </div>
        </div>
        <div id="alert">
          <DxcHeading
            level={2}
            text="Alert"
            margin={{ top: "xsmall", bottom: "xsmall" }}
          />
          <div id="alert-code">
            <DxcHeading
              level={3}
              text="Code"
              margin={{ top: "xsmall", bottom: "xsmall" }}
            />
            <DxcParagraph>
              Alert messages are meant to provide contextual feedback about
              important changes in the interface.
            </DxcParagraph>
          </div>
        </div>
      </DxcInset>
      <DxcInset space="2rem">
        <DxcQuickNav links={links}></DxcQuickNav>
      </DxcInset>
    </DxcFlex>
  );
}`;

const scope = {
  DxcInset,
  DxcQuickNav,
  DxcFlex,
  DxcHeading,
  DxcParagraph,
};

export default { code, scope };
