import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";
import API from "../api";
import { getCookie } from "../utils/getCookiesData";
const settings = ["Profile", "Logout"];

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userProfile, setUserProfile] = React.useState();

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const myCookieValue = getCookie("sessionData");
  localStorage.setItem("token", myCookieValue || "{}");

  React.useEffect(() => {
    // Function to fetch user profile details from the API
    const fetchUserProfile = async () => {
      try {
        const response = await API.get("api/auth/profile");
        const data = await response.data;
        console.log(response);

        setUserProfile(data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);
  return (
    <div>
      <AppBar position="static" sx={{ height: "6vh", boxShadow: "none" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography component="h1" variant="h5">
              Hub Browser
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                  />
                  {/* <Typography>{userProfile}</Typography> */}
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
