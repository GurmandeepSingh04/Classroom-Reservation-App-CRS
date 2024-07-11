import { React } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Backdrop, CircularProgress, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import LectureHall from "./LectureHall";

const dept = "CSE";
const getHalls = async () => {
  const response = await axios.get(`http://localhost:3000/${dept}`);

  return response.data;
};

function CSE(props) {
  const { data: halls, error, isLoading } = useQuery("hallsData", getHalls);

  if (isLoading)
    return (
      <Backdrop
        sx={{ color: "#66fcf1", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <Container>
      <Grid
        container
        columns={{ md: "8", xs: "4", lg: "12" }}
        spacing={8}
        sx={{
          marginTop: "-8px",
          marginBottom: "30px",
        }}
        disableEqualOverflow
      >
        {halls.map((hall) => {
          return (
            <LectureHall
              key={hall.id}
              name={hall.name}
              img_url={hall.img_url}
              dept={dept}
            ></LectureHall>
          );
        })}
      </Grid>
    </Container>
  );
}

export default CSE;
