import React from "react";
import shriekwingtalents from "../../../Img/demo/demotalentsraid.png";
import Divider from "@material-ui/core/Divider";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Blood from "../../../Img/demo/blood.png";
import Comando from "../../../Img/demo/comando.png";
import cabalist from "../../../Img/aff/cabalist.png";
import ruby from "../../../Img/aff/ruby.png";
import gladiatoremblem from "../../../Img/demo/gladiator.png";
import gladiator from "../../../Img/aff/gladiator.png";
import Wilfreds from "../../../Img/demo/wilfreds.png";
import Diabolic from "../../../Img/aff/diabolic.png";
import Momentum from "../../../Img/aff/momentum.png";

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

const HungeringComponent = () => {
  const classes = useStyles();
  return (
    <Grid container xs={12} direction="column" style={{ padding: "10px" }}>
      {" "}
      <Typography className={classes.tittle}>Hungering Destroyer</Typography>
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
          href="https://www.wowhead.com/spell=339578/borne-of-blood"
          data-wowhead="spell=339578"
        >
          <img
            alt=""
            width="46px"
            height="46px"
            src={Blood}
            style={{ margin: "10px 10px 10px 0px" }}
          />
        </a>
        <a
          href="https://www.wowhead.com/spell=339845/fel-commando"
          data-wowhead="spell=339845"
        >
          <img
            alt=""
            width="46px"
            height="46px"
            src={Comando}
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
          href="https://www.wowhead.com/item=178447/sinful-gladiators-emblem"
          data-wowhead="item=178447"
        >
          <img
            alt=""
            width="46px"
            height="46px"
            src={gladiatoremblem}
            style={{ margin: "10px 10px 10px 0px" }}
          />
        </a>
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
  );
};

export default HungeringComponent;
