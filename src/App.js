import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "./App.css";
import Header from "./Components/Header";
import AnimatedRoutes from "./Components/AnimatedRoutes";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#6386AB #1a2938", // Change colors as needed
          scrollbarWidth: "thin",
        },
        '::-webkit-scrollbar': {
          width: '5px',
          height: '5px', // Set the height for the horizontal scrollbar
        },
        '::-webkit-scrollbar-track': {
          background: '#ffffff',
        },
        '::-webkit-scrollbar-thumb': {
          background: '#6386AB',
          borderRadius: '10px',
        },
        '::-webkit-scrollbar-thumb:horizontal': {
          background: '#6386AB', // Set a different color for the horizontal scrollbar thumb if needed
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Header />
        <AnimatedRoutes />
      </>
    </ThemeProvider>
  );
}

export default App;
