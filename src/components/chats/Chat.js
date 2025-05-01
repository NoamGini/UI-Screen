import React from 'react';
import { Box, Typography,IconButton ,Avatar, Stack} from '@mui/material';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Chat({ name, photoUrl, unreadCount, isPrivate, lastMessage, lastMessageTime, story }){


    return(
        <Box sx={{ display: "flex", justifyContent: "space-between" ,
            alignItems: "center",
            px: 2,cursor: "pointer", }}>

        <Box  sx={{display: "flex",alignItems: "center",gap: 2,py: 1.5,px: 1, fontSize: '12px',
           }}>

           <Stack position="relative">
           <Avatar
             src={photoUrl}
             sx={{
               width: 37,
               height: 37,
               border: story ? '2px solid #1976D2' : 'none',
             }}
           />
           {isPrivate && (
             <LockOutlinedIcon
               sx={{ position: 'absolute',top: -5,  right: -5,  fontSize: 8, color: '#1976D2',
               }}
             />
           )}
         </Stack>
        <Box sx={{display: "flex", flexDirection:"column", color:"#003366",}}>
         <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>{name}</Typography>
        <Typography  component="div"  sx={{fontSize: '10px'
        }}>

        {unreadCount ? (
            lastMessage?.type === 'post' ? (
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '10px', color: '#003366' }}>
                <CropOriginalIcon sx={{ fontSize: 12, mr: 0.5 }} />
                <Typography component="span" sx={{ fontSize: '10px' }}>
                  {"- " + lastMessage.text}
                </Typography>
              </Box>
            ) : (
              <Typography sx={{ fontSize: '10px', color: '#003366' }}>
                {lastMessage?.text}
              </Typography>
            )
          ) : (
            <Typography sx={{ fontSize: '10px', color: 'grey' }}>
              {lastMessageTime}
            </Typography>
          )}
          
          </Typography>
            
            </Box>
        </Box>

        <Box sx={{display: "flex", justifyContent: "space-between" ,
            alignItems: "center",}}>
            {unreadCount !==0  &&
        <Avatar sx={{width: 18, height:18 , fontSize:'10px', bgcolor:'orange' , fontWeight:'bold'}}>{unreadCount}</Avatar>
            }
        <IconButton>
        <MoreVertIcon fontSize="small" sx={{color:"#003366"}} />
      </IconButton>
      </Box>
        </Box>
        );
    }

export default Chat;