import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

interface DrawerAddProps {
  title: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  element: React.ReactNode;
}

export default function DrawerAdd({
  title,
  open,
  setOpen,
  element,
}: DrawerAddProps) {
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", // optional: vertical centering
      }}
      role="presentation"
    >
      {element}
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box textAlign={"center"} m={5} mb={1}>
          <Typography variant="h5">{title}</Typography>
        </Box>
        {DrawerList}
      </Drawer>
    </div>
  );
}
