import styled from "@emotion/styled";
import DxcContainer from "../container/Container";
import DxcFlex from "../flex/Flex";
import { pad } from "./utils";

const TimePickerOption = styled.li<{
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

const returnHourBasedOnIndex = (index: number, dataType: "hour" | "minute" | "second" | "dayPeriod") => {
  if (dataType === "hour") {
    return index + 1 === 24 ? 0 : index + 1;
  } else if (dataType === "dayPeriod") {
    return index === 0 ? 0 : 1;
  } else {
    return index;
  }
};

const returnDayPeriod = (value: number) => {
  return value === 0 ? "AM" : value === 1 ? "PM" : "";
};

const TimePickerColumn = ({
  valuesArray,
  id,
  selectedValue,
  valueToFocus,
  tabIndex,
  dataType,
  onClick,
  onKeyboardEvent,
}: {
  valuesArray: number[];
  id?: string;
  selectedValue?: number;
  valueToFocus: number;
  tabIndex: number;
  dataType: "hour" | "minute" | "second" | "dayPeriod";
  onClick: (value: number) => void;
  onKeyboardEvent: (event: React.KeyboardEvent, value: number) => void;
}) => {
  return (
    <DxcContainer
      maxHeight="100%"
      overflow="auto"
      padding={dataType !== "dayPeriod" ? { right: "var(--spacing-padding-xs)" } : undefined}
    >
      <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
        {valuesArray.map((optionValue) => (
          <TimePickerOption
            role="option"
            key={`${dataType}-${returnHourBasedOnIndex(optionValue, dataType)}`}
            id={`${id}-${dataType}-${returnHourBasedOnIndex(optionValue, dataType)}`}
            selected={selectedValue === returnHourBasedOnIndex(optionValue, dataType)}
            aria-selected={selectedValue === returnHourBasedOnIndex(optionValue, dataType)}
            autoFocus={valueToFocus === returnHourBasedOnIndex(optionValue, dataType)}
            tabIndex={valueToFocus === returnHourBasedOnIndex(optionValue, dataType) ? tabIndex || 0 : -1}
            onClick={() => {
              onClick(returnHourBasedOnIndex(optionValue, dataType));
            }}
            onKeyDown={(event) => {
              if (typeof onKeyboardEvent === "function")
                onKeyboardEvent(event, returnHourBasedOnIndex(optionValue, dataType));
            }}
          >
            {dataType !== "dayPeriod"
              ? pad(returnHourBasedOnIndex(optionValue, dataType))
              : returnDayPeriod(returnHourBasedOnIndex(optionValue, dataType))}
          </TimePickerOption>
        ))}
      </DxcFlex>
    </DxcContainer>
  );
};

export default TimePickerColumn;
