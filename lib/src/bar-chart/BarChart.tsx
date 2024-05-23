import React, { memo } from "react";
import { BarChart } from "@cloudscape-design/components";
import { applyTheme } from "@cloudscape-design/components/theming";
import { useState, useMemo, useCallback } from "react";
import BarChartProps, { DataTypes, InsetWrapperProps } from "./types";
import theme from "./theme";
import styled, { css } from "styled-components";
import { DxcSpinner, DxcTypography, DxcInset, DxcSelect, DxcButton, DxcFlex, DxcHeading, DxcGrid } from "../main";
import DxcIcon from "../icon/Icon";
import CoreTokens from "../common/coreTokens";

/**
 * Cloudscape Design Components - Theming
 * https://cloudscape.design/foundation/visual-foundation/theming/
 */
applyTheme({ theme });

const LoadingStatus = memo(() => (
  <LoadingContainer>
    <DxcSpinner mode="small" />
    Loading data.
  </LoadingContainer>
));

const StatusMessage = memo(({ title, description }: { title: string; description: string }) => (
  <StatusMessageContainer>
    <strong>{title}</strong>
    {description}
  </StatusMessageContainer>
));

const InsetWrapper = ({ condition, children }: InsetWrapperProps): JSX.Element => (
  <>{condition ? <DxcInset top="0.5rem">{children}</DxcInset> : children}</>
);

const DxcBarChart = <X extends DataTypes>({
  chartTitle,
  error,
  horizontalBars,
  legendTitle,
  loading,
  onFilterChange,
  onHighlightChange,
  onRetry,
  series,
  showFilter,
  showLegend,
  stackedBars,
  xDomain,
  xTitle,
  yDomain,
  yTitle,
}: BarChartProps<X>) => {
  const [filteredData, setFilteredData] = useState(series);
  const filters = useMemo(() => series.map((series) => series.title), [series]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>(filters);

  const filterData = useCallback(
    (value: string[]) => {
      setSelectedFilters(value);
      setFilteredData(series.filter((series) => value.includes(series.title)));
    },
    [series]
  );

  return loading ? (
    <LoadingStatus />
  ) : error ? (
    <ErrorStatus>
      <Label>
        <DxcIcon icon="cancel" />
        {error}
      </Label>
      <DxcButton
        label="Retry"
        mode="secondary"
        onClick={() => {
          onRetry();
        }}
      />
    </ErrorStatus>
  ) : (
    <DxcGrid gap="1rem">
      {chartTitle && (
        <DxcGrid.Item placeSelf="center">
          <DxcHeading text={chartTitle} level={2} />
        </DxcGrid.Item>
      )}
      {showFilter && (
        <DxcSelect
          label="Filter displayed data"
          placeholder="Select series..."
          multiple
          options={filters.map((filter) => ({
            label: filter,
            value: filter,
          }))}
          value={selectedFilters}
          onChange={({ value: visibleSeries }) => {
            filterData(visibleSeries);
            onFilterChange?.(visibleSeries);
          }}
        />
      )}
      <InsetWrapper condition={!yTitle && !horizontalBars}>
        <BarChart
          series={series as any}
          visibleSeries={filteredData as any}
          xDomain={xDomain as any}
          yDomain={yDomain}
          ariaLabel="Single data series line chart"
          xTitle={xTitle}
          yTitle={yTitle}
          legendTitle={legendTitle}
          hideLegend={!showLegend}
          horizontalBars={horizontalBars}
          stackedBars={stackedBars}
          empty={<StatusMessage title="No data available" description="There's not data available." />}
          noMatch={
            <StatusMessage title="No matching data" description="Try changing the filters or reloading the data." />
          }
          hideFilter
          onHighlightChange={(highlightedSeries) => {
            const highlightedSeriesTitle = highlightedSeries.detail.highlightedSeries?.title;
            onHighlightChange?.(highlightedSeriesTitle);
          }}
        />
      </InsetWrapper>
    </DxcGrid>
  );
};

const sharedStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${CoreTokens.type_sans};
  font-size: ${CoreTokens.type_scale_02};
  min-height: 500px;
`;

const ErrorStatus = styled.span`
  ${sharedStyles}
  flex-direction: column;
  gap: ${CoreTokens.spacing_16};
  color: ${CoreTokens.color_red_700};
`;

const Label = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${CoreTokens.spacing_4};

  > span {
    font-size: 20px;
  }
`;

const LoadingContainer = styled.span`
  ${sharedStyles}
  gap: ${CoreTokens.spacing_8};
  color: ${CoreTokens.color_grey_900};
`;

const StatusMessageContainer = styled.span`
  ${sharedStyles}
  flex-direction: column;
  gap: ${CoreTokens.spacing_4};
  color: ${CoreTokens.color_grey_800};
`;

export default DxcBarChart;
