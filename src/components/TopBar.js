import React from "react";
import {AppBar,Toolbar,IconButton,Box} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import logo from '../tripteamlogo.png'

function TopBar(){
    return (
        <AppBar elevation={0} sx={{backgroundColor:"white",} }>
        <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <img
            src={logo}  
            alt="Logo"
            style={{ height: 40 }}
            sx={{ flexGrow: 1 }}   
          />
        </Box>
    <Box sx={{ display:"flex" , alignItems:"center"}}>
        <IconButton>
         <SearchIcon sx={{height:30, width:30 ,color:"#1976D2"}}/>
         </IconButton>

         <IconButton sx={{ width: 24,
            height: 24, backgroundColor: "#1976D2", color:"white"}}>
         <AddIcon/>
         </IconButton>

         <IconButton>
         <FavoriteIcon sx={{height:26, width:26 ,color: "red"}}/>
         </IconButton>

         <IconButton>
         <MenuIcon sx={{color: "black"}}/>
         </IconButton>
        </Box>
        </Toolbar>
        </AppBar>
    );
}


export default TopBar;