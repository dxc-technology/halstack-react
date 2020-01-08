export const getMargin = (marginProp, side) => {
    if (marginProp && typeof marginProp === "object") {
      return (marginProp[side] && spaces[marginProp[side]] || "0px");
    } else {
      return (marginProp && spaces[marginProp] || "0px");
    }
  };
  