import styled from "@emotion/styled";
import { TimePickerPropsType } from "./types";
import DxcContainer from "../container/Container";
import DxcFlex from "../flex/Flex";

const TimePickerContainer = styled.div`
  display: flex;
  height: 200px;
  gap: var(--spacing-gap-m);
`;

const TimePickerOption = styled.button<{
  selected: boolean;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: var(--height-m);
  padding: 0;
  border: none;
  border-radius: var(--border-radius-xl);
  cursor: pointer;
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  background-color: ${(props) => (props.selected ? "var(--color-bg-primary-strong);" : "transparent")};
  color: ${(props) => (props.selected ? "var(--color-fg-neutral-bright);" : "var(--color-fg-neutral-dark);")};

  &:focus {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    outline-offset: calc(var(--border-width-m) * -1);
  }
  &:hover {
    background-color: ${(props) =>
      props.selected ? "var(--color-bg-primary-strong);" : "var(--color-bg-primary-lighter);"};
    color: ${(props) => (props.selected ? "var(--color-fg-neutral-bright);" : "var(--color-fg-neutral-dark);")};
  }
  &:active {
    background-color: var(--color-bg-primary-stronger);
    color: var(--color-fg-neutral-bright);
  }
`;

const TimePicker = ({
  onSelecthours,
  onSelectMinutes,
  onSelectSeconds,
  onSelectDayPeriod,
  timeFormat,
  showSeconds,
}: TimePickerPropsType) => {
  const hours = timeFormat === "12" ? 12 : 24;
  return (
    <TimePickerContainer>
      <DxcContainer maxHeight="100%" overflow="auto">
        <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
          {Array.from({ length: hours }, (_, index) => (
            <TimePickerOption
              key={index}
              selected={false}
              onClick={() => onSelecthours(index + 1 === 24 ? 0 : index + 1)}
            >
              {index + 1 === 24 ? "00" : index + 1 < 10 ? `0${index + 1}` : index + 1}
            </TimePickerOption>
          ))}
        </DxcFlex>
      </DxcContainer>
      <DxcContainer maxHeight="100%" overflow="auto">
        <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
          {Array.from({ length: 60 }, (_, index) => (
            <TimePickerOption key={index} selected={false} onClick={() => onSelectMinutes(index)}>
              {index < 10 ? `0${index}` : index}
            </TimePickerOption>
          ))}
        </DxcFlex>
      </DxcContainer>
      {showSeconds && (
        <DxcContainer maxHeight="100%" overflow="auto">
          <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
            {Array.from({ length: 60 }, (_, index) => (
              <TimePickerOption key={index} selected={false} onClick={() => onSelectSeconds(index)}>
                {index < 10 ? `0${index}` : index}
              </TimePickerOption>
            ))}
          </DxcFlex>
        </DxcContainer>
      )}
      {timeFormat === "12" && (
        <DxcContainer maxHeight="100%" overflow="auto">
          <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
            {["AM", "PM"].map((period) => (
              <TimePickerOption
                key={period}
                selected={false}
                onClick={() => {
                  if (typeof onSelectDayPeriod === "function") {
                    onSelectDayPeriod(period === "AM");
                  }
                }}
              >
                {period}
              </TimePickerOption>
            ))}
          </DxcFlex>
        </DxcContainer>
      )}
    </TimePickerContainer>
  );
};

export default TimePicker;
