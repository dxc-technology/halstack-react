import { responsiveSizes } from "../common/variables";

export const isResponsive = (width: number) => width && width <= Number(responsiveSizes.medium) * 16;
