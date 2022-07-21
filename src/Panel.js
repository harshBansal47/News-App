import React from 'react'
import { Avatar , Box, Button, Container, ThemeProvider, Typography,createTheme } from '@mui/material';
import avatar from "./background.jpeg";

const theme = createTheme({
    typography: {
        fontFamily: " 'Poppins', sans-serif",
      },
});



const Panel = () => {
  return (
   <ThemeProvider theme = {theme}>
     <Container md sx = {{display:'flex',justifyContent:'space-between',background:"#edebf6",padding:'10px',borderRadius:'8px'}}>
        <Box sx = {{display:'flex'}}>
        <Avatar src = {avatar} alt=''></Avatar>
        <Typography variant="h5" sx={{margin:'auto 20px'}}>India</Typography>
        </Box>
        <Button variant='contained'>Follow +</Button>
    </Container>
   </ThemeProvider>
  )
}

export default Panel;