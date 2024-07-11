import React, { useContext } from "react";

import {
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteSlot from "./DeleteSlot";
import { UserContext } from "./UserContext";

function ReserveDetails(props) {
  const user = useContext(UserContext);

  const [id, setId] = React.useState(-1);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (index) => {
    setId(index);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function vacant() {
    props.onDelete(id);
  }
  return (
    <Accordion sx={{ backgroundColor: "inherit", color: "inherit" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        aria-controls="panel1-content"
      >
        Reserved By
      </AccordionSummary>
      <AccordionDetails>
        <Box className="accordian-details-title">
          <Typography variant="h6">Name</Typography>
          <Typography variant="h6">Time</Typography>
        </Box>
        {props.data.map((timeSlot, index) => {
          return (
            <Box
              className="accordian-details"
              key={index}
              onClick={() => {
                user.fullname === timeSlot.fullname
                  ? handleClickOpen(index)
                  : null;
              }}
            >
              <Typography variant="h7">{timeSlot.fullname}</Typography>
              <Typography variant="h7">{timeSlot.time}:00</Typography>
            </Box>
          );
        })}
        <DeleteSlot
          onclick={open}
          onClose={handleClose}
          name={props.name}
          username={user.fullname}
          index={id}
          onVacant={vacant}
        />
      </AccordionDetails>
    </Accordion>
  );
}

export default ReserveDetails;
