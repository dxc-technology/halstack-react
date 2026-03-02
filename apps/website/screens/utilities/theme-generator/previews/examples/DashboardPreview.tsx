import React from "react";
import {
  DxcContainer,
  DxcFlex,
  DxcTypography,
  DxcHeading,
  DxcInset,
  DxcSpinner,
  DxcDivider,
  DxcButton,
} from "@dxc-technology/halstack-react";

const DashboardPreview = () => {
  return (
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
              <DxcContainer width="100%">
                <DxcFlex justifyContent="space-between">
                  <DxcHeading text={"Availability"} level={3} />
                  <DxcButton mode="tertiary" icon="open_in_new" />
                </DxcFlex>
              </DxcContainer>
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
                <DxcTypography fontSize="var(--font-size-48)" fontWeight="var(--font-weight-bold)" color="#D06C18">
                  N/A
                </DxcTypography>
                <DxcTypography fontSize="var(--font-size-xs)" color="var(--text-color-neutral)">
                  95th pctl. response time
                </DxcTypography>
              </DxcFlex>
              <DxcContainer width="100%">
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
              </DxcContainer>
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
                  <DxcTypography fontSize="var(--font-size-24)" fontWeight="var(--font-weight-bold)" color="#37A526">
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
                <DxcHeading text={"Insights"} level={3} />
              </DxcFlex>
              <DxcTypography fontSize="var(--font-size-xs)">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis ipsa tenetur ut fugiat ratione
                similique facere, vitae hic, impedit amet quasi dolore velit odit officia. Incidunt corporis sit rem.
              </DxcTypography>
            </DxcFlex>
          </DxcInset>
        </DxcContainer>
      </DxcFlex>
    </DxcFlex>
  );
};

export default DashboardPreview;
