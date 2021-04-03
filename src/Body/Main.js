import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import affImage from "../Img/affimg2.jpg";
import demoImage from "../Img/demoimg.jpg";
import destroImage from "../Img/destroimg.jpg";
import aff from "../Img/aff.jpg";
import demo from "../Img/demo.jpg";
import destro from "../Img/destro.jpg";

const useStyles = makeStyles((theme) => ({
  spec: {
    fontWeight: 700,
    color: "#2e2e2e",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2.1em",
  },

  onHoveraff: {
    boxShadow: "2px 7px 24px 12px rgba(0,0,0,0.4)",
    transition: "0.1s",
    borderColor: "white",
    backgroundImage: `url(${affImage})`,
    transition: "filter 0.3s ease-in-out",
    filter: "grayscale(100%)",
    "&:hover": {
      cursor: "pointer",
      filter: "grayscale(0%)",
    },
  },

  onHoverdemo: {
    boxShadow: "2px 7px 24px 12px rgba(0,0,0,0.4)",
    transition: "0.1s",
    borderColor: "white",
    backgroundImage: `url(${demoImage})`,

    transition: "filter 0.3s ease-in-out",
    filter: "grayscale(100%)",
    "&:hover": {
      cursor: "pointer",
      filter: "grayscale(0%)",
    },
  },

  onHoverdestro: {
    boxShadow: "2px 7px 24px 12px rgba(0,0,0,0.4)",
    transition: "0.1s",
    borderColor: "white",
    backgroundImage: `url(${destroImage})`,
    transition: "filter 0.3s ease-in-out",
    filter: "grayscale(100%)",
    "&:hover": {
      cursor: "pointer",
      filter: "grayscale(0%)",
    },
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <Grid>
      <Grid>
        <Typography className={classes.spec} style={{ textAlign: "center" }}>
          Specializations,{" "}
          <span style={{ fontWeight: "400" }}>Select what's ideal</span>
        </Typography>
      </Grid>
      <Grid
        container
        justify="center"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <Paper
          style={{
            width: "350px",
            height: "445px",
            margin: "0 20px",
            borderRadius: "7px",
            display: "flex",
          }}
          className={classes.onHoveraff}
        >
          <Grid
            container
            justify="flex-start"
            direction="column-reverse"
            alignItems="center"
            style={{ filter: "none" }}
          >
            <Typography
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "2em",
                fontWeight: "700",
                color: "white",
                marginBottom: "20px",
              }}
            >
              Affliction
            </Typography>
            <img src={aff} style={{ border: "solid", borderRadius: "40px" }} />
          </Grid>
        </Paper>
        <Paper
          style={{
            width: "350px",
            height: "445px",
            margin: "0 20px",
            borderRadius: "7px",
            display: "flex",
          }}
          className={classes.onHoverdemo}
        >
          <Grid
            container
            justify="flex-start"
            direction="column-reverse"
            alignItems="center"
          >
            <Typography
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "2em",
                fontWeight: "700",
                color: "white",
                marginBottom: "20px",
              }}
            >
              Demonology
            </Typography>
            <img src={demo} style={{ border: "solid", borderRadius: "40px" }} />
          </Grid>
        </Paper>
        <Paper
          style={{
            width: "350px",
            height: "445px",
            margin: "0 20px",
            borderRadius: "7px",
            display: "flex",
          }}
          className={classes.onHoverdestro}
        >
          <Grid
            container
            justify="flex-start"
            direction="column-reverse"
            alignItems="center"
          >
            <Typography
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "2em",
                fontWeight: "700",
                color: "white",
                marginBottom: "20px",
              }}
            >
              Destruction
            </Typography>
            <img
              src={destro}
              style={{ border: "solid", borderRadius: "40px" }}
            />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Main;
