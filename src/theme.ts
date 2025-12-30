import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  cssVariables: true,
  components: {
    MuiOutlinedInput: {
      variants: [{ props: { warning: true, error: false }, style: {} }],
      styleOverrides: {
        root: {
          [`& fieldset.MuiOutlinedInput-notchedOutline,
              &:hover fieldset.MuiOutlinedInput-notchedOutline,
              &.Mui-focused fieldset.MuiOutlinedInput-notchedOutline`]: {
            borderColor: "orange",
          },
          "&:hover": {
            backgroundColor: "blue",
          },
        },
      },
    },
  },
});
