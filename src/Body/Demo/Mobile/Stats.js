import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import StatImage from "../../../Img/stats.jpg";
import useStyles from "./MobileStyles";

const Stats = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid container xs={12} justify="center">
        {" "}
        <Typography className={classes.tittle} style={{ textAlign: "center" }}>
          Best Stats for Affliction Warlock
        </Typography>
      </Grid>
      <Divider variant="inset" component="hr" />
      <Grid container item xs={12} justify="space-around">
        <Grid container item xs={12}>
          {" "}
          <Typography className={classes.infotypo}>
            <ul
              style={{
                paddingLeft: "0px",
                listStyleType: "none",
                color: "white",
              }}
            >
              <li>Intellect</li>
              <li>Spell Power</li>
              <li>
                Mastery{" "}
                <span style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                  Increases the damage done by your demons by %.{" "}
                </span>
              </li>
              <li>
                Haste{" "}
                <span style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                  Increases attack speed and spell casting speed.{" "}
                </span>
              </li>
              <li>
                Crit :{" "}
                <span style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                  Chance for extra effectiveness on attacks and heals.{" "}
                </span>
              </li>
              <li>
                Versatility{" "}
                <span style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                  Increases damage and reduces damage taken by half.{" "}
                </span>
              </li>
            </ul>
            <span
              style={{
                color: "#B97AF4",
                marginLeft: "50px",
                fontWeight: 600,
              }}
            >
              Intellect{" > "}Spell Power{" > "}Haste{" > "}Mastery{" = "}
              Crit{" > "}
              Versatility
            </span>
          </Typography>
          <Typography
            className={classes.infotypo}
            style={{
              marginTop: "10px",
            }}
          >
            The above suggestion is only generic and exact values will change
            based on your gear available. In order to best know your best stats,
            we recommend you to sim your own character using many tools
            available in the community like SimulationCraft. Raidbots provides
            you with an online platform for you to sim your characters and find
            your Demonology Warlock stat priority for free! Learn more about
            that in our in-depth guide to Raidbots.
          </Typography>
        </Grid>
        {/* <Grid container item xs={4}>
          <img
            alt=""
            width="400px"
            src={StatImage}
            className={classes.border}
          />
        </Grid> */}
      </Grid>
    </Grid>
  );
};

export default Stats;
