export interface DialogButton {
  text: string;
  textColor?:
    | "error"
    | "info"
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
  onClick: () => void;
}

export interface GlobalDialogProps {
  isDialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
  title: string;
  context: string;
  buttonText?: DialogButton[];
  dialogSize: "xs" | "sm" | "md" | "lg" | "xl";
}
