import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;
const navItems = [
  ["Expertise", "expertise"],
  ["History", "history"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const drawer = (
    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <p className="mobile-menu-top">
        <ListIcon />
        Menu
      </p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
        sx={{
          backgroundColor: mode === "dark" ? "#0e0e10" : "#f9f9f9",
          boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.2)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar className="navigation-bar">
          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Mode Toggle */}
          {mode === "dark" ? (
            <LightModeIcon
              onClick={() => modeChange()}
              sx={{ cursor: "pointer", color: "#fff" }}
            />
          ) : (
            <DarkModeIcon
              onClick={() => modeChange()}
              sx={{ cursor: "pointer", color: "#000" }}
            />
          )}

          {/* Navigation Buttons */}
          <Box sx={{ display: { xs: "none", sm: "block" }, ml: "auto" }}>
            {navItems.map((item) => (
              <Button
                key={item[0]}
                onClick={() => scrollToSection(item[1])}
                sx={{
                  position: "relative",
                  fontWeight: 500,
                  color: mode === "dark" ? "#fff" : "#000",
                  textTransform: "none",
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "1rem",
                  mx: 1.5,
                  transition: "all 0.4s ease",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #7928CA, #FF0080, #7928CA)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    transform: "scale(1.05)",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, #7928CA, #FF0080, #7928CA)",
                    transform: "scaleX(0)",
                    transformOrigin: "right",
                    transition: "transform 0.4s ease",
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                    transformOrigin: "left",
                  },
                }}
              >
                {item[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: mode === "dark" ? "#0e0e10" : "#fff",
              color: mode === "dark" ? "#fff" : "#000",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
