import React from "react";
import {
  Card,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Divider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import logo from "./background.jpeg";

const theme = createTheme({
  typography: {
    fontFamily: " 'Poppins', sans-serif",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h6: {
          "&:hover": {
            textDecoration: "underline",
            backgroundColor: "#fff",
          },
        },
      },
    },
  },
});

const Comp = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          maxWidth: "650px",
          borderRadius: "10px",
          display: "flex",
          float: "left",
          margin: "30px 50px",
        }}
      >
        <CardContent>
          <Typography component="h2" variant="h5">
            Chinese Tanks roll on streets to scare Henan bank protestors
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx = {{margin:'5px 0px'}}>
            Zhengzhou [China], July 20 (ANI)
          </Typography>
          <Typography variant="subtitle1" paragraph>
            Communist Party’s tanks rolled on the streets to scare Henan bank
            protestors amid large-scale protests
          </Typography>
          <CardActionArea component="a" href="#" sx={{ marginBottom: "5px" }}>
            <Typography variant="h6" color="primary">
              Read More
            </Typography>
          </CardActionArea>
        </CardContent>
        <Divider orientation="vertical" flexItem />
        <CardMedia
          component="img"
          sx={{
            width: "300px",
            height: "300px",
            display: { xs: "none", sm: "block" },
            borderRadius: "5px",
            margin: "10px 10px 10px 10px",
          }}
          image={logo}
          alt={logo}
        ></CardMedia>
      </Card>
    </ThemeProvider>
  );
};
export default Comp;
