import {
    default as styledStyled,
    css as styledCss,
    ThemedStyledInterface,
    ThemedCssFunction,
} from "styled-components";
import { Theme } from "@material-ui/core";

export const styled = styledStyled as ThemedStyledInterface<Theme>;
export const css = styledCss as ThemedCssFunction<Theme>;
