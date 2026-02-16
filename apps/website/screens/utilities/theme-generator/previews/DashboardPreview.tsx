import {
  DxcApplicationLayout,
  DxcContainer,
  DxcFlex,
  DxcTypography,
  DxcHeading,
  DxcInset,
  DxcBadge,
  DxcSpinner,
  DxcDivider,
  DxcButton,
} from "@dxc-technology/halstack-react";
import ScaledPreviewContainer from "../components/ScaledPreviewContainer";
import { useThemeGenerator } from "../context/ThemeGeneratorContext";

const DashboardPreview = () => {
  const { getLogoUrl } = useThemeGenerator();

  const mainLogo = getLogoUrl("mainLogo");

  const logo = {
    src: mainLogo,
    alt: "Company logo",
  };

  const groupItems = [
    {
      title: "Section 1",
      items: [
        {
          label: "Grouped Item 1",
          icon: "favorite",
          items: [
            { label: "Item 1", icon: "person" },
            {
              label: "Grouped Item 2",
              items: [
                {
                  label: "Item 2",
                  icon: "bookmark",
                  badge: <DxcBadge color="primary" label="Experimental" />,
                },
                { label: "Selected Item 3" },
              ],
            },
          ],
          badge: <DxcBadge color="success" label="New" />,
        },
        { label: "Item 4", icon: "key" },
      ],
    },
    {
      title: "Section 2",
      items: [
        { label: "Item 5", icon: "person" },
        {
          label: "Grouped Item 6",
          items: [{ label: "Item 7", icon: "person" }, { label: "Item 8" }],
        },
        { label: "Item 9" },
      ],
    },
  ];

  return (
    <ScaledPreviewContainer scale={0.45} width={2120}>
      <DxcApplicationLayout logo={logo} sidenav={<DxcApplicationLayout.Sidenav navItems={groupItems} />}>
        <DxcApplicationLayout.Main>
          <DxcInset space="3rem">
            <DxcFlex direction="column" gap="2rem">
              <DxcFlex gap="2rem">
                <DxcContainer
                  width="50%"
                  background={{ color: "var(--border-color-neutral-brighter)" }}
                  height="430px"
                  borderRadius="var(--border-radius-s)"
                  boxShadow="var(--shadow-200)"
                >
                  <DxcInset space="var(--spacing-padding-xs)">
                    <DxcFlex direction="column" gap="var(--spacing-gap-xl)" alignItems="center">
                      <DxcFlex justifyContent="space-between" alignSelf="stretch">
                        <DxcHeading text={"Availability"} level={3} />
                        <DxcButton mode="tertiary" icon="open_in_new" />
                      </DxcFlex>

                      <DxcSpinner value={70} showValue />
                      <DxcTypography
                        fontSize="var(--font-size-xs)"
                        color="var(--text-color-neutral)"
                        fontWeight="var(--font-weight-semibold)"
                      >
                        Uptime over the last 24 hours
                      </DxcTypography>
                    </DxcFlex>
                    <DxcInset horizontal="var(--spacing-padding-xl)">
                      <DxcInset top="var(--spacing-padding-xl)">
                        <DxcDivider orientation="horizontal" color="mediumGrey" />
                      </DxcInset>
                      <DxcInset space="var(--spacing-padding-xs)" top="var(--spacing-padding-xl)">
                        <DxcFlex direction="column" alignItems="center" gap="var(--spacing-gap-xs)" alignSelf="stretch">
                          <DxcTypography
                            fontSize="var(--font-size-24)"
                            fontWeight="var(--font-weight-semibold)"
                            color="#37A526"
                          >
                            0
                          </DxcTypography>
                          <DxcTypography
                            fontSize="var(--font-size-xs)"
                            fontWeight="var(--font-weight-semibold)"
                            color="var(--text-color-neutral)"
                          >
                            Detected outages in the last 24 hours
                          </DxcTypography>
                        </DxcFlex>
                      </DxcInset>
                    </DxcInset>
                  </DxcInset>
                </DxcContainer>

                <DxcContainer
                  width="50%"
                  background={{ color: "var(--border-color-neutral-brighter)" }}
                  height="430px"
                  borderRadius="var(--border-radius-s)"
                  boxShadow="var(--shadow-200)"
                >
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <DxcFlex direction="column" gap="var(--spacing-gap-xl)" alignItems="center">
                      <DxcFlex justifyContent="space-between">
                        <DxcHeading text={"Performance"} level={3} />
                        <DxcButton mode="tertiary" icon="open_in_new" />
                      </DxcFlex>

                      <DxcFlex direction="column" alignItems="center" gap="var(--spacing-gap-l)">
                        <DxcTypography
                          fontSize="var(--font-size-48)"
                          fontWeight="var(--font-weight-bold)"
                          color="#D06C18"
                        >
                          N/A
                        </DxcTypography>
                        <DxcTypography fontSize="var(--font-size-xs)" color="var(--text-color-neutral)">
                          95th pctl. response time
                        </DxcTypography>
                      </DxcFlex>

                      <DxcInset top="var(--spacing-padding-xl)">
                        <DxcFlex justifyContent="space-around" gap="var(--spacing-gap-l)">
                          <DxcFlex direction="column" alignItems="center">
                            <DxcTypography
                              fontSize="var(--font-size-24)"
                              fontWeight="var(--font-weight-bold)"
                              color="#D06C18"
                            >
                              N/A
                            </DxcTypography>
                            <DxcTypography fontSize="var(--font-size-xs)">Avg actions per session</DxcTypography>
                          </DxcFlex>
                          <DxcFlex direction="column" alignItems="center">
                            <DxcTypography
                              fontSize="var(--font-size-24)"
                              fontWeight="var(--font-weight-bold)"
                              color="#D06C18"
                            >
                              N/A
                            </DxcTypography>
                            <DxcTypography fontSize="var(--font-size-xs)">Bounce rate</DxcTypography>
                          </DxcFlex>
                          <DxcFlex direction="column" alignItems="center">
                            <DxcTypography
                              fontSize="var(--font-size-24)"
                              fontWeight="var(--font-weight-bold)"
                              color="#D06C18"
                            >
                              N/A
                            </DxcTypography>
                            <DxcTypography fontSize="var(--font-size-xs)">User sessions</DxcTypography>
                          </DxcFlex>
                        </DxcFlex>
                      </DxcInset>
                    </DxcFlex>
                  </div>
                </DxcContainer>
              </DxcFlex>

              <DxcFlex gap="2rem" justifyContent="center">
                <DxcContainer
                  width="32%"
                  background={{ color: "var(--border-color-neutral-brighter)" }}
                  height="200px"
                  borderRadius="var(--border-radius-s)"
                  boxShadow="var(--shadow-200)"
                >
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <DxcFlex direction="column" gap="var(--spacing-gap-m)">
                      <DxcFlex justifyContent="center" gap="1rem">
                        <DxcHeading text={"Access management"} level={3} />
                        <DxcButton mode="tertiary" icon="open_in_new" />
                      </DxcFlex>
                      <DxcFlex justifyContent="space-around" gap="var(--spacing-gap-l)">
                        <DxcFlex direction="column" alignItems="center">
                          <DxcTypography
                            fontSize="var(--font-size-24)"
                            fontWeight="var(--font-weight-bold)"
                            color="#37A526"
                          >
                            3
                          </DxcTypography>
                          <DxcTypography fontSize="var(--font-size-xs)">Total users</DxcTypography>
                        </DxcFlex>
                        <DxcFlex direction="column" alignItems="center">
                          <DxcTypography
                            fontSize="var(--font-size-24)"
                            fontWeight="var(--font-weight-bold)"
                            color="var(--text-color-neutral)"
                          >
                            0
                          </DxcTypography>
                          <DxcTypography fontSize="var(--font-size-xs)">MFA enrollments</DxcTypography>
                        </DxcFlex>
                        <DxcFlex direction="column" alignItems="center">
                          <DxcTypography
                            fontSize="var(--font-size-24)"
                            fontWeight="var(--font-weight-bold)"
                            color="var(--text-color-neutral)"
                          >
                            0
                          </DxcTypography>
                          <DxcTypography fontSize="var(--font-size-xs)">Login success</DxcTypography>
                        </DxcFlex>
                      </DxcFlex>
                    </DxcFlex>
                  </div>
                </DxcContainer>

                <DxcContainer
                  width="32%"
                  background={{ color: "var(--border-color-neutral-brighter)" }}
                  height="200px"
                  borderRadius="var(--border-radius-s)"
                  boxShadow="var(--shadow-200)"
                >
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <DxcFlex direction="column" gap="var(--spacing-gap-m)">
                      <DxcFlex justifyContent="center" gap="1rem">
                        <DxcHeading text={"API"} level={3} />
                        <DxcButton mode="tertiary" icon="open_in_new" />
                      </DxcFlex>
                      <DxcFlex justifyContent="space-around" gap="var(--spacing-gap-l)">
                        <DxcFlex direction="column" alignItems="center">
                          <DxcTypography
                            fontSize="var(--font-size-24)"
                            fontWeight="var(--font-weight-bold)"
                            color="var(--text-color-neutral)"
                          >
                            N/A
                          </DxcTypography>
                          <DxcTypography fontSize="var(--font-size-xs)">Secure API calls</DxcTypography>
                        </DxcFlex>
                        <DxcFlex direction="column" alignItems="center">
                          <DxcTypography
                            fontSize="var(--font-size-24)"
                            fontWeight="var(--font-weight-bold)"
                            color="var(--text-color-neutral)"
                          >
                            N/A
                          </DxcTypography>
                          <DxcTypography fontSize="var(--font-size-xs)">API calls failed</DxcTypography>
                        </DxcFlex>
                      </DxcFlex>
                    </DxcFlex>
                  </div>
                </DxcContainer>

                <DxcContainer
                  width="32%"
                  background={{ color: "var(--border-color-neutral-brighter)" }}
                  height="430px"
                  borderRadius="var(--border-radius-s)"
                  boxShadow="var(--shadow-200)"
                >
                  <DxcInset space="var(--spacing-padding-xs)">
                    <DxcFlex direction="column" gap="1rem">
                      <DxcFlex alignItems="center" gap="0.5rem">
                        <DxcHeading text={"Agentic AI Insights"} level={3} />
                      </DxcFlex>
                      <DxcTypography fontSize="var(--font-size-xs)">
                        STABLE: Ingenium 100% availability with custom version demonstrating 4+ months long-term
                        stability. July 2025 deployment providing extended operational excellence. Warning-level
                        performance metrics require monitoring but service reliable. (Analysis ID:
                        analysis_220fb7ab605e4f03ab6133b2dce1865f).
                      </DxcTypography>
                    </DxcFlex>
                  </DxcInset>
                </DxcContainer>
              </DxcFlex>
            </DxcFlex>
          </DxcInset>
        </DxcApplicationLayout.Main>
      </DxcApplicationLayout>
    </ScaledPreviewContainer>
  );
};

export default DashboardPreview;
