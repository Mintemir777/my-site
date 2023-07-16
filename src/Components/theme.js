import { CssBaseline } from "@mui/material";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#ffffff #1a2938", // Change colors as needed
          scrollbarWidth: "thin",
        },
        '::-webkit-scrollbar': {
          width: '12px',
        },
        '::-webkit-scrollbar-track': {
          background: '#1a2938',
        },
        '::-webkit-scrollbar-thumb': {
          background: '#ffffff',
          borderRadius: '6px',
        },
      },
    },
  },
});
