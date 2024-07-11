import React, { useContext } from "react";
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
import { UserContext } from "./UserContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const marks = [
  {
    value: 8,
    label: "8:00",
  },
  {
    value: 9,
    label: "",
  },
  {
    value: 10,
    label: "",
  },
  {
    value: 11,
    label: "",
  },
  {
    value: 12,
    label: "12:00",
  },
  {
    value: 13,
    label: "",
  },
  {
    value: 14,
    label: "",
  },
  {
    value: 15,
    label: "",
  },
  {
    value: 16,
    label: "",
  },
  {
    value: 17,
    label: "17:00",
  },
];

function Reserve(props) {
  const user = useContext(UserContext);
  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog
        open={props.onclick}
        onClose={props.onClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const time = formJson.time;
            console.log(time);
            const currentHour = new Date().getHours();

            if (parseInt(time) <= currentHour) {
              alert(
                "You cannot reserve a time slot for an hour that has already passed or is going on."
              );
              return;
            }
            const newSlot = {
              lecturehall: props.name,
              time: time,
              username: user.fullname,
              useremail: user.email,
            };
            props.onAdd(newSlot);
            props.onClose();
          },
        }}
      >
        <DialogTitle>Reserve {props.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please choose the time you want the lecture hall reserved for:
          </DialogContentText>

          <Typography variant="h4" sx={{ marginBlock: "10px" }}>
            Name: {user.fullname}
          </Typography>

          <Typography variant="h7">Time(Hours)</Typography>

          <Slider
            aria-label="Custom marks"
            defaultValue={8}
            step={1}
            valueLabelDisplay="auto"
            min={8}
            max={17}
            marks={marks}
            name="time"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button type="submit">Reserve</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default Reserve;
