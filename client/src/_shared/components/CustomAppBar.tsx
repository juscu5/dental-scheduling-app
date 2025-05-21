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
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import jdcImage from "../assets/jdc_dental.png";

interface Props {
  children: React.ReactNode;
  window?: () => Window;
  title: string;
  items?: string[];
}
const drawerWidth = 240;

let navigationItems = [
  "Home",
  "Services",
  "About Us",
  "Contact Us",
  "Book An Appointment",
];

export default function CustomAppBar(props: Props) {
  const { window, children, title, items } = props;
  const navigate = useNavigate();
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

  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const handleNavigation = (item: string) => {
    switch (item) {
      case "Home":
        navigate("/home");
        break;
      case "Services":
        navigate("/services");
        break;
      case "About Us":
        navigate("/about-us");
        break;
      case "Contact Us":
        navigate("/contact-us");
        break;
      case "Book An Appointment":
        navigate("/book-an-appointment");
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
          p: { sm: 3, md: 3, lg: 3 },
          pl: { xs: 2, sm: 6, md: 10, lg: 20 },
          pr: { xs: 2, sm: 6, md: 10, lg: 20 },
          backgroundColor: "#315A39",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 5, display: { sm: "block" } }}
          >
            {/* {title} */}
            <img
              src={jdcImage}
              alt="JDC Dental Clinic Logo"
              style={{
                width: 110,
                height: 60,
                filter: "drop-shadow(5px 5px 8px #000)",
              }}
            />
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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflowX: "hidden",
          width: "100%",
        }}
      >
        <Toolbar sx={{ mb: { xs: 0, sm: 6 } }} />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}
