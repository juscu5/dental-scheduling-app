import { TableHeaderLabel } from "../components/Types/TableTypes";
import { TableSettings } from "../components/Types/TableTypes";

export const TableConfiguration = () => {
  const tableHead: TableHeaderLabel[] = [
    {
      id: "name",
      header: "Service Name",
      size: 100,
      align: "left",
      type: "text",
    },
    {
      id: "description",
      header: "Description",
      size: 250,
      align: "left",
      type: "text",
    },
    {
      id: "image",
      header: "Image",
      size: 100,
      align: "left",
      type: "text",
    },
    {
      id: "date_created",
      header: "Created",
      size: 100,
      align: "left",
      type: "date",
    },
    {
      id: "is_active",
      header: "Status",
      size: 100,
      align: "left",
      type: "check",
    },
  ];
  const tableSettings: TableSettings[] = [
    {
      stripeColor: "#f5f5f5",
      addButton: true,
      printButton: true,
      sysParam: false,
      columnPinning: true,
      actionsMenu: true,
    },
  ];

  return {
    tableHead,
    tableSettings,
  };
};
