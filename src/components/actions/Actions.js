import React from 'react';
import { useNavigate } from "react-router-dom";
import {Box} from "@mui/material";
import Action from './Action';
import ActionsData from '../../data/ActionsData';

function Actions(){
    const navigate = useNavigate();
    return(
        <Box sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column", ml:"15px",}}>
        {ActionsData.map((action)=>(
            <Action key={action.text} text={action.text} color={action.color} nav={()=> navigate(action.nav)}></Action>
        ))}    
        </Box>
    );
}

export default Actions;