import React from "react";
import theme from "@themes/defaultTheme";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { NotificationProvider } from "@contexts/Notification";
import { Notification } from "@components/Notification/Notification";

const App = ({ children }) => {
    return (
        <StyledThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <NotificationProvider>
                    {children}
                    <Notification />
                </NotificationProvider>
            </ThemeProvider>
        </StyledThemeProvider>
    );
};

export default App;
