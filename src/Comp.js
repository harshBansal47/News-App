import React from "react";
import { Card, CardActionArea, Typography,CardMedia, CardContent, Divider, Link, ThemeProvider, createTheme,} from "@mui/material";
import logo from "./Images/background.jpeg";


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
    MuiCardMedia: {
      defaultProps: {
        img: {
          image: { logo },
        },
      },
    },
  },
});

const Comp = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          maxWidth: "800px",
          borderRadius: "10px",
          display: "flex",
          margin: "40px auto",
        }}
      >
        <CardContent>
          <Typography component="h2" variant="h5">
            {props.heading.slice(0,90)}..
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{ margin: "5px 0px" }}
          >
            {props.author} | {props.newsMedia}
            <Divider orientation="vertical" variant="middle" flexItem />
            {props.date.substr(0,10).toIso}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {props.description.slice(0,200)}...
          </Typography>
          <CardActionArea  sx={{ marginBottom: "5px" }}>
            <Typography variant="h6" color="primary">
            <Link to={props.link} target="_blank" rel="noreferrer" underline="hover">
              Read More
              </Link> 
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
          image={props.image}
        />
      </Card>
    </ThemeProvider>
  );
};
export default Comp;
Comp.defaultProps = {
  heading: 'Heading',
  description:'Description',
  image:{logo}
}