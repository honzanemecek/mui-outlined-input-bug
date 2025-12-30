export {};

declare module "@mui/material/InputBase" {
  interface InputBaseProps {
    /* if true, the input will have a warning color, error has higher priority */
    warning?: boolean;
  }
}

declare module "@mui/material/TextField" {
  interface BaseTextFieldProps {
    /* if true, the input will have a warning color, error has higher priority */
    warning?: boolean;
  }
}

declare module "@mui/material/FormHelperText" {
  interface FormHelperTextOwnProps {
    /* if true, the input will have a warning color, error has higher priority */
    warning?: boolean;
  }
}

declare module "@mui/material/OutlinedInput" {
  interface OutlinedInputProps {
    warning: boolean;
  }
}
