import React from "react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Blood from "../../Img/demo/blood.png";
import Comando from "../../Img/demo/comando.png";
import Stalkers from "../../Img/demo/stalkers.png";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Diabolic from "../../Img/aff/diabolic.png";
import Barrier from "../../Img/aff/barrier.png";
import Momentum from "../../Img/aff/momentum.png";
import Celerity from "../../Img/aff/celerity.png";

const useStyles = makeStyles((theme) => ({
  tittle: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2.1em",
  },

  subtittle: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.2em",
  },

  boxText: {
    fontWeight: 400,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.8em",
  },

  info: {
    fontWeight: 400,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1em",
    textAlign: "justify",
  },

  infoBox: {
    fontWeight: 400,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.9em",
    textAlign: "justify",
  },

  border: {
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#2AB602",
  },

  tabwidth: {
    minWidth: "0px",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: { minWidth: "0px" },

    [theme.breakpoints.up("xl")]: { minWidth: "150px" },
  },

  conduittext: {
    color: "adb0bb",
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: { fontSize: "0.6em" },

    [theme.breakpoints.up("xl")]: { fontSize: "0.8em" },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Conduits = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <Grid
      container
      item
      xs={6}
      direction="column"
      style={{ paddingLeft: "20px" }}
    >
      {" "}
      <Typography
        className={classes.subtittle}
        style={{ textAlign: "center", marginBottom: "10px" }}
      >
        Conduits
      </Typography>
      <AppBar
        position="static"
        style={{ backgroundColor: "#60338A", borderRadius: "9px 9px 0px 0px" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "rgb(245, 137, 0)",
            },
          }}
        >
          <Tab label="Potency" {...a11yProps(0)} className={classes.tabwidth} />
          <Tab
            label="Endurance"
            {...a11yProps(1)}
            className={classes.tabwidth}
          />
          <Tab label="Finesse" {...a11yProps(2)} className={classes.tabwidth} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography
          className={classes.boxText}
          style={{ textAlign: "center", paddingTop: "10px" }}
        >
          Best Raiding and M+ Potency Conduits for Demonology Warlocks
        </Typography>
        <Grid style={{ marginLeft: "20px", marginTop: "20px" }}>
          <a
            href="https://www.wowhead.com/spell=339578/borne-of-blood"
            data-wowhead="spell=339578"
            style={{ textDecoration: "none" }}
          >
            <Grid container>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  src={Blood}
                  style={{
                    boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                  }}
                ></Avatar>
              </ListItemAvatar>
              <Typography
                className={classes.boxText}
                style={{ color: "orange", paddingTop: "10px" }}
                variant="h2"
              >
                Borne of Blood{" "}
              </Typography>
            </Grid>
          </a>
          <Typography className={classes.infoBox}>
            <ul>
              <li className={classes.conduittext}>
                Is the best overall conduit available for single target smooths
                out the flow of Demonic Core generation and gives you more
                overall charges for movement when needed.
              </li>
            </ul>
          </Typography>
        </Grid>
        <Grid style={{ marginLeft: "20px" }}>
          <a
            href="https://www.wowhead.com/spell=339656/carnivorous-stalkers"
            data-wowhead="spell=339656"
            style={{ textDecoration: "none" }}
          >
            <Grid container style={{ marginTop: "10px" }}>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  src={Stalkers}
                  style={{
                    boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                  }}
                ></Avatar>
              </ListItemAvatar>
              <Typography
                className={classes.boxText}
                style={{ color: "orange", paddingTop: "10px" }}
                variant="h2"
              >
                Carnivorous Stalkers{" "}
              </Typography>
            </Grid>
          </a>
          <Typography className={classes.infoBox}>
            <ul>
              <li className={classes.conduittext}>
                is the second most consistent conduit, especially if you are
                playing with{" "}
                <a
                  href="https://www.wowhead.com/spell=264078/dreadlash"
                  data-wowhead="spell=264078"
                  style={{ textDecoration: "none", color: "orange" }}
                >
                  Dreadlash
                </a>{" "}
                . There is some additional value it gains from{" "}
                <a
                  href="https://www.wowhead.com/spell=267170/from-the-shadows"
                  data-wowhead="spell=267170"
                  style={{ textDecoration: "none", color: "orange" }}
                >
                  From the Shadows
                </a>{" "}
                as you will{" "}
                <a
                  href="https://www.wowhead.com/spell=271971/dreadbite"
                  data-wowhead="spell=271971"
                  style={{ textDecoration: "none", color: "orange" }}
                >
                  Dreadbite
                </a>{" "}
                more often.
              </li>
            </ul>
          </Typography>
        </Grid>
        <Grid style={{ marginLeft: "20px" }}>
          <a
            href="https://www.wowhead.com/spell=339845/fel-commando"
            data-wowhead="spell=339845"
            style={{ textDecoration: "none" }}
          >
            <Grid container style={{ marginTop: "20px" }}>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  src={Comando}
                  style={{
                    boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                  }}
                ></Avatar>
              </ListItemAvatar>
              <Typography
                className={classes.boxText}
                style={{ color: "orange", paddingTop: "10px" }}
                variant="h2"
              >
                Fel Commando{" "}
              </Typography>
            </Grid>
          </a>
          <Typography className={classes.infoBox}>
            <ul>
              <li className={classes.conduittext}>
                is still an alright option if you have nothing else but is
                outshined by the other three conduits in this list.
              </li>
            </ul>
          </Typography>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography
          className={classes.boxText}
          style={{ textAlign: "center", paddingTop: "10px" }}
        >
          Best Raiding and M+ Endurance Conduits for Affliction Warlocks
        </Typography>
        <Grid style={{ marginLeft: "20px", marginTop: "20px" }}>
          <a
            href="https://www.wowhead.com/spell=340562/diabolic-bloodstone"
            data-wowhead="spell=340562"
            style={{ textDecoration: "none" }}
          >
            <Grid container>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  src={Diabolic}
                  style={{
                    boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                  }}
                ></Avatar>
              </ListItemAvatar>
              <Typography
                className={classes.boxText}
                style={{ color: "orange", paddingTop: "10px" }}
                variant="h2"
              >
                Diabolic Bloodstone{" "}
              </Typography>
            </Grid>
          </a>
          <Typography className={classes.infoBox}>
            <ul>
              <li style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                seems too good to pass on. Having 10% leech at rank 1, scaling
                up to 20%+ later on the expansion every time someone
                healthstones is a ridiculous amount of self healing without any
                downsides.
              </li>
            </ul>
          </Typography>
        </Grid>
        <Grid style={{ marginLeft: "20px" }}>
          <a
            href="https://www.wowhead.com/spell=339272/resolute-barrier"
            data-wowhead="spell=339272"
            style={{ textDecoration: "none" }}
          >
            <Grid container style={{ marginTop: "10px" }}>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  src={Barrier}
                  style={{
                    boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                  }}
                ></Avatar>
              </ListItemAvatar>
              <Typography
                className={classes.boxText}
                style={{ color: "orange", paddingTop: "10px" }}
                variant="h2"
              >
                Resolute Barrier{" "}
              </Typography>
            </Grid>
          </a>
          <Typography className={classes.infoBox}>
            <ul>
              <li style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                While the former might scale into absurdity later on the
                expansion (Imagine having wall available every 40 seconds)
              </li>
            </ul>
          </Typography>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography
          className={classes.boxText}
          style={{ textAlign: "center", paddingTop: "10px" }}
        >
          Best Raiding and M+ Finesse Conduits for Affliction Warlocks
        </Typography>
        <Grid style={{ marginLeft: "20px", marginTop: "20px" }}>
          <a
            href="https://www.wowhead.com/spell=339411/demonic-momentum"
            data-wowhead="spell=339411"
            style={{ textDecoration: "none" }}
          >
            <Grid container>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  src={Momentum}
                  style={{
                    boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                  }}
                ></Avatar>
              </ListItemAvatar>
              <Typography
                className={classes.boxText}
                style={{ color: "orange", paddingTop: "10px" }}
                variant="h2"
              >
                Demonic Momentum{" "}
              </Typography>
            </Grid>
          </a>
          <Typography className={classes.infoBox}>
            <ul>
              <li style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                Best Choice so far, mobility is priority
              </li>
            </ul>
          </Typography>
        </Grid>
        <Grid style={{ marginLeft: "20px" }}>
          <a
            href="https://www.wowhead.com/spell=339130/fel-celerity"
            data-wowhead="spell=339130"
            style={{ textDecoration: "none" }}
          >
            <Grid container style={{ marginTop: "10px" }}>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  src={Celerity}
                  style={{
                    boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                  }}
                ></Avatar>
              </ListItemAvatar>
              <Typography
                className={classes.boxText}
                style={{ color: "orange", paddingTop: "10px" }}
                variant="h2"
              >
                Fel Celerity{" "}
              </Typography>
            </Grid>
          </a>
          <Typography className={classes.infoBox}>
            <ul>
              <li style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                In case, you are having issues with your pet summoning and even
                for Torghast this is a good choice
              </li>
            </ul>
          </Typography>
        </Grid>
      </TabPanel>
    </Grid>
  );
};

export default Conduits;
