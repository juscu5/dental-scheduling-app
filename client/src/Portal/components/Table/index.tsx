import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MaterialReactTable } from "material-react-table";
import { Box, Container } from "@mui/material";
import { JSX, useEffect, useRef } from "react";
import { TableProps } from "../Types/TableTypes";
import { TableSettings } from "./TableSettings";
import { TableLayout } from "./TableLayout";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#597445",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#597445",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export const Table = <T extends any[]>({
  title,
  tableHead,
  tableData,
  tableSettings,
  actionDialog,
  refetch,
  enableTitle,
  setItemToAdd,
  placeholder,
  enableCheckbox,
  actionElement,
}: TableProps<T>): JSX.Element => {
  // Create a ref to store previous selected data
  const prevSelectedDataRef = useRef<any[]>([]);
  
  const { table } = TableLayout({
    title,
    tableHead: (tableHead ?? []).filter((e) => e.hidden !== true),
    tableData,
    tableSettings,
    actionDialog,
    refetch,
    enableTitle,
    setItemToAdd,
    placeholder,
    enableCheckbox,
    actionElement,
  });

  const selectedRows = table.getSelectedRowModel().rows;
  const selectedData = selectedRows.map((row: any) => row.original);
  
  useEffect(() => {
    // Only update if setItemToAdd exists and selectedData has actually changed
    if (setItemToAdd && JSON.stringify(prevSelectedDataRef.current) !== JSON.stringify(selectedData)) {
      prevSelectedDataRef.current = selectedData;
      setItemToAdd(selectedData);
    }
  }, [selectedData, setItemToAdd]);

  return (
    <>
      <Box title={title}>
        <Container maxWidth={false}>
          <Box
            component="form"
            sx={{
              overflow: "auto",
              width: "100%",
              display: "table",
              tableLayout: "fixed",
            }}
          >
            <ThemeProvider theme={theme}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MaterialReactTable table={table} />
                {actionDialog?.()}
              </LocalizationProvider>
            </ThemeProvider>
          </Box>
        </Container>
      </Box>
    </>
  );
};