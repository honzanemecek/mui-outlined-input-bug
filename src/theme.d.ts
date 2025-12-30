export {};

declare module "@mui/material/InputBase" {
  interface InputBaseOwnProps {
    /** if true, the input will have a warning color, error has higher priority */
    warning?: boolean;
  }
  interface InputBaseProps {
    warning?: boolean;
  }
}

declare module "@mui/material/OutlinedInput" {
  interface OutlinedInputOwnProps {
    /** if true, the input will have a warning color, error has higher priority */
    warning?: boolean;
  }
  interface OutlinedInputProps {
    warning?: boolean;
  }
}

declare module "@mui/material/TextField" {
  interface BaseTextFieldProps {
    /** if true, the input will have a warning color, error has higher priority */
    warning?: boolean;
  }
}

declare module "@mui/material/FormHelperText" {
  interface FormHelperTextOwnProps {
    /** if true, the input will have a warning color, error has higher priority */
    warning?: boolean;
  }
}
