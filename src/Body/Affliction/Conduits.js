import React from "react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Focused from "../../Img/aff/focused.png";
import Cold from "../../Img/aff/cold.png";
import ra from "../../Img/aff/ra.png";
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
          <Tab label="Potency" {...a11yProps(0)} />
          <Tab label="Endurance" {...a11yProps(1)} />
          <Tab label="Finesse" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography
          className={classes.boxText}
          style={{ textAlign: "center", paddingTop: "10px" }}
        >
          Best Raiding and M+ Potency Conduits for Affliction Warlocks
        </Typography>
        <Grid style={{ marginLeft: "20px", marginTop: "20px" }}>
          <a
            href="https://www.wowhead.com/spell=339500/focused-malignancy"
            data-wowhead="spell=339500"
            style={{ textDecoration: "none" }}
          >
            <Grid container>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  src={Focused}
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
                Focused Malignancy{" "}
              </Typography>
            </Grid>
          </a>
          <Typography className={classes.infoBox}>
            <ul>
              <li style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                Always take Focused Malignancy. It's pretty much the strongest
                in every scenario, outside of just raw overall AoE damage.
              </li>
            </ul>
          </Typography>
        </Grid>
        <Grid style={{ marginLeft: "20px" }}>
          <a
            href="https://www.wowhead.com/spell=339576/cold-embrace"
            data-wowhead="spell=339576"
            style={{ textDecoration: "none" }}
          >
            <Grid container style={{ marginTop: "10px" }}>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  src={Cold}
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
                Cold Embrace{" "}
              </Typography>
            </Grid>
          </a>
          <Typography className={classes.infoBox}>
            <ul>
              <li style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                For pure single target fights
              </li>
            </ul>
          </Typography>
        </Grid>
        <Grid style={{ marginLeft: "20px" }}>
          <a
            href="https://www.wowhead.com/spell=339481/rolling-agony"
            data-wowhead="spell=339481"
            style={{ textDecoration: "none" }}
          >
            <Grid container style={{ marginTop: "20px" }}>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  src={ra}
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
                Focused Malignancy{" "}
              </Typography>
            </Grid>
          </a>
          <Typography className={classes.infoBox}>
            <ul>
              <li style={{ color: "#adb0bb", fontSize: "0.9em" }}>
                For multi-target fights
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
