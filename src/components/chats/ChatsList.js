import React from 'react'
import mockChats from '../../data/mockData'
import {List} from '@mui/material';
import Chat from './Chat';

function ChatsList(){

    return(
        <List sx={{width: "100%" ,display: 'flex', flexDirection:'column',paddingBottom: '55px' }}>
            {mockChats.map((chat)=> 

            <Chat key={chat.id} {...chat}></Chat>

            )}
        
        </List>
    );
}

export default ChatsList;