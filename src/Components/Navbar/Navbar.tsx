import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import { useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./consts/Logo.png";
// import { mainNavbarItems } from "./consts/navbarItems";
import { useAuth } from "../../Context/AuthContext";
import { JOIN_US_URL } from "../../pages/Home/Components/JoinUs/consts/texts";
import { Link } from "react-router-dom";

function Navbar() {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  /*
  const drawerContent = (
    <Box
      sx={{
        width: 250,
        paddingTop: theme.spacing(5),
      }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      {mainNavbarItems.map((item) => (
        <Button
          key={item.id}
          sx={{ textAlign: "left", padding: theme.spacing(2) }}
          onClick={() => navigate(item.route)}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
  */

  return (
    <>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <Button
                variant="outlined"
                component={Link}
                to={JOIN_US_URL}
                target="_blank"
                color="inherit"
              >
                Join us
              </Button>
            </Box>
          )}

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
            <Typography variant="h6" noWrap component="div">
              COMP SCI CLUB
            </Typography>
          </Box>

          {!isMobile && (
            <Box
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              {currentUser ? (
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={handleSignOut}
                >
                  Log Out
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={() => navigate("/login")}
                >
                  Sign In
                </Button>
              )}
            </Box>
          )}
        </Toolbar>
        {/*
        {isMobile ? null : (
          <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: "center", overflowX: "auto" }}
          >
            {mainNavbarItems.map((item) => (
              <Button
                key={item.id}
                sx={{ color: "white", padding: "10px 15px" }}
                onClick={() => navigate(item.route)}
              >
                {item.label}
              </Button>
            ))}
          </Toolbar>
        )}
        */}
      </AppBar>
      {/* 
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%" },
        }}
      >
        {drawerContent}
      </Drawer>
      */}
    </>
  );
}

export default Navbar;
