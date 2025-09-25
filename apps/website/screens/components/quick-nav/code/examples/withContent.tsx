import { DxcInset, DxcQuickNav, DxcFlex, DxcHeading, DxcParagraph } from "@dxc-technology/halstack-react";

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
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex direction="row">
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <div id="accordion">
            <DxcFlex direction="column" gap="var(--spacing-gap-ml)">
              <DxcHeading level={2} text="Accordion" />
              <div id="accordion-code">
                <DxcFlex direction="column" gap="var(--spacing-gap-ml)">
                  <DxcHeading level={3} text="Code" />
                  <DxcParagraph>
                    Accordions are used to group similar content and hide or
                    show it depending on user needs or preferences. Accordions
                    give users more granular control over the interface and help
                    digest content in stages, rather than all at once.
                  </DxcParagraph>
                </DxcFlex>
              </div>
              <div id="accordion-usage">
                <DxcFlex direction="column" gap="var(--spacing-gap-ml)">
                  <DxcHeading level={3} text="Usage" />
                  <DxcParagraph>
                    The accordion component delivers large amounts of content in
                    a small space through progressive disclosure.
                  </DxcParagraph>
                </DxcFlex>
              </div>
            </DxcFlex>
          </div>
          <div id="alert">
            <DxcFlex direction="column" gap="var(--spacing-gap-ml)">
              <DxcHeading level={2} text="Alert" />
              <div id="alert-code">
                <DxcFlex direction="column" gap="var(--spacing-gap-ml)">
                  <DxcHeading level={3} text="Code" />
                  <DxcParagraph>
                    Alert messages are meant to provide contextual feedback
                    about important changes in the interface.
                  </DxcParagraph>
                </DxcFlex>
              </div>
            </DxcFlex>
          </div>
        </DxcFlex>
        <DxcInset space="var(--spacing-padding-xl)">
          <DxcQuickNav links={links} />
        </DxcInset>
      </DxcFlex>
    </DxcInset>
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
