"use client"
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import '@fontsource/lexend/400.css';
import '@fontsource/lexend/500.css';
import '@fontsource/lexend/600.css';
import '@fontsource/lexend/700.css';
import '@fontsource/lexend/800.css';
import '@fontsource/lexend/900.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3F86FA', // Blue
        },
        secondary: {
            main: '#2B323E', // Dark Gray
        },
        text: {
            main: '#787A7E', // Gray
        },
        light: {
            main: "#FFFFFF" // white
        },
        mode: 'light',
        typography: {
            fontFamily: 'Lexend, sans-serif',
        },
    },
});

const MUIProvider = ({ children }) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
)

export default MUIProvider;
