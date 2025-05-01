import React from 'react'
import { Box } from "@mui/material";
import TopBar from '../components/TopBar' 
import SubTopBar from '../components/SubTopBar'
import NavigationBar from '../components/NavigationBar'
import Actions from "../components/actions/Actions";
import ChatsList from "../components/chats/ChatsList";

function ChatsListPage(){

    return(
        <Box>
        <TopBar/>
        <SubTopBar/>
        <Actions/>
        <ChatsList/>
        <NavigationBar/>
        </Box>
    );
}

export default ChatsListPage;