import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import jdcImage from "../../_shared/assets/jdc_dental.png";
import { Stack } from "@mui/material";
import { useAccountStore } from "../../_shared/store/AccountStore";
import { GlobalContext } from "../../_shared/context/GlobalContext";

interface Props {
  children: React.ReactNode;
  window?: () => Window;
  title: string;
  items?: string[];
}
const drawerWidth = 240;

let navigationItems = [
  "Appointment",
  // "Services",
  // "Dentist",
  // "Schedule",
  // "User",
  "Logout",
];

export default function PortalAppbar(props: Props) {
  const { window, children, title, items } = props;
  const navigate = useNavigate();
  const { setAccount } = useAccountStore();
  const { useSnackBar } = React.useContext(GlobalContext);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  /* this will be the default navigation items 
  that use if not login or making an appointment */
  let navItems = items ? items : navigationItems;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {title}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleNavigation = (item: string) => {
    switch (item) {
      case "Appointment":
        navigate("appointment");
        break;
      case "Services":
        navigate("services");
        break;
      case "Dentist":
        navigate("dentist");
        break;
      case "Schedule":
        navigate("schedule");
        break;
      case "User":
        navigate("user");
        break;
      case "Logout":
        navigate("logout");
        setAccount(null);
        localStorage.removeItem("account");
        navigate("login");
        useSnackBar("Logout Successful", { variant: "success" });
        break;
      default:
        break;
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          p: { sm: 1, md: 1, lg: 1 },
          pl: { xs: 0, sm: 4, md: 8, lg: 18 },
          pr: { xs: 0, sm: 4, md: 8, lg: 18 },
          backgroundColor: "#315A39",
        }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            fontWeight={600}
            component="div"
            sx={{ flexGrow: 5, display: { sm: "block" } }}
          >
            <Stack flexDirection="row" alignItems="center" spacing={2}>
              <img
                src={jdcImage}
                alt="JDC Dental Clinic Logo"
                style={{
                  width: 80,
                  height: 40,
                  filter: "drop-shadow(5px 5px 8px #000)",
                }}
              />
              PORTAL
            </Stack>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff" }}
                onClick={() => handleNavigation(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar sx={{ mb: { xs: 0, sm: 3, md: 3, lg: 3 } }} />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}
