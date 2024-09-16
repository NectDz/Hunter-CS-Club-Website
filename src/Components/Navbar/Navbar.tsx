import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import { useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CompSci from "./consts/CompSci.png";
import { mainNavbarItems } from "./consts/navbarItems";
import { useAuth } from "../../Context/AuthContext";

function Navbar() {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  const handleNavItemClick = (route: string) => {
    if (route === "faq") {
      navigate("/", { state: { scrollTo: "faq" } });
    } else if (route === "about") {
      navigate("/", { state: { scrollTo: "about" } });
    } else if (route === "updates") {
      navigate("/", { state: { scrollTo: "updates" } });
    } else if (route === "contact") {
      navigate("/", { state: { scrollTo: "contact" } });
    } else {
      navigate(route);
    }
  };

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
          onClick={() => handleNavItemClick(item.route)}
        >
          {item.label}
        </Button>
      ))}
      {currentUser ? (
        <Button
          sx={{ textAlign: "left", padding: theme.spacing(2) }}
          onClick={handleSignOut}
        >
          Log Out
        </Button>
      ) : (
        <Button
          sx={{ textAlign: "left", padding: theme.spacing(2) }}
          onClick={() => navigate("/login")}
        >
          Sign In
        </Button>
      )}
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 0,
          width: "100%",
          zIndex: theme.zIndex.appBar,
          backgroundColor: "rgba(77, 46, 145, 0.9)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            maxWidth: isMediumScreen ? "1600px" : "1300px",
            width: "100%",
            margin: "0 auto",
            paddingLeft: isMobile ? theme.spacing(2) : theme.spacing(4),
            paddingRight: isMobile ? theme.spacing(2) : theme.spacing(4),
            [theme.breakpoints.up("lg")]: {
              paddingLeft: theme.spacing(10),
              paddingRight: theme.spacing(10),
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "space-between",
              width: "100%",
              maxWidth: "1300px",
              paddingLeft: isMobile ? theme.spacing(2) : 0,
              paddingRight: isMobile ? theme.spacing(2) : 0,
            }}
          >
            {/* Left Side: Hamburger Menu on Mobile */}
            {isMobile && (
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: "white" }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Centered Logo */}
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
            >
              <img
                src={CompSci}
                alt="CompSci Logo"
                style={{
                  height: isMobile ? "40px" : "48px",
                  marginRight: isMobile ? 0 : theme.spacing(0),
                }}
              />
            </Box>

            {isMobile && <Box sx={{ width: theme.spacing(6) }} />}

            {/* Navbar items on Desktop */}
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: theme.spacing(50), // Space between logo and navbar items
                }}
              >
                {mainNavbarItems.map((item) => (
                  <Button
                    key={item.id}
                    sx={{ color: "white", padding: "10px 15px" }}
                    onClick={() => handleNavItemClick(item.route)}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>

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
    </>
  );
}

export default Navbar;
