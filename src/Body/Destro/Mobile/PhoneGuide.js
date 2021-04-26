import React from "react";
import Afflogo from "../../../Img/destro.jpg";
import Avatar from "@material-ui/core/Avatar";
import Accordion from "./Accordion";
import { Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  spec: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.8em",
    marginTop: "20px",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      fontSize: "2.1em",
    },

    [theme.breakpoints.up("xl")]: {},
  },

  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },

    [theme.breakpoints.up("xl")]: {},
  },
}));

const PhoneGuide = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Grid
        container
        justify="center"
        item
        xs={12}
        style={{ padding: "40px 20px 20px 20px" }}
      >
        {" "}
        <Avatar
          className={classes.large}
          src={Afflogo}
          style={{
            boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
            margin: "0px 30px 0px 20px",
          }}
        ></Avatar>
        <Typography className={classes.spec} style={{ textAlign: "center" }}>
          DESTRUCTION
        </Typography>
      </Grid>
      <Accordion />
    </Grid>
  );
};

export default PhoneGuide;
