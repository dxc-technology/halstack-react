import React, { useState } from "react";
import { DxcSelect } from "@diaas/dxc-react-cdk";
import homePath from "../images/home.svg";

function App() {
  const [inputValue, changeInput] = useState(1);
  const onChange = newValue => {
    changeInput(newValue);
  };

  const [inputMultipleValue, changeMultipleInput] = useState([1, 2]);
  const onChangeMultiple = newValue => {
    changeMultipleInput(newValue);
  };

  const optionsWithoutIcon = [
    {
      value: 1,
      label: "Amazon"
    },
    {
      value: 2,
      label: "Ebay"
    },
    {
      value: 3,
      label: "Apple"
    },
    {
      value: 4,
      label: "Google"
    }
  ];

  const optionsWithIcon = [
    {
      value: 1,
      iconSrc: homePath
    },
    {
      value: 2,
      iconSrc: homePath
    },
    {
      value: 3,
      iconSrc: homePath
    }
  ];

  const optionsWithIconAndLabels = [
    {
      value: 1,
      iconSrc: homePath,
      label: "Home"
    },
    {
      value: 2,
      iconSrc: homePath,
      label: "House"
    },
    {
      value: 3,
      iconSrc: homePath,
      label: "Home is the selected option for this select component of the Csss"
    }
  ];
  const optionsWithIconAndLabelsMinLongOneLine = [
    {
      value: 1,
      iconSrc: homePath,
      label: "Ho"
    },
    {
      value: 2,
      iconSrc: homePath,
      label: "Housesssssssssssssssssss"
    },
    {
      value: 3,
      iconSrc: homePath,
      label: "Home is the selected option for this select component12"
    },
    {
      value: 4,
      iconSrc: homePath,
      label: "Housessssssssssssssssss"
    },
    {
      value: 5,
      iconSrc: homePath,
      label: "Home is the selected opt"
    }
  ];
  const optionsWithIconAndLabelsMaxLongMultiLine = [
    {
      value: 1,
      iconSrc: homePath,
      label: "Hom"
    },
    {
      value: 2,
      iconSrc: homePath,
      label: "Housesssssssssssssssssss"
    },
    {
      value: 3,
      iconSrc: homePath,
      label: "Home is the selected option for this select component123"
    }
  ];

  const longOptionLabels = [
    {
      value: 1,
      label: "Home is the selected option for this select component of the Css"
    },
    {
      value: 2,
      label: "Houses"
    },
    {
      value: 3,
      label: "Housess"
    },
    {
      value: 4,
      label: "Habitatsssssssssssssssssssss"
    },
    {
      value: 5,
      label: "Habitatssssssssssssssssssssss"
    },
    {
      value: 6,
      label: "Home is the selected option for this select component of the Csss"
    },
    {
      value: 7,
      label: "Home is the selected option for this select component of this"
    }
  ];

  return (
    <div>
      <div>
        <h4>Sizes</h4>
        <div class="test-case" id="small-size">
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            label={"Small"}
            options={optionsWithIcon}
            size="small"
          ></DxcSelect>
        </div>
        <div class="test-case" id="medium-size">
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            label={"Medium"}
            options={optionsWithIconAndLabels}
            size="medium"
            margin="xsmall"
          ></DxcSelect>
        </div>
        <div class="test-case" id="large-size">
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            label={"Large"}
            options={optionsWithIconAndLabels}
            size="large"
            margin="xsmall"
          ></DxcSelect>
        </div>
        <div class="test-case" id="fillParent-size">
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            label={"Fill Parent"}
            options={optionsWithIcon}
            size="fillParent"
          ></DxcSelect>
        </div>
      </div>
      <div>
        <h4>Margins</h4>
        <div class="test-case" id="xxsmall-margin">
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            label={"xxSmall margin"}
            options={optionsWithIconAndLabels}
            margin="xxsmall"
          ></DxcSelect>
        </div>
        <div class="test-case" id="xsmall-margin">
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            label={"xSmall margin"}
            options={optionsWithIconAndLabels}
            margin="xsmall"
          ></DxcSelect>
        </div>
        <div class="test-case" id="small-margin">
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            label={"Small margin"}
            options={optionsWithIconAndLabels}
            margin="small"
          ></DxcSelect>
        </div>
        <div class="test-case" id="medium-margin">
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            label={"Medium margin"}
            options={optionsWithIconAndLabels}
            margin="medium"
          ></DxcSelect>
        </div>
        <div class="test-case" id="large-margin">
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            label={"Large margin"}
            options={optionsWithIconAndLabels}
            margin="large"
          ></DxcSelect>
        </div>
        <div class="test-case" id="xlarge-margin">
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            label={"xLarge margin"}
            options={optionsWithIconAndLabels}
            margin="xlarge"
          ></DxcSelect>
        </div>
        <div class="test-case" id="xxlarge-margin">
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            label={"xxLarge margin"}
            options={optionsWithIconAndLabels}
            margin="xxlarge"
          ></DxcSelect>
        </div>
      </div>
      <div>
        <h4>Padding</h4>
        <div class="test-case" id="xxsmall-padding">
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            label={"xxSmall padding"}
            options={optionsWithIconAndLabels}
            padding="xxsmall"
          ></DxcSelect>
        </div>
        <div class="test-case" id="xsmall-padding">
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            label={"xPadding margin"}
            options={optionsWithIconAndLabels}
            padding="xsmall"
          ></DxcSelect>
        </div>
        <div class="test-case" id="small-padding">
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            label={"Small padding"}
            options={optionsWithIconAndLabels}
            padding="small"
          ></DxcSelect>
        </div>
        <div class="test-case" id="medium-padding">
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            label={"Medium padding"}
            options={optionsWithIconAndLabels}
            padding="medium"
          ></DxcSelect>
        </div>
        <div class="test-case" id="large-padding">
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            label={"Large padding"}
            options={optionsWithIconAndLabels}
            padding="large"
          ></DxcSelect>
        </div>
        <div class="test-case" id="xlarge-padding">
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            label={"xLarge padding"}
            options={optionsWithIconAndLabels}
            padding="xlarge"
          ></DxcSelect>
        </div>
        <div class="test-case" id="xxlarge-padding">
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            label={"xxLarge padding"}
            options={optionsWithIconAndLabels}
            padding="xxlarge"
          ></DxcSelect>
        </div>
      </div>
      <div>
        <div class="test-case" id="Medium-max-label-size-oneline">
          <h4>Medium select - Max label size in one line</h4>
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            size="medium"
            label={"MaximumSizeForMultilineLabel1"}
            options={optionsWithIconAndLabels}
          ></DxcSelect>
        </div>
        <div class="test-case" id="Medium-min-label-size-multiline">
          <h4>Medium select - Min label size in multi line</h4>
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            size="medium"
            label={"Maximum Size For Multiline Label12"}
            options={optionsWithIconAndLabels}
          ></DxcSelect>
        </div>
        <div class="test-case" id="Large-max-label-size-oneline">
          <h4>Large select - Max label size in one line</h4>
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            size="large"
            label={
              "Large size example label one single line select component select1"
            }
            options={optionsWithIconAndLabels}
          ></DxcSelect>
        </div>
        <div class="test-case" id="Large-min-label-size-multiline">
          <h4>Large select - Min label size in multi line</h4>
          <DxcSelect
            onChange={onChange}
            value={inputValue}
            size="large"
            label={
              "Large size example label one single line select component select12"
            }
            options={optionsWithIconAndLabels}
          ></DxcSelect>
        </div>
        <div
          class="test-case"
          id="Medium-select-max-size-selected-item-oneline"
        >
          <h4>Medium select - Max size selected option label oneline</h4>
          <DxcSelect
            onChange={onChange}
            value={4}
            size="medium"
            label={"Medium Select"}
            options={longOptionLabels}
          ></DxcSelect>
        </div>
        <div
          class="test-case"
          id="Medium-select-min-size-selected-item-multiline"
        >
          <h4>Medium select - Min size selected option label multiline</h4>
          <DxcSelect
            onChange={onChange}
            value={5}
            size="medium"
            label={"Medium Select"}
            options={longOptionLabels}
          />
        </div>
        <div class="test-case" id="Large-select-max-size-selected-item-oneline">
          <h4>Large select - Max size selected option label oneline</h4>
          <DxcSelect
            onChange={onChange}
            value={7}
            size="large"
            label={"Large Select"}
            options={longOptionLabels}
          ></DxcSelect>
        </div>
        <div
          class="test-case"
          id="Large-select-min-size-selected-item-multiline"
        >
          <h4>Large select - Min size selected option label multiline</h4>
          <DxcSelect
            onChange={onChange}
            value={6}
            size="large"
            label={"Large Select"}
            options={longOptionLabels}
          ></DxcSelect>
        </div>
        <div class="test-case" id="Medium-select-Max-label-size-oneline-Icon-Before&Label">
          <h4>
            Medium select - Icon and label - Max label size oneline (Icon
            Before){" "}
          </h4>
          <DxcSelect
            onChange={onChange}
            value={4}
            size="medium"
            label={"Medium Select"}
            iconPosition={"before"}
            options={optionsWithIconAndLabelsMinLongOneLine}
          ></DxcSelect>
        </div>
        <div
          class="test-case"
          id="Medium-select-Min-label-size-multiline-Icon-Before&Label-Multiline"
        >
          <h4>
            Medium select - Icon and label - Min label size multiline (Icon
            Before) 
          </h4>
          <DxcSelect
            onChange={onChange}
            value={2}
            size="medium"
            label={"Medium Select"}
            iconPosition={"before"}
            options={optionsWithIconAndLabelsMaxLongMultiLine}
          ></DxcSelect>
        </div>
        <div class="test-case" id="Large-select-Max-label-size-oneline-Icon-Before&Label">
          <h4>
            Large select - Icon and label - Max label size oneline (Icon Before){" "} 
          </h4>
          <DxcSelect
            onChange={onChange}
            value={3}
            size="large"
            label={"Large Select"}
            iconPosition={"before"}
            options={optionsWithIconAndLabelsMinLongOneLine}
          ></DxcSelect>
        </div>
        <div class="test-case" id="Large-select-Min-label-size-multiline-Icon-Before&Label">
          <h4>
            Large select - Icon and label - Min label size multiline (Icon
            Before){" "}
          </h4>
          <DxcSelect
            onChange={onChange}
            value={3}
            size="large"
            label={"Large Select"}
            iconPosition={"before"}
            options={optionsWithIconAndLabelsMaxLongMultiLine}
          ></DxcSelect>
        </div>
        <div class="test-case" id="Medium-select-Max-label-size-oneline-Icon-after&Label">
          <h4>
            Medium select - Icon and label - Max label size oneline (Icon After){" "}
          </h4>
          <DxcSelect
            onChange={onChange}
            value={5}
            iconPosition="after"
            size="medium"
            label={"Medium Select"}
            options={optionsWithIconAndLabelsMinLongOneLine}
          ></DxcSelect>
        </div>
        <div
          class="test-case"
          id="Medium-select-Min-label-size-multiline-Icon-after&Label-Multiline"
        >
          <h4>
            Medium select - Icon and label - Min label size multiline (Icon
            After)
          </h4>
          <DxcSelect
            onChange={onChange}
            value={2}
            iconPosition="after"
            size="medium"
            label={"Medium Select"}
            options={optionsWithIconAndLabelsMaxLongMultiLine}
          ></DxcSelect>
        </div>
        <div class="test-case" id="Large-select-Max-label-size-oneline-Icon-after&Label">
          <h4>
            Large select - Icon and label - Max label size oneline (Icon After){" "}
          </h4>
          <DxcSelect
            onChange={onChange}
            value={3}
            iconPosition="after"
            size="large"
            label={"Large Select"}
            options={optionsWithIconAndLabelsMinLongOneLine}
          ></DxcSelect>
        </div>
        <div class="test-case" id="Large-select-min-label-size-multiline-Icon-after&Label">
          <h4>
            Large select - Icon and label - Min label size multiline (Icon
            After){" "}
          </h4>
          <DxcSelect
            onChange={onChange}
            value={3}
            iconPosition="after"
            size="large"
            label={"Large Select"}
            options={optionsWithIconAndLabelsMaxLongMultiLine}
          ></DxcSelect>
        </div>
        <div class="test-case" id="Medium-select-Max-label-size-oneline">
          <h4>
            Medium select - Only label - Max label size oneline
          </h4>
          <DxcSelect
            onChange={onChange}
            iconPosition="after"
            size="medium"
            label={"Medium Select max max max"}
            options={longOptionLabels}
          ></DxcSelect>
        </div>
        <div class="test-case" id="Medium-select-Min-label-size-multiline">
          <h4>
            Medium select - Only label - Min label size multiline
          </h4>
          <DxcSelect
            onChange={onChange}
            iconPosition="after"
            size="medium"
            label={"Medium Select max max max1"}
            options={longOptionLabels}
          ></DxcSelect>
        </div>
        <div class="test-case" id="Large-select-Max-label-size-oneline">
          <h4>
            Large select - Only label - Max label size oneline
          </h4>
          <DxcSelect
            onChange={onChange}
            iconPosition="after"
            size="large"
            label={"Large Select max max max max max max max max max m1"}
            options={longOptionLabels}
          ></DxcSelect>
        </div>
        <div class="test-case" id="Large-select-Min-label-size-multiline">
          <h4>
            Large select - Only label - Min label size multiline
          </h4>
          <DxcSelect
            onChange={onChange}
            iconPosition="after"
            size="large"
            label={"Large Select max max max max max max max max max m1234"}
            options={longOptionLabels}
          ></DxcSelect>
        </div>
        <div class="test-case" id="multiple-icons&labels">
          <h4>Multiple select labels and icons selected</h4>
          <DxcSelect
            onChange={onChange}
            value={[1, 2]}
            multiple={true}
            size="medium"
            label={"Multiple Labels"}
            options={optionsWithIconAndLabels}
          ></DxcSelect>
        </div>
        <div class="test-case" id="multiple icons">
          <h4>Multiple select only icons selected</h4>
          <DxcSelect
            onChange={onChange}
            value={[1, 2]}
            multiple={true}
            size="medium"
            label={"Multiple Icons"}
            options={optionsWithIcon}
          ></DxcSelect>
        </div>
        <div class="test-case" id="mandatory-no-value">
          <h4>Mandatory select</h4>
          <DxcSelect
            onChange={onChange}
            required={true}
            size="medium"
            label={"Multiple no value"}
            options={optionsWithIcon}
          ></DxcSelect>
        </div>
        <div class="test-case" id="mandatory-with-value">
          <h4>Mandatory select with selected option</h4>
          <DxcSelect
            onChange={onChange}
            value={1}
            required={true}
            size="medium"
            label={"Mandatory Icons"}
            options={optionsWithIcon}
          ></DxcSelect>
        </div>
        <div class="test-case" id="disabled-no-value">
          <h4>disabled select</h4>
          <DxcSelect
            onChange={onChange}
            // value={1}
            disabled={true}
            size="medium"
            label={"Disabled Icons"}
            options={optionsWithIcon}
          ></DxcSelect>
        </div>
        <div class="test-case" id="disabled-with-value">
          <h4>disabled select with selected option</h4>
          <DxcSelect
            onChange={onChange}
            value={1}
            disabled={true}
            size="medium"
            label={"Disabled Icons"}
            options={optionsWithIcon}
          ></DxcSelect>
        </div>
      </div>
      <DxcSelect
        onChange={onChange}
        value={inputValue}
        label={"Controlled Select"}
        options={optionsWithoutIcon}
        margin="medium"
        padding={{
          top: "small",
          left: "medium",
          right: "medium",
          bottom: "small"
        }}
      ></DxcSelect>

      <DxcSelect
        onChange={onChangeMultiple}
        value={inputMultipleValue}
        label={"Controlled Select"}
        options={optionsWithoutIcon}
        multiple={true}
        margin="medium"
        padding="small"
        size="large"
      ></DxcSelect>

      <DxcSelect
        label={"Icons"}
        options={optionsWithIcon}
        margin="medium"
        padding="xxsmall"
        size="small"
      ></DxcSelect>

      <DxcSelect
        label={"Controlled Select"}
        options={optionsWithIconAndLabels}
        multiple={true}
        iconPosition={"before"}
        margin="medium"
        padding={{
          top: "xxsmall",
          left: "medium",
          right: "medium",
          bottom: "xxsmall"
        }}
        size="large"
      ></DxcSelect>
    </div>
  );
}

export default App;
