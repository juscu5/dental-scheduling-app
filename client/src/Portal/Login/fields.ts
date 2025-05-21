import { FormElement } from "../../_shared/components/Types/FormElement";

export const getLoginFields = (isLoading: boolean): FormElement[] => {
  return [
    {
      type: "text",
      name: "username",
      label: "Username",
      placeholder: "Username",
      disabled: isLoading,
      fullWidth: true,
      required: true,
      autoFocus: true,
      errorRequiredText: "Username is required.",
      readOnly: false,
    },
    {
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "Password",
      disabled: isLoading,
      fullWidth: true,
      required: true,
      autoFocus: false,
      errorRequiredText: "Password is required.",
      readOnly: false,
    },
  ];
};
