import React from "react";

import NumberInputContextPropTypes from "./numberInputContextTypes";

const defaultState = {
  stepNumber: 1,
};

const NumberInputContext = React.createContext<NumberInputContextPropTypes>(defaultState);

export default NumberInputContext;
