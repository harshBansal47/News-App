import { Box, Container, Divider, Icon, Paper, Typography,Stack,Button, Tooltip } from '@mui/material';
import { styled} from "@mui/material/styles";
import React from 'react'
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PinDropIcon from '@mui/icons-material/PinDrop';
import PublicIcon from '@mui/icons-material/Public';
import FestivalIcon from '@mui/icons-material/Festival';
import ScienceIcon from '@mui/icons-material/Science';
import MovieIcon from '@mui/icons-material/Movie';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { purple } from '@mui/material/colors';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
    height:105,
    width:100,
  }));

const CButton = ({icon,Topic}) =>{
    return(
      <Button variant="outlined" sx = {{MaxWidth:"300px",MaxHeight:'110px',margin:'30px',marginLeft:'50px'}}>
          <Box sx = {{display:'flex',alignItems:'center',flexDirection:'row',columnGap:'30px'}}>
          <ColorButton variant="contained"><Icon>{icon}</Icon></ColorButton>
          <Typography>{Topic}</Typography>
          <Tooltip title = 'Remove' placement='right'>
          <MoreVertIcon/>
          </Tooltip> 
          </Box>
      </Button>
    );
}
const Follow = () => {
  return (
    <>
      <Container>
        <Typography variant="h4" sx = {{margin:'20px auto'}}>Following</Typography>
        <Divider variant="middle" sx={{margin:'10px'}} />
        <Paper p ={1} sx = {{borderRadius:'10px'}}>
          <Box p = {2} sx = {{display:'block',alignItems:'center'}}>
            <Typography varient = 'subtitle1'>Topics</Typography>
            <Divider variant="middle"sx = {{margin:'10px 0px'}} />           
            {<CButton Topic = 'Technology' icon = {<LightbulbIcon/>}/>}                 
            {<CButton Topic = 'Health' icon = {<FavoriteIcon/>}/>}
          </Box>
        </Paper>
      </Container>
    </>
  );
}
export default Follow;
