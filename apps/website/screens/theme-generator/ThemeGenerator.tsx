import React, { useState, useCallback } from "react";
import { DxcApplicationLayout, DxcButton, DxcInset, DxcFlex, DxcLink, DxcTypography, DxcHeading } from "@repo/ui";
import Link from "next/link";
import { useRouter } from "next/router";
import opinionatedTheme from "@/common/themes/opinionated-theme.json";
import advancedTheme from "@/common/themes/advanced-theme.json";
import ComponentPreview from "./components/ComponentPreview";
import { downloadFile, makeReadableSidenav } from "./utils";
import ThemeInputsConfig from "./components/ThemeInputsConfig";
import ImportDialog from "./ImportDialog";
import defaultSchema from "./themes/schemas/opinionated.schema.json";
import advancedSchema from "./themes/schemas/advanced.schema.json";
import icons from "./images/GlobalActionsIcons";
import SidenavLogo from "@/common/sidenav/SidenavLogo";
import styled from "styled-components";
import { IndexedTheme } from "./types";

const ThemeGenerator = () => {
  const { asPath } = useRouter();
  const pages = asPath.split("/");
  const type = pages[pages.length - 2];

  const [customTheme, setCustomTheme] = useState<IndexedTheme>(
    type === "advanced-theme" ? advancedTheme : opinionatedTheme
  );
  const customThemeSchema: IndexedTheme = type === "advanced-theme" ? advancedSchema : defaultSchema;

  const [currentComponent, setCurrentComponent] = useState("accordion");
  const [isDialogVisible, setDialogVisible] = useState(false);

  const setComponentProperty = useCallback(
    (propertyName: string, propertyValue: string) => {
      setCustomTheme((prevTheme) => ({
        ...prevTheme,
        [currentComponent]: {
          ...prevTheme[currentComponent],
          [propertyName]: propertyValue,
        },
      }));
    },
    [currentComponent]
  );

  return (
    <DxcApplicationLayout
      visibilityToggleLabel="Menu"
      sidenav={
        <DxcApplicationLayout.SideNav
          title={
            <DxcFlex direction="column" gap="0.5rem">
              <DxcTypography fontSize="0.75rem" fontWeight="600" as="nav">
                <Breadcrumbs>
                  <li>
                    <Link href="/principles/themes/" passHref legacyBehavior>
                      <DxcLink>Themes</DxcLink>
                    </Link>
                  </li>
                  <li>{type === "advanced-theme" ? "Advanced Theme Generator" : "Opinionated Theme Generator"}</li>
                </Breadcrumbs>
              </DxcTypography>
              <SidenavLogo subtitle="Theme Generator" />
            </DxcFlex>
          }
        >
          <DxcApplicationLayout.SideNav.Section>
            <DxcInset space="1rem" top="2rem">
              <DxcFlex direction="column" gap="0.5rem">
                <DxcHeading text="Global Theme Actions" level={3} />
                <DxcFlex direction="column" gap="0.25rem">
                  <DxcButton
                    mode="text"
                    label="Reset"
                    onClick={() => {
                      setCustomTheme(type === "advanced-theme" ? advancedTheme : opinionatedTheme);
                    }}
                    icon={icons.reset}
                    size="fillParent"
                  />
                  <DxcButton
                    mode="secondary"
                    label="Import"
                    onClick={() => {
                      setDialogVisible(true);
                    }}
                    icon={icons.import}
                    size="fillParent"
                  />
                  <DxcButton
                    mode="primary"
                    label="Export"
                    onClick={() => {
                      downloadFile(customTheme);
                    }}
                    icon={icons.export}
                    size="fillParent"
                  />
                </DxcFlex>
              </DxcFlex>
            </DxcInset>
          </DxcApplicationLayout.SideNav.Section>
          <DxcApplicationLayout.SideNav.Section>
            <DxcApplicationLayout.SideNav.Group title="Components">
              {Object.keys(type === "advanced-theme" ? advancedTheme : opinionatedTheme).map((component, index) => (
                <DxcApplicationLayout.SideNav.Link
                  key={`componentLink-${index}`}
                  selected={currentComponent === component}
                  onClick={() => {
                    setCurrentComponent(component);
                  }}
                >
                  {makeReadableSidenav(component)}
                </DxcApplicationLayout.SideNav.Link>
              ))}
            </DxcApplicationLayout.SideNav.Group>
          </DxcApplicationLayout.SideNav.Section>
        </DxcApplicationLayout.SideNav>
      }
    >
      <DxcApplicationLayout.Main>
        <DxcFlex>
          <ComponentPreview customTheme={customTheme} componentId={currentComponent} />
          <ThemeInputsConfig
            componentInputs={customTheme[currentComponent]}
            componentInputsTypes={customThemeSchema[currentComponent]}
            onChangeCustomTheme={setComponentProperty}
          />
        </DxcFlex>
        {isDialogVisible && (
          <ImportDialog
            customThemeSchema={customThemeSchema}
            setCustomTheme={setCustomTheme}
            setDialogVisible={setDialogVisible}
          />
        )}
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  );
};

const Breadcrumbs = styled.ol`
  display: flex;
  list-style-type: none;
  padding-left: 0;
  margin: 0;

  > li:not(:first-child):before {
    content: ">";
    padding: 0 0.5rem;
  }
`;

export default ThemeGenerator;
