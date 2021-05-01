import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Demonic from "../../../Img/aff/demonic.png";
import Wilfreds from "../../../Img/demo/wilfreds.png";
import Cinders from "../../../Img/destro/cinders.png";
import useStyles from "./MobileStyles";

const Lego = (props) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid container justify="center" xs={12}>
        {" "}
        <Typography className={classes.tittle} style={{ textAlign: "center" }}>
          Best Destruction Warlock Legendaries
        </Typography>
      </Grid>
      <Divider variant="inset" component="hr" />
      <Grid container item xs={12} justify="space-around">
        <Grid container item xs={12} direction="column">
          {" "}
          <Typography
            className={classes.infotypo}
            style={{ marginTop: "10px", color: "#adb0bb" }}
          >
            Before getting into the specific legendary powers, keep in mind that
            you'll want to choose to craft your legendaries in the slot that
            will grant you the highest amount of stats. Focus on pieces that
            have more stats baseline, like helm/chest/legs.
          </Typography>
          <Typography
            className={classes.subtittle}
            style={{ margin: "10px 0px", color: "#E64D00" }}
          >
            Best Destruction Warlock Legendary for Raiding and Mythic +
          </Typography>
          <Grid>
            {/* <a
              href="https://www.wowhead.com/spell=337057/relic-of-demonic-synergy"
              data-wowhead="spell=337057"
              className={classes.linkwowhead}
            > */}
            <Avatar
              variant="rounded"
              src={Cinders}
              style={{
                boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
              }}
            ></Avatar>

            <Grid container style={{ marginTop: "10px" }}>
              <Typography style={{ padding: "10px" }}>
                Cinders of the Azj'Aqir{" "}
              </Typography>
            </Grid>
            {/* </a> */}
            <Typography className={classes.infotypo} style={{ color: "white" }}>
              <ul>
                <li>
                  Available Slots:{" "}
                  <span
                    style={{ color: "#adb0bb" }}
                    className={classes.statstext}
                  >
                    Legs & Back{" "}
                  </span>
                </li>
                <li>
                  Crafting Preference:{" "}
                  <span
                    style={{ color: "#adb0bb" }}
                    className={classes.statstext}
                  >
                    Legs
                  </span>
                </li>
                <li>
                  Secondaries to use:{" "}
                  <span
                    style={{ color: "#adb0bb" }}
                    className={classes.statstext}
                  >
                    Haste/Mastery
                  </span>
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid style={{ display: "flex" }}>
            <Grid container item>
              <Typography
                className={classes.subtittle}
                style={{ margin: "20px 20px", color: "darkkhaki" }}
              >
                Alternative for Mythic+
              </Typography>
              {/* <a
                href="https://www.wowhead.com/spell=337128/wrath-of-consumption"
                data-wowhead="spell=337128"
                className={classes.linkwowhead}
              > */}
              <Grid container style={{ marginTop: "30px" }}>
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    src={Wilfreds}
                    style={{
                      boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                    }}
                  ></Avatar>
                </ListItemAvatar>
                <Typography
                  className={classes.subtittle}
                  style={{ color: "orange", paddingTop: "10px" }}
                  variant="h2"
                >
                  Wilfred's Sigil of Superior Summoning{" "}
                </Typography>
              </Grid>
              {/* </a> */}
              <Typography
                className={classes.infotypo}
                style={{ color: "white", textAlign: "start" }}
              >
                <ul style={{ paddingLeft: "0px", listStyleType: "none" }}>
                  <li>
                    Available Slots:{" "}
                    <span
                      style={{ color: "#adb0bb" }}
                      className={classes.statstext}
                    >
                      Wrist & Finger{" "}
                    </span>
                  </li>
                  <li>
                    Crafting Preference:{" "}
                    <span
                      style={{ color: "#adb0bb" }}
                      className={classes.statstext}
                    >
                      Wrist
                    </span>
                  </li>
                  <li>
                    Secondaries to use:{" "}
                    <span
                      style={{ color: "#adb0bb" }}
                      className={classes.statstext}
                    >
                      Haste/Mastery
                    </span>
                  </li>
                </ul>
              </Typography>
            </Grid>
            <Grid container item>
              <Typography
                className={classes.subtittle}
                style={{ margin: "15px 20px", color: "darkkhaki" }}
              >
                Alternative for Raiding & Mythic+
              </Typography>
              {/* <a
                href="https://www.wowhead.com/spell=337111/sacrolashs-dark-strike"
                data-wowhead="spell=337111"
                className={classes.linkwowhead}
              > */}
              <Grid container style={{ marginTop: "30px" }}>
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    src={Demonic}
                    style={{
                      boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                    }}
                  ></Avatar>
                </ListItemAvatar>
                <Typography
                  className={classes.subtittle}
                  style={{ color: "orange", paddingTop: "10px" }}
                  variant="h2"
                >
                  Relic of Demonic Synergy{" "}
                </Typography>
              </Grid>
              {/* </a> */}
              <Typography
                className={classes.infotypo}
                style={{ color: "white", textAlign: "start" }}
              >
                <ul style={{ paddingLeft: "0px", listStyleType: "none" }}>
                  <li>
                    Available Slots:{" "}
                    <span
                      style={{ color: "#adb0bb" }}
                      className={classes.statstext}
                    >
                      Head, Shoulder{" "}
                    </span>
                  </li>
                  <li>
                    Crafting Preference:{" "}
                    <span
                      style={{ color: "#adb0bb" }}
                      className={classes.statstext}
                    >
                      Head
                    </span>
                  </li>
                  <li>
                    Secondaries to use:{" "}
                    <span
                      style={{ color: "#adb0bb" }}
                      className={classes.statstext}
                    >
                      Haste/Mastery
                    </span>
                  </li>
                </ul>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid container item xs={4}>
                <img
                  width="400px"
                  src={Runecarver}
                  className={classes.border}
                />
              </Grid> */}
      </Grid>
    </Grid>
  );
};

export default Lego;
