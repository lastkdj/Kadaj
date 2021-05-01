import React from "react";
import shriekwingtalents from "../../../../Img/aff/shriekwingtalents.png";
import Divider from "@material-ui/core/Divider";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Focused from "../../../../Img/aff/focused.png";
import Cold from "../../../../Img/aff/cold.png";
import cabalist from "../../../../Img/aff/cabalist.png";
import ruby from "../../../../Img/aff/ruby.png";
import quantum from "../../../../Img/aff/quantum.png";
import gladiator from "../../../../Img/aff/gladiator.png";
import Demonic from "../../../../Img/aff/demonic.png";
import Diabolic from "../../../../Img/aff/diabolic.png";
import Momentum from "../../../../Img/aff/momentum.png";
import useStyles from "./BossesStyles";
import Hungering from "../../../../Img/aff/hungering.jpg";

const HungeringComponent = () => {
  const classes = useStyles();
  return (
    <Grid container xs={12} direction="column" className={classes.aligned}>
      {" "}
      <Typography className={classes.tittle}>Hungering Destroyer</Typography>
      <Divider variant="inset" component="hr" />
      <Typography className={classes.subtittle}>Talent Choice:</Typography>
      <img
        alt=""
        className={classes.imgPhone}
        src={shriekwingtalents}
        style={{ margin: "10px 0px" }}
      />
      <Typography className={classes.subtittle}>Conduits Choice:</Typography>
      <Grid container className={classes.justify}>
        {/* <a
          href="https://www.wowhead.com/spell=339500/focused-malignancy"
          data-wowhead="spell=339500"
        > */}
        <img
          alt=""
          width="46px"
          height="46px"
          src={Focused}
          style={{ margin: "10px 10px 10px 0px" }}
        />
        {/* </a>
        <a
          href="https://www.wowhead.com/spell=339576/cold-embrace"
          data-wowhead="spell=339576"
        > */}
        <img
          alt=""
          width="46px"
          height="46px"
          src={Cold}
          style={{ margin: "10px 10px 10px 0px" }}
        />
        {/* </a>
        <a
          href="https://www.wowhead.com/spell=340562/diabolic-bloodstone"
          data-wowhead="spell=340562"
        > */}
        <img
          alt=""
          width="46px"
          height="46px"
          src={Diabolic}
          style={{ margin: "10px 10px 10px 0px" }}
        />
        {/* </a>
        <a
          href="https://www.wowhead.com/spell=339411/demonic-momentum"
          data-wowhead="spell=339411"
        > */}
        <img
          alt=""
          width="46px"
          height="46px"
          src={Momentum}
          style={{ margin: "10px 10px 10px 0px" }}
        />
        {/* </a> */}
      </Grid>
      <Typography className={classes.subtittle}>Trinkets:</Typography>
      <Grid container className={classes.justify}>
        {/* <a
          href="https://www.wowhead.com/item=184028/cabalists-hymnal?bonus=6805"
          data-wowhead="item=184028"
        > */}{" "}
        <img
          alt=""
          width="46px"
          height="46px"
          src={cabalist}
          style={{ margin: "10px 10px 10px 0px" }}
        />{" "}
        {/* </a>
        <a
          href="https://www.wowhead.com/item=178809/soulletting-ruby?bonus=0:1501"
          data-wowhead="item=178809"
        > */}
        <img
          alt=""
          width="46px"
          height="46px"
          src={ruby}
          style={{ margin: "10px 10px 10px 0px" }}
        />{" "}
        {/* </a>
        <a
          href="https://www.wowhead.com/item=179350/inscrutable-quantum-device?bonus=6805:1472"
          data-wowhead="item=179350"
        > */}
        <img
          alt=""
          width="46px"
          height="46px"
          src={quantum}
          style={{ margin: "10px 10px 10px 0px" }}
        />
        {/* </a>
        <a
          href="https://www.wowhead.com/item=175921/sinful-gladiators-badge-of-ferocity"
          data-wowhead="item=175921"
        > */}
        <img
          alt=""
          width="46px"
          height="46px"
          src={gladiator}
          style={{ margin: "10px 10px 10px 0px" }}
        />
        {/* </a> */}
      </Grid>
      <Typography className={classes.subtittle} style={{ marginTop: "10px" }}>
        Lego:
      </Typography>
      <Grid container className={classes.justify}>
        {/* <a
          href="https://www.wowhead.com/spell=337057/relic-of-demonic-synergy"
          data-wowhead="spell=337057"
        > */}
        <img
          alt=""
          width="46px"
          height="46px"
          src={Demonic}
          style={{ margin: "10px 10px 10px 0px" }}
        />
        {/* </a> */}
      </Grid>
      <Grid container className={classes.justify}>
        <img src={Hungering} alt="" className={classes.imgBorder} />
      </Grid>
    </Grid>
  );
};

export default HungeringComponent;
