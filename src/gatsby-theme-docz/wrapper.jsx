import React from "react";
import theme from "@themes/defaultTheme";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const App = ({ children }) => {
    return (
        <StyledThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledThemeProvider>
    );
};

export default App;
