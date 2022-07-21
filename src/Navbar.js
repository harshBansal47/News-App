import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Tabs,
  Tab,
  Divider,
  Avatar,
} from "@mui/material";
import {
  styled,
  alpha,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import avatar from "./background.jpeg";

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
const navItems1 = ["Home", "For you", " Following", "News Showcase"];
const navItems2 = [
  "India",
  "World",
  " Local",
  "  Business",
  "  Technology",
  "  Entertainment",
  "  Sports",
  "Science",
  "Health",
];
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
  },
});

const Navbar = () => {
  return (
    <ThemeProvider theme={theme2}>
      <Box sx={{ flexGrow: 1 ,zIndex:1}} position="sticky" >
        <AppBar sx={{ boxShadow: 0 }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <ThemeProvider theme={theme1}>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
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
            <Avatar alt="Remy Sharp" src={avatar} />
          </Toolbar>

          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Tabs aria-label="basic tabs example">
              {navItems1.map((item) => (
                <Tab label={item} />
              ))}
            </Tabs>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Tabs aria-label="basic tabs example">
              {navItems2.map((item) => (
                <Tab label={item} />
              ))}
            </Tabs>
          </Box>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
export default Navbar;
// "#b2cecf"