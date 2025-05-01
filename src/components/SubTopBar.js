import React, {useState } from 'react'
import {Button,Typography,IconButton,Box,} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import tabs from '../data/TabsData';

function SubTopBar(){
    const [pickedTab,setPickedTab] = useState(tabs[0]);

    return(
       
        <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px:'10px',
        mt: '64px', 
     
      }}
    >
    <Box sx={{ display: "flex", alignItems: "center", }}>
    <IconButton>
    <SearchIcon sx={{color:"#003366"}}/>
    </IconButton>
        
        {tabs.map((tab)=> (
            <Button key={tab} onClick={() => setPickedTab(tab)} 
            sx={{
                color:tab === pickedTab ? "#003366" : 'grey',
                fontSize:"12px",
                textTransform: "none",
                fontWeight: tab === pickedTab ? "bold" : "normal",
                borderBottom: tab === pickedTab ? "1.5px solid #FFA726" : "none",
                borderRadius: 0, 
                minWidth: "auto", 
            }}>
            {tab}
            </Button>
        ))}
        </Box>
        <Box sx={{}}>
        <IconButton>
        <LockOutlinedIcon  sx={{ color: "#1976D2" ,width: 12 , height: 12}}/>
        </IconButton>
        <Typography variant="caption" sx={{ color: "#999", fontSize:"9px" }}>= Private</Typography>
        </Box>
        </Box>
    );
}

export default SubTopBar;