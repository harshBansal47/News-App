import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, InputBase, Tabs, Tab, Divider, Avatar,} from "@mui/material";
import { styled, alpha, ThemeProvider, createTheme} from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import {Link} from "react-router-dom";
import avatar from "./Images/background.jpeg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor:'#ede7e6',
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  backgroundColor:"#edebe6",
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  PointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));
const theme1 = createTheme({
  typography: {
    fontFamily: " 'Mochiy Pop One', sans-serif",
  },
});
const theme2 = createTheme({
  typography: {
    fontFamily: " 'Lato', sans-serif",
  },
  palette: {
    primary: {
      main: "#f5f6f7",
    },
    secondary: {
      main: '#ab47bc',
    },
  },
});
const Navbar = (props) => {
  return (
    <ThemeProvider theme={theme2}>
      <Box sx={{ flexGrow: 1, zIndex: 1,paddingBottom:'5px'}} position="sticky" >
        <AppBar sx={{ boxShadow: 0 }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <ThemeProvider theme={theme1}>
              <Typography
                variant="h5"
                noWrap
                component="div"
              >
                News App
              </Typography>
            </ThemeProvider>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for Topics & Sources"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Avatar src={avatar} />
          </Toolbar>
            <Box sx={{ width: "100%",display:'flex',justifyContent:"space-around" }}>
              <Tabs textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example">
                  <Tab   label="Home" component={Link} to = "/"/>
                  <Tab  label='Following' component={Link} to = "/following"/>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Tab  label="India" component={Link} to = "/india"/>
                  <Tab  label="World" component={Link} to = "/world"/>
                  <Tab   label="Local" component={Link} to = "/local"/>
                  <Tab   label="Business" component={Link} to = "/business"/>
                  <Tab   label="Technology" component={Link} to = "/technology"/>
                  <Tab  label="Entertainment" component={Link} to = "/entertainment"/>
                  <Tab  label="Sports" component={Link} to = "/sports"/>
                  <Tab label="Science" component={Link} to = "/science"/>
                  <Tab  label="Health" component={Link} to = "/health"/>
              </Tabs>
            </Box>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
export default Navbar;