import React from "react";

import NumberInputContextPropsType from "./numberInputContextTypes";

const defaultState = {
  stepNumber: 1,
};

const NumberInputContext = React.createContext<NumberInputContextPropsType>(defaultState);

export default NumberInputContext;
