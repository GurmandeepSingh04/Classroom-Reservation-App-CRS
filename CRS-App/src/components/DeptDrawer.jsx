import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeptList from "./constants/DeptList";

export default function DeptDrawer(props) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {DeptList.map((dept, index) => (
          <ListItem key={dept.id}>
            <ListItemButton href={dept.link}>
              <ListItemIcon>{dept.icon}</ListItemIcon>
              <ListItemText primary={dept.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button
        size="large"
        sx={{ color: "inherit", fontFamily: "monospace" }}
        onClick={toggleDrawer(true)}
      >
        {props.icon}
      </Button>
      <Drawer anchor={"top"} open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
