import { TableHeaderLabel } from "../components/Types/TableTypes";
import { TableSettings } from "../components/Types/TableTypes";

export const TableConfiguration = () => {
  const tableHead: TableHeaderLabel[] = [
    {
      id: "id",
      header: "id",
      size: 100,
      align: "left",
      type: "text",
      hidden: true
    },
    {
      id: "firstname",
      header: "Dentist",
      size: 100,
      align: "left",
      type: "text",
    },
    {
      id: "title",
      header: "Service",
      size: 100,
      align: "left",
      type: "text",
    },
    {
      id: "date",
      header: "Schedule Date",
      size: 100,
      align: "left",
      type: "text",
    },
    {
      id: "timeframe",
      header: "Schedule Time",
      size: 100,
      align: "left",
      type: "text",
    },
  ];
  const tableSettings: TableSettings[] = [
    {
      stripeColor: "#fff",
      addButton: true,
      printButton: true,
      columnPinning: false,
      columnOrdering: false,
      actionsMenu: true,
    },
  ];

  return {
    tableHead,
    tableSettings,
  };
};
