/* eslint-disable prefer-template */
import React from "react";

interface INumberInputContext {
  typeNumber?: string;
  minNumber?: number;
  maxNumber?: number;
  stepNumber?: number;
}

const defaultState = {
  stepNumber: 1,
};

const NumberInputContext = React.createContext<INumberInputContext>(defaultState);

export default NumberInputContext;
