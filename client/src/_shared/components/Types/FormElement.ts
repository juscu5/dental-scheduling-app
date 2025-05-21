export interface FormElement {
  type: "text" | "password" | "number" | "select" | "date" | "toggle";
  name: string;
  label: string;
  placeholder: string;
  fullWidth: boolean;
  required: boolean;
  disabled: boolean;
  readOnly: boolean;
  autoFocus: boolean;
  errorRequiredText?: string;
  multiline?: boolean;
  selectOpt?: { id: string; name: string }[];
  toggleStyle?: "android" | "ios" | "ant" | "switch" | "checkbox";
}
