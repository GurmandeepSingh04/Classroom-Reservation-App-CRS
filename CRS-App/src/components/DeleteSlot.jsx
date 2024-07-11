import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slider,
  Typography,
  Button,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function DeleteSlot(props) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog
        open={props.onclick}
        onClose={props.onClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            props.onVacant();
            props.onClose();
          },
        }}
      >
        <DialogTitle>Vacant {props.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you really want to vacant {props.name} for your scheduled time
          </DialogContentText>
          <Typography variant="h4" sx={{ marginBlock: "10px" }}>
            Name: {props.username}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button type="submit">Vacant</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default DeleteSlot;
