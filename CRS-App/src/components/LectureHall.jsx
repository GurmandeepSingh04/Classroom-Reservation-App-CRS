import React, { useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
import { Fab, Divider, Paper, Typography, Zoom } from "@mui/material";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

import Reserve from "./Reserve";
import ReserveDetails from "./ReserveDetails";

function LectureHall(props) {
  const [timeSlots, setTime] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/${props.dept}/${props.name}`)
      .then((response) => {
        setTime(response.data);
        console.log("Image URL fetched: ", response.data.img_url);
      })
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  function addSlot(newSlot) {
    const addSlot1 = {
      lecturehall: newSlot.lecturehall,
      time: newSlot.time,
      fullname: newSlot.username,
    };
    const addSlot2 = {
      lecturehall: newSlot.lecturehall,
      time: newSlot.time,
      username: newSlot.useremail,
    };

    axios
      .post(`http://localhost:3000/reserve`, addSlot2)
      .then((response) => {
        console.log("Slot added successfully:", response.data);
        setTime((prevNotes) => {
          return [...prevNotes, addSlot1];
        });
      })
      .catch((error) => {
        alert("The lecture hall is already reserved");
        console.error("Error adding slot:", error);
      });
    return;
  }

  function deleteSlot(index) {
    const deletedSlot = timeSlots[index];
    const payload = {
      lecturehall: deletedSlot.lecturehall,
      time: deletedSlot.time,
    };

    axios
      .delete(`http://localhost:3000/vacant`, { data: payload })
      .then((response) => {
        console.log("Slot deleted successfully:", response.data);
        setTime((prevNotes) => {
          return prevNotes.filter((timeSlot, i) => i !== index);
        });
      })
      .catch((error) => console.error("Error deleting slot:", error));
  }
  return (
    <Zoom in={true} style={{ transitionDuration: "600ms" }}>
      <Grid item xs={4}>
        <Paper
          elevation={24}
          sx={{
            backgroundColor: "#1f2833",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <Typography variant="h3" sx={{ margin: "5px 0px 5px 5px" }}>
            {props.name}
          </Typography>
          <img
            style={{ width: "100%", height: "175px" }}
            src={props.img_url}
            alt=""
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Fab
              color="primary"
              aria-label="Reserve"
              variant="extended"
              sx={{ marginBlock: "5px" }}
              onClick={handleClickOpen}
            >
              Reserve
            </Fab>
            <Reserve
              onclick={open}
              onClose={handleClose}
              name={props.name}
              onAdd={addSlot}
            ></Reserve>
          </div>

          <Divider
            variant="middle"
            sx={{ backgroundColor: "whitesmoke", marginBlock: "5px" }}
          />
          <ReserveDetails
            data={timeSlots}
            name={props.name}
            onDelete={deleteSlot}
          ></ReserveDetails>
        </Paper>
      </Grid>
    </Zoom>
  );
}

export default LectureHall;
