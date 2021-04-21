import React from "react";
import shriekwingtalents from "../../../Img/destro/destrost.png";
import Divider from "@material-ui/core/Divider";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Ashen from "../../../Img/destro/ashen.png";
import Combusting from "../../../Img/destro/combusting.png";
import cabalist from "../../../Img/aff/cabalist.png";
import ruby from "../../../Img/aff/ruby.png";
import quantum from "../../../Img/aff/quantum.png";
import gladiator from "../../../Img/aff/gladiator.png";
import Diabolic from "../../../Img/aff/diabolic.png";
import Momentum from "../../../Img/aff/momentum.png";
import Wilfreds from "../../../Img/demo/wilfreds.png";
import Korayn from "../../../Img/destro/korayn.png";

const useStyles = makeStyles((theme) => ({
  tittle: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.5em",
  },

  subtittle: {
    marginTop: "20px",
    fontWeight: 400,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1em",
  },

  info: {
    fontWeight: 400,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1em",
    textAlign: "justify",
  },

  border: {
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#2AB602",
  },
}));

const GeneralsComponent = () => {
  const classes = useStyles();
  return (
    <Grid container xs={12} style={{ padding: "10px" }}>
      <Grid container item xs={7} direction="column">
        {" "}
        <Typography className={classes.tittle}>
          Stone Legion Generals
        </Typography>
        <Divider variant="inset" component="hr" />
        <Typography className={classes.subtittle}>Talent Choice:</Typography>
        <img
          alt=""
          width="297px"
          height="46px"
          src={shriekwingtalents}
          style={{ margin: "10px 0px" }}
        />
        <Typography className={classes.subtittle}>Conduits Choice:</Typography>
        <Grid container>
          <a
            href="https://www.wowhead.com/spell=339892/ashen-remains"
            data-wowhead="spell=339892"
          >
            <img
              alt=""
              width="46px"
              height="46px"
              src={Ashen}
              style={{ margin: "10px 10px 10px 0px" }}
            />
          </a>
          <a
            href="https://www.wowhead.com/spell=339896/combusting-engine"
            data-wowhead="spell=339896"
          >
            <img
              alt=""
              width="46px"
              height="46px"
              src={Combusting}
              style={{ margin: "10px 10px 10px 0px" }}
            />
          </a>
          <a
            href="https://www.wowhead.com/spell=340562/diabolic-bloodstone"
            data-wowhead="spell=340562"
          >
            <img
              alt=""
              width="46px"
              height="46px"
              src={Diabolic}
              style={{ margin: "10px 10px 10px 0px" }}
            />
          </a>
          <a
            href="https://www.wowhead.com/spell=339411/demonic-momentum"
            data-wowhead="spell=339411"
          >
            <img
              alt=""
              width="46px"
              height="46px"
              src={Momentum}
              style={{ margin: "10px 10px 10px 0px" }}
            />
          </a>
        </Grid>
        <Typography className={classes.subtittle}>Trinkets:</Typography>
        <Grid container>
          <a
            href="https://www.wowhead.com/item=184028/cabalists-hymnal?bonus=6805"
            data-wowhead="item=184028"
          >
            {" "}
            <img
              alt=""
              width="46px"
              height="46px"
              src={cabalist}
              style={{ margin: "10px 10px 10px 0px" }}
            />{" "}
          </a>

          <a
            href="https://www.wowhead.com/item=179350/inscrutable-quantum-device?bonus=6805:1472"
            data-wowhead="item=179350"
          >
            <img
              alt=""
              width="46px"
              height="46px"
              src={quantum}
              style={{ margin: "10px 10px 10px 0px" }}
            />
          </a>
          <a
            href="https://www.wowhead.com/item=178809/soulletting-ruby?bonus=0:1501"
            data-wowhead="item=178809"
          >
            <img
              alt=""
              width="46px"
              height="46px"
              src={ruby}
              style={{ margin: "10px 10px 10px 0px" }}
            />{" "}
          </a>
          <a
            href="https://www.wowhead.com/item=175921/sinful-gladiators-badge-of-ferocity"
            data-wowhead="item=175921"
          >
            <img
              alt=""
              width="46px"
              height="46px"
              src={gladiator}
              style={{ margin: "10px 10px 10px 0px" }}
            />
          </a>
        </Grid>
        <Typography className={classes.subtittle} style={{ marginTop: "10px" }}>
          Lego:
        </Typography>
        <Grid>
          <a
            href="https://www.wowhead.com/spell=337020/wilfreds-sigil-of-superior-summoning"
            data-wowhead="spell=337020"
          >
            <img
              alt=""
              width="46px"
              height="46px"
              src={Wilfreds}
              style={{ margin: "10px 10px 10px 0px" }}
            />
          </a>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Typography
          className={classes.subtittle}
          style={{ marginTop: "10px", textAlign: "center", fontWeight: "500" }}
        >
          Koryan
        </Typography>{" "}
        <img alt="" src={Korayn} style={{ width: "300px" }} />
      </Grid>
    </Grid>
  );
};

export default GeneralsComponent;
