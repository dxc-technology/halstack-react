import { responsiveSizes } from "../common/variables";

export const isMobile = (width: number) => width && width <= Number(responsiveSizes.medium) * 16;
