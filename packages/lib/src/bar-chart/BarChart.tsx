import { memo } from "react";
import { BarChart } from "@cloudscape-design/components-themed";
import { useState, useMemo, useCallback } from "react";
import BarChartProps, { DataTypes, InsetWrapperProps } from "./types";
import styled, { css } from "styled-components";
import DxcSpinner from "../spinner/Spinner";
import DxcInset from "../inset/Inset";
import DxcSelect from "../select/Select";
import DxcButton from "../button/Button";
import DxcHeading from "../heading/Heading";
import DxcGrid from "../grid/Grid";
import DxcIcon from "../icon/Icon";
import CoreTokens from "../common/coreTokens";
import useTranslatedLabels from "../useTranslatedLabels";

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
  xFormatter,
  xTitle,
  yDomain,
  yFormatter,
  yTitle,
}: BarChartProps<X>) => {
  const [filteredData, setFilteredData] = useState(series);
  const filters = useMemo(() => series.map((series) => series.title), [series]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>(filters);
  const translatedLabels = useTranslatedLabels();

  const filterData = useCallback(
    (value: string[]) => {
      setSelectedFilters(value);
      setFilteredData(series.filter((series) => value.includes(series.title)));
    },
    [series]
  );

  return loading ? (
    <LoadingContainer>
      <DxcSpinner mode="small" />
      {translatedLabels.barChart.loadingDataMessage}
    </LoadingContainer>
  ) : error ? (
    <ErrorStatus>
      <Label>
        <DxcIcon icon="cancel" />
        {error}
      </Label>
      {onRetry && (
        <DxcButton
          label={translatedLabels.barChart.retryButtonLabel}
          mode="secondary"
          onClick={() => {
            onRetry();
          }}
        />
      )}
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
          label={translatedLabels.barChart.filterLabel}
          multiple
          onChange={({ value: visibleSeries }) => {
            filterData(visibleSeries);
            onFilterChange?.(visibleSeries);
          }}
          options={filters.map((filter) => ({
            label: filter,
            value: filter,
          }))}
          placeholder={translatedLabels.barChart.filterPlaceholder}
          searchable
          value={selectedFilters}
        />
      )}
      <InsetWrapper condition={!yTitle && !horizontalBars}>
        <BarChart
          ariaLabel={translatedLabels.barChart.ariaLabel}
          empty={
            <StatusMessage
              title={translatedLabels.barChart.noDataMessageTitle}
              description={translatedLabels.barChart.noDataMessageBody}
            />
          }
          hideFilter
          hideLegend={!showLegend}
          horizontalBars={horizontalBars}
          legendTitle={legendTitle}
          noMatch={
            <StatusMessage
              title={translatedLabels.barChart.noMatchesMessageTitle}
              description={translatedLabels.barChart.noMatchesMessageBody}
            />
          }
          onHighlightChange={(highlightedSeries) => {
            const highlightedSeriesTitle = highlightedSeries.detail.highlightedSeries?.title;
            onHighlightChange?.(highlightedSeriesTitle);
          }}
          series={series as any}
          stackedBars={stackedBars}
          visibleSeries={filteredData as any}
          xDomain={xDomain as any}
          xTickFormatter={xFormatter}
          xTitle={xTitle}
          yDomain={yDomain}
          yTickFormatter={yFormatter}
          yTitle={yTitle}
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
