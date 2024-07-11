import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import DeptDrawer from "./DeptDrawer";
import SchoolIcon from "@mui/icons-material/School";
import Button from "@mui/material/Button";
import { UserContext } from "./UserContext";
import axios from "axios";
const settings = ["Profile", "About", "Logout"];

function Navbar() {
  const user = React.useContext(UserContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    window.location.href = "/Profile";
    setAnchorElUser(null);
  };

  const handleAbout = () => {
    window.location.href = "/About";
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    fetch("http://localhost:3000/auth/user/id/logout", {
      method: "GET",
      credentials: "include", // Include cookies and other credentials
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "/"; // Redirect to homepage after logout
        } else {
          console.error("Logout failed:", response.statusText);
        }
      })
      .catch((error) => console.error("Error logging out:", error));
    setAnchorElUser(null);
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#1f2833",
        color: "#66fcf1",
        position: "sticky",
        top: "0",
        zIndex: "10",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SchoolIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Classroom Reservation
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <DeptDrawer icon={<MenuIcon fontSize="large" />} />
          </Box>

          <SchoolIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CRS
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "20px",
            }}
          >
            <DeptDrawer icon="Departments" />
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              marginRight: "10px",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "inherit", display: "block" }}
              href="/About"
            >
              About
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Me" src={user.img} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) =>
                setting !== "About" ? (
                  <MenuItem
                    key={setting}
                    onClick={
                      setting === "Logout" ? handleLogout : handleCloseUserMenu
                    }
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ) : (
                  <MenuItem
                    sx={{ display: { xs: "flex", md: "none" } }}
                    key={setting}
                    onClick={handleAbout}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
