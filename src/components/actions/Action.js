import React from 'react';
import {Button} from "@mui/material";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';

function Action({text, color, handleNavigation}){

    return(
        <Button onClick={handleNavigation} startIcon={<CircleRoundedIcon sx={{color:color ,width:18, height:18 }}/>}
         endIcon={<ArrowForwardIosRoundedIcon sx={{width:10, height:10}}/>}
         sx={{color:"#003366", textTransform:"none", fontWeight:"bold", fontSize: "11px"}}>
        {text}
        </Button>
    );
}

export default Action;