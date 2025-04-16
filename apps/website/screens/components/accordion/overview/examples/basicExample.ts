import { DxcAccordion, DxcInset, DxcBadge, DxcStatusLight, DxcFlex } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-ml)">
        <DxcAccordion>
          <DxcAccordion.AccordionItem
            label="Hello world">
            <DxcInset space="var(--spacing-padding-l)">
              Details
            </DxcInset>
          </DxcAccordion.AccordionItem>
        </DxcAccordion>
        <DxcAccordion>
          <DxcAccordion.AccordionItem
            label="Hello world"
            icon="filled_mail"
            subLabel="Jan, 09 2025"
          >
            <DxcInset space="var(--spacing-padding-l)">
              Details
            </DxcInset>
          </DxcAccordion.AccordionItem>
        </DxcAccordion>
        <DxcAccordion>
          <DxcAccordion.AccordionItem
            label="Assure Claims"
            statusLight={<DxcStatusLight label="Active" mode="success" />}
            subLabel="Jan, 09 2025"
          >
            <DxcInset space="var(--spacing-padding-l)">
              Details
            </DxcInset>
          </DxcAccordion.AccordionItem>
        </DxcAccordion>
        <DxcAccordion>
          <DxcAccordion.AccordionItem
            icon="gavel"
            label="Assure Claims"
            statusLight={<DxcStatusLight label="Active" mode="success" />}
          >
            <DxcInset space="var(--spacing-padding-l)">
              Details
            </DxcInset>
          </DxcAccordion.AccordionItem>
        </DxcAccordion>
        <DxcAccordion>
          <DxcAccordion.AccordionItem
            badge={{ position: "after", element: <DxcBadge label="Enterprise" icon="filled_stars" color="yellow" /> }}
            label="Life Policy"
            subLabel="Ref - 1236554546"
          >
            <DxcInset space="var(--spacing-padding-l)">
              Details
            </DxcInset>
          </DxcAccordion.AccordionItem>
        </DxcAccordion>
        <DxcAccordion>
          <DxcAccordion.AccordionItem
            badge={{ position: "before", element: <DxcBadge label="Enterprise" icon="filled_stars" /> }}
            label="Life Policy"
            statusLight={<DxcStatusLight label="Active" mode="success" />}
            subLabel="Ref - 1236554546"
          >
            <DxcInset space="var(--spacing-padding-l)">
              Details
            </DxcInset>
          </DxcAccordion.AccordionItem>
        </DxcAccordion>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcAccordion,
  DxcInset,
  DxcBadge,
  DxcFlex,
  DxcStatusLight,
  useState,
};

export default { code, scope };
