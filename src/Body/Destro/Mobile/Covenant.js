import React from "react";
import Paper from "@material-ui/core/Paper";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import nf from "../../../Img/aff/nf.png";
import Conduits from "./Conduits";
import Niya from "../../../Img/aff/niya.png";
import Soulrot from "../../../Img/aff/soulrot.png";
import Flicker from "../../../Img/aff/flicker.png";

import useStyles from "./MobileStyles";

const Covenant = (props) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid container item justify="center" xs={12}>
        {" "}
        <Typography className={classes.tittle} style={{ textAlign: "center" }}>
          Best Destruction Warlock Covenant
        </Typography>
      </Grid>
      <Divider variant="inset" component="hr" />
      <Grid container item xs={12} justify="space-around">
        <Grid container item xs={12}>
          <Grid container item xs={12} justify="center">
            {" "}
            <Typography
              className={classes.subtittle}
              style={{
                fontSize: "0.8em",
                textAlign: "center",
                paddingTop: "20px",
                color: "#584DE1",
              }}
            >
              NIGHTFAE
            </Typography>
            <img alt="" src={nf} width="60px" height="60px" />
          </Grid>

          <Conduits />
          <Grid container justify="center">
            <Grid container item xs={6} direction="column">
              {" "}
              <Typography
                className={classes.infobox}
                style={{ textAlign: "center" }}
              >
                Soulbind
              </Typography>
              <Typography
                className={classes.infobox}
                style={{ textAlign: "center", color: "rgb(245, 137, 0)" }}
              >
                {" "}
                NIYA
              </Typography>
              <Grid container item justify="center">
                {" "}
                <img alt="" src={Niya} style={{ width: "inherit" }} />
                {/* <a
                  href="https://www.wowhead.com/spell=325640/soul-rot"
                  data-wowhead="spell=325640"
                  style={{ textDecoration: "none" }}
                > */}
                <img
                  alt=""
                  src={Soulrot}
                  width="40px"
                  height="40px"
                  style={{ marginRight: "10px" }}
                  className={classes.border}
                />
                {/* </a>
                <a
                  href="https://www.wowhead.com/spell=310143/soulshape"
                  data-wowhead="spell=310143"
                  style={{ textDecoration: "none" }}
                > */}
                <img
                  alt=""
                  src={Flicker}
                  width="40px"
                  height="40px"
                  className={classes.border}
                />
                {/* </a> */}
              </Grid>
            </Grid>{" "}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Covenant;
