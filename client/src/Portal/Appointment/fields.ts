import { FormElement } from "../../_shared/components/Types/FormElement";

export const getAppointmentFields = (isLoading: boolean): FormElement[] => {
  return [
    {
      type: "select",
      name: "dentist",
      label: "Dentist",
      placeholder: "Dentist",
      disabled: isLoading,
      fullWidth: true,
      required: true,
      autoFocus: true,
      errorRequiredText: "Dentist is required.",
      readOnly: false,
      selectOpt: [
        {
          id: "Dr. Cha",
          name: "Dr. Cha",
        },
        {
          id: "Dr. Kinemon",
          name: "Dr. Kinemon",
        },
        {
          id: "Dr. Lening",
          name: "Dr. Lening",
        },
        {
          id: "Dr. Dela Cruz",
          name: "Dr. Dela Cruz",
        },
        {
          id: "Dr. Marisigan",
          name: "Dr. Marisigan",
        },
      ],
    },
    {
      type: "select",
      name: "service_name",
      label: "Service",
      placeholder: "Service",
      disabled: isLoading,
      fullWidth: true,
      required: true,
      autoFocus: true,
      errorRequiredText: "Service is required.",
      readOnly: false,
      selectOpt: [
        {
          id: "Toot Fillings",
          name: "Toot Fillings",
        },
        {
          id: "Tooth Extraction",
          name: "Tooth Extraction",
        },
        {
          id: "X-ray and other Diagnostic Services",
          name: "X-ray and other Diagnostic Services",
        },
        {
          id: "Children's Dentistry Services",
          name: "Children's Dentistry Service",
        },
        {
          id: "Tooth Implants",
          name: "Tooth Implants",
        },
        {
          id: "Dentures and Tooth Capping",
          name: "Dentures and Tooth Capping",
        },
        {
          id: "Orthodontic Braces and TMJ Therapy",
          name: "Orthodontic Braces and TMJ Therapy",
        },
        {
          id: "Root Canal Therapy",
          name: "Root Canal Therapy",
        },
        {
          id: "Gum Diseases / Bleeding Gums Management",
          name: "Gum Diseases / Bleeding Gums Management",
        },
        {
          id: "Cosmetic, Smile Management, and Teeth Whitening / Bleaching Dentistry",
          name: "Cosmetic, Smile Management, and Teeth Whitening / Bleaching Dentistry",
        },
      ],
    },
    {
      type: "date",
      name: "date",
      label: "Date",
      placeholder: "Date",
      disabled: isLoading,
      fullWidth: true,
      required: true,
      autoFocus: true,
      errorRequiredText: "Date is required.",
      readOnly: false,
    },
    {
      type: "select",
      name: "schedule",
      label: "Available Schedule",
      placeholder: "Available Schedule",
      disabled: isLoading,
      fullWidth: true,
      required: true,
      autoFocus: true,
      errorRequiredText: "Schedule is required.",
      readOnly: false,
      selectOpt: [
        {
          id: "08:00:00-10:00:00",
          name: "08:00 AM - 10:00 AM",
        },
        {
          id: "10:00:00-12:00:00",
          name: "10:00 AM - 12:00 PM",
        },
        {
          id: "12:00:00-14:00:00",
          name: "12:00 PM - 2:00 PM",
        },
        {
          id: "14:00:00-16:00:00",
          name: "2:00 PM - 4:00 PM",
        },
        {
          id: "16:00:00-18:00:00",
          name: "4:00 PM - 6:00 PM",
        },
      ],
    },
  ];
};
