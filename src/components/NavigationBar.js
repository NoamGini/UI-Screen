import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

function NavigationBar() {
  const [value, setValue] = useState(0);
  const originalColor = '#003366';
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 ,borderTop:" 1px solid rgb(187, 187, 187)"}}
      
    >
      <BottomNavigation showLabels value={value} onChange={(event, newValue) => {setValue(newValue);}}>
      <BottomNavigationAction
      label={value === 0 ? 'Groups' : <span style={{ color: originalColor }}>Groups</span>}
      icon={value === 0 ? <GroupsIcon/> : <GroupsIcon style={{ color: originalColor }} />}
    />
    <BottomNavigationAction
          label={value === 1 ? 'Channel' : <span style={{ color: originalColor }}>Channel</span>}
          icon={value === 1 ? <PlayArrowRoundedIcon sx={{ fontSize: 25 }} /> : <PlayArrowRoundedIcon sx={{ fontSize: 25, color: originalColor }} />}
        />
        <BottomNavigationAction
          label={value === 2 ? 'Feed' : <span style={{ color: originalColor }}>Feed</span>}
          icon={value === 2 ? <ArticleOutlinedIcon /> : <ArticleOutlinedIcon sx={{ color: originalColor }} />}
        />
      </BottomNavigation>

    </Paper>
  );
}
export default NavigationBar;