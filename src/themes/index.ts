'use client';

import { createTheme, responsiveFontSizes } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles/createTheme";
import { Roboto } from 'next/font/google';

export const Colors = {
  primary: "#030352",
  secondary: "#FA5B7B",
  green: "#92d362",
};

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const defaultThemeOptions: ThemeOptions = {
  palette: {
    error: {
      main: "#D32F2F",
    },
    success: {
      main: "#2E7D32",
    },
    warning: {
      main: "#F9A825",
    },
    primary: {
        main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    background: {
        paper: 'rgba(250, 250, 250, 0.85)',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontFamily: roboto.style.fontFamily,
      fontWeight: 600, 
      fontSize: "3rem", 
    },
    h2: {
      fontFamily: roboto.style.fontFamily,
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h3: {
      fontFamily: roboto.style.fontFamily,
      fontWeight: 600,
      fontSize: "2rem",
    },
    h4: {
      fontFamily: roboto.style.fontFamily,
      fontWeight: 400, 
      fontSize: "1.5rem",
    },
    body1: {
      fontWeight: 400, 
      fontSize: "1rem",
    },
    body2: {
      fontWeight: 300, 
      fontSize: "0.875rem",
    },
    button: {
      fontWeight: 600, 
      fontSize: "0.875rem",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "8px !important",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px !important",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: Colors.green,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          minWidth: 800,
          maxWidth: "90%",
        },
      },
    },
  },
};

export const lightTheme = responsiveFontSizes(
  createTheme(defaultThemeOptions),
);
