import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { blue } from "@mui/material/colors";
import { Icon } from "@iconify/react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {
      text: "Home",
      icon: <Icon icon="line-md:home-simple" width={24} height={24} />,
      textSize: { xs: "12px", md: "14px" },
    },
    {
      text: "Operasional",
      icon: <Icon icon="line-md:speedometer" width={24} height={24} />,
      textSize: { xs: "12px", md: "14px" },
    },
    {
      text: "Non Operasional",
      icon: <Icon icon="line-md:document" width={24} height={24} />,
      textSize: { xs: "12px", md: "14px" },
    },
    {
      text: "Profile",
      icon: <Icon icon="gg:profile" width={24} height={24} />,
      textSize: { xs: "12px", md: "14px" },
    }, // Menu Profile untuk Drawer di Mobile
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar
        component="nav"
        position="fixed"
        sx={{ bgcolor: blue[900] }}
        elevation={10}
      >
        <Toolbar>
          {/* Tombol hamburger hanya muncul di layar kecil */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Menu navigasi hanya muncul di layar besar */}
          <Box display={{ xs: "none", md: "flex" }} gap="10px">
            {menuItems.slice(0, 3).map((item, index) => (
              <Button key={index} color="inherit" startIcon={item.icon}>
                {item.text}
              </Button>
            ))}
          </Box>

          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MyApp
          </Typography> */}

          {/* IconButton Profile/Logout */}
          <Box sx={{ ml: "auto" }}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleProfileMenuOpen}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              edge="end"
              color="inherit"
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={() => alert("Logging out...")}
            >
              <Icon icon="line-md:log-out" width={24} height={24} />
            </IconButton>
          </Box>

          {/* Menu Profile di layar besar */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={() => alert("Logging out...")}>Log Out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Drawer untuk menu navigasi di layar kecil */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={toggleDrawer(false)}>
              {item.icon && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </ThemeProvider>
  );
}
