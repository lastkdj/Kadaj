import React from "react";
import Afflogo from "../../../Img/destro.jpg";
import Avatar from "@material-ui/core/Avatar";
import Accordion from "./Accordion";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "./MobileStyles";

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
