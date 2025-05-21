import React from "react";
import { Table } from "../components/Table";
import { TableConfiguration } from "./config";
import { actionElement, headerElement } from "./element";
import { Box, Typography } from "@mui/material";

const PortalServices = () => {
  const { tableHead, tableSettings } = TableConfiguration();
  const handleEditPageEnable = (row: any) => {
    console.log("test");
  };

  const handleViewPageEnable = (row: any) => {
    console.log("test");
  };

  const handleShowDeleteDialog = (row: any) => {
    console.log("test");
  };
  return (
    <React.Fragment>
      <Box
        m={{ xs: 5, sm: 5, md: 5, lg: 10 }}
        ml={{ xs: 2, sm: 2, md: 5, lg: 20 }}
        mr={{ xs: 2, sm: 2, md: 5, lg: 20 }}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          m={{ xs: 2, sm: 3, md: 3, lg: 3 }}
        >
          SERVICES
        </Typography>
        <Table
          tableHead={tableHead}
          tableSettings={tableSettings}
          tableData={[]}
          actionElement={actionElement(
            handleShowDeleteDialog,
            handleEditPageEnable,
          )}
        />
      </Box>
    </React.Fragment>
  );
};

export default PortalServices;
