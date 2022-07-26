import React from "react";
import {Avatar,Box,Button,Container,ThemeProvider,Typography,createTheme} from "@mui/material";
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const theme = createTheme({
  typography: {
    fontFamily: " 'Poppins', sans-serif",
  },
});
const Panel = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{display: "flex",justifyContent: "space-between",background: "#edebf6", padding: "10px", borderRadius: "8px"}}>
        <Box sx={{ display: "flex" }}>
          <Avatar src={props.image} sx={{ width: 56, height: 56 }} alt=""></Avatar>
          <Typography variant="h5" sx={{ margin: "auto 20px" }}>
            {props.name}
          </Typography>
        </Box>
        <Button variant="contained"  p={1}>Follow  <StarOutlineIcon/></Button>
      </Container>
    </ThemeProvider>
  );
};
export default Panel;