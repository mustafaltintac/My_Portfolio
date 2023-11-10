import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";


function Yetenek_Kart({dil,icon}) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt={dil}
            src={icon}
          />
        </ListItemAvatar>
        <ListItemText
          primary={dil}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      
    </List>
  );
}

export default Yetenek_Kart;
