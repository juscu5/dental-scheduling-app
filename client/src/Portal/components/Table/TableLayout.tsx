import {
  MRT_GlobalFilterTextField,
  useMaterialReactTable,
} from "material-react-table";
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import { TableProps } from "../Types/TableTypes";
import { TableHeader } from "./TableHeader";
import { Icon } from "@iconify/react";
import { TableSettings } from "./TableSettings";

export const TableLayout = <T extends any[]>({
  title,
  tableHead,
  tableData,
  tableSettings,
  placeholder,
  enableCheckbox,
  actionElement,
}: TableProps<T>) => {
  const {
    stripeColor,
    columnAction,
    columnOrdering,
    columnPinning,
    actionsMenu,
  } = TableSettings({ tableSettings });

  const data = tableData;
  const columns = TableHeader(tableHead!);

  const table = useMaterialReactTable({
    columns,
    data: data!,
    enableColumnFilters: false,
    enableColumnActions: columnAction || false,
    enableColumnOrdering: columnOrdering || false, 
    enableColumnPinning: columnPinning || false,
    enableColumnVirtualization: false,
    enablePagination: true,
    enableSorting: true,
    enableRowActions: actionsMenu === false ? false : true,
    enableRowSelection: enableCheckbox ? enableCheckbox : false,
    muiTableBodyProps: {
      sx: {
        borderRadius: "3000px",
        "& tr:nth-of-type(odd) > td": {
          backgroundColor: stripeColor,
        },
      },
    },
    muiTableHeadCellProps: {
      sx: {
        paddingTop: "9px",
        borderBottom: "1px solid #ccc",
        borderTop: "1px solid #ccc",
        '&[data-pinned="true"]::before': {
          backgroundColor: "#fff!important",
        },
      },
    },
    muiTableBodyCellProps: {
      sx: {
        borderBottom: "none",
        '&[data-pinned="true"]::before': {
          backgroundColor: "#fff!important",
        },
      },
    },
    muiBottomToolbarProps: {
      sx: {
        borderTop: "1px solid #ccc",
        boxShadow: "none",
      },
    },
    initialState: {
      showColumnFilters: true,
      showGlobalFilter: true,
      columnPinning: {
        left: ["mrt-row-expand", "mrt-row-select"],
        right: ["mrt-row-actions"],
      },
      density: title === "User Activity Log" ? "compact" : "comfortable",
    },
    paginationDisplayMode: "pages",
    muiSearchTextFieldProps: {
      size: "small",
      variant: "outlined",
      placeholder,
    },
    muiPaginationProps: {
      rowsPerPageOptions: [10, 20, 30],
    },
    muiTableContainerProps: {
      sx: {
        maxHeight: title === "User Activity Log" ? "400px" : "600px", 
        overflowY: "auto",
        overflowX: "auto", 
      },
    },
    muiTablePaperProps: {
      sx: {
        border: "none",
      },
      elevation: 0,
    },

    //callback logic
    renderRowActionMenuItems: ({ row }: any) =>
      actionElement!.map((menuItem: any, idx: number) => (
        <MenuItem
          key={idx}
          sx={{ color: "text.secondary" }}
          onClick={() => menuItem.callback!(row.original)}
        >
          <ListItemIcon>
            <Icon icon={menuItem.icon} width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography fontFamily="Poppins" variant="subtitle2">
                {menuItem.label}
              </Typography>
            }
            primaryTypographyProps={{ variant: "body2" }}
          />
        </MenuItem>
      )),
    renderTopToolbar: ({ table }: any) => {
      return <MRT_GlobalFilterTextField sx={{ mb: 2 }} table={table} />;
    },
  });

  return { table };
};
