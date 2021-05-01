import React from "react";
import Paper from "@material-ui/core/Paper";
import { Menu } from "../../Context/DestroMenuContext";
import { Grid, Slide, Typography, makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Shriekwing from "../../Img/aff/shriekwing.jpg";
import Huntsman from "../../Img/aff/huntsman.jpg";
import Hungering from "../../Img/aff/hungering.jpg";
import Lady from "../../Img/aff/lady.jpg";
import Xymox from "../../Img/aff/xymox.jpg";
import Sunsking from "../../Img/aff/sunsking.jpg";
import Council from "../../Img/aff/council.jpg";
import Sludgefist from "../../Img/aff/sludgefist.jpg";
import Generals from "../../Img/aff/generals.jpg";
import Denathrius from "../../Img/aff/denathrius.jpg";
import ShriekwingComponent from "./RaidBosses/Shriekwing";
import HuntsmanComponent from "./RaidBosses/Huntsman";
import HungeringComponent from "./RaidBosses/Hungering";
import LadyComponent from "./RaidBosses/Lady";
import XymoxComponent from "./RaidBosses/Xymox";
import SunskingComponent from "./RaidBosses/Sunsking";
import CouncilComponent from "./RaidBosses/Council";
import SludgefistComponent from "./RaidBosses/Sludgefist";
import GeneralsComponent from "./RaidBosses/Generals";
import DenathriusComponent from "./RaidBosses/Denathrius";
import wowBack from "../../Img/wowback.jpg";

const useStyles = makeStyles((theme) => ({
  tittle: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.5em",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {
      fontSize: "2.1em",
    },
  },

  border: {
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#E64D00",
    backgroundImage: `url(${wowBack})`,

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {},
  },

  info: {
    fontWeight: 400,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1em",
    textAlign: "justify",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: { fontSize: "0.8em" },

    [theme.breakpoints.up("xl")]: {
      fontSize: "1em",
    },
  },

  paperborder: {
    maxWidth: "100%",
    height: "auto",
    backgroundColor: "#1c1c1c",
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#E64D00",
    backgroundImage: `url(${wowBack})`,
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {
      height: "650px",
    },
  },

  menuItemSheet: {
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: { marginTop: "80px" },

    [theme.breakpoints.up("xl")]: {
      marginTop: "50px",
    },
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
    fontSize: "0.9em",
  },

  infoBox: {
    fontWeight: 400,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.9em",
    textAlign: "justify",
  },

  covenantskills: {
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#2AB602",
    width: "40px",
    height: "40px",
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {
      width: "50px",
      height: "50px",
    },
  },

  bossframe: {
    width: "700px",
    height: "485px",
  },

  bossimg: {
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      width: "360px",
    },

    [theme.breakpoints.up("xl")]: {
      width: "400px",
    },
  },

  appbar: {
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      width: "400px",
    },

    [theme.breakpoints.up("xl")]: {
      width: "auto",
    },
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
        <Box p={1} style={{ backgroundColor: "#2A193B" }}>
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

const Raid = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  const { state } = Menu();
  const { raid } = state;
  return (
    <Slide
      direction="left"
      in={raid}
      timeout={{
        appear: 500,
        enter: 300,
        exit: 500,
      }}
      mountOnEnter
      unmountOnExit
    >
      <Grid item xs={9} className={classes.menuItemSheet}>
        <Paper elevation={3} className={classes.paperborder}>
          <Grid container style={{ padding: "10px 10px 10px 15px" }}>
            <Grid container xs={12}>
              {" "}
              <Typography
                className={classes.tittle}
                style={{ textAlign: "center" }}
              >
                Best Destruction Setup per Boss
              </Typography>
            </Grid>
            <Divider variant="inset" component="hr" />
            <Grid
              container
              item
              xs={12}
              style={{
                marginTop: "20px",
                justifyContent: "space-around",
              }}
            >
              <Grid
                item
                xs={6}
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <AppBar
                  position="static"
                  style={{
                    backgroundColor: "#60338A",
                    borderRadius: "9px 0px 0px 9px",
                    justifyContent: "center",
                    maxWidth: "fit-content",
                  }}
                >
                  <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                    TabIndicatorProps={{
                      style: {
                        backgroundColor: "rgb(245, 137, 0)",
                      },
                    }}
                  >
                    <Tab label="ShriekWing" {...a11yProps(0)} />
                    <Tab label="Huntsman" {...a11yProps(1)} />
                    <Tab label="Hungering" {...a11yProps(2)} />
                    <Tab label="Lady Inerva" {...a11yProps(3)} />
                    <Tab label="Xymox" {...a11yProps(4)} />
                    <Tab label="Kaelthas" {...a11yProps(5)} />
                    <Tab label="Council" {...a11yProps(6)} />
                    <Tab label="Sludgefist" {...a11yProps(7)} />
                    <Tab label="Generals" {...a11yProps(8)} />
                    <Tab label="Denathrius" {...a11yProps(9)} />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} className={classes.appbar}>
                  <Grid className={classes.bossframe}>
                    <ShriekwingComponent />
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={1} className={classes.appbar}>
                  {" "}
                  <Grid className={classes.bossframe}>
                    <HuntsmanComponent />
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={2} className={classes.appbar}>
                  {" "}
                  <Grid className={classes.bossframe}>
                    <HungeringComponent />
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={3} className={classes.appbar}>
                  {" "}
                  <Grid className={classes.bossframe}>
                    <LadyComponent />
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={4} className={classes.appbar}>
                  {" "}
                  <Grid className={classes.bossframe}>
                    <XymoxComponent />
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={5} className={classes.appbar}>
                  {" "}
                  <Grid className={classes.bossframe}>
                    <SunskingComponent />
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={6} className={classes.appbar}>
                  {" "}
                  <Grid className={classes.bossframe}>
                    <CouncilComponent />
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={7} className={classes.appbar}>
                  {" "}
                  <Grid className={classes.bossframe}>
                    <SludgefistComponent />
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={8} className={classes.appbar}>
                  {" "}
                  <Grid className={classes.bossframe}>
                    <GeneralsComponent />
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={9} className={classes.appbar}>
                  {" "}
                  <Grid className={classes.bossframe}>
                    <DenathriusComponent />
                  </Grid>
                </TabPanel>
              </Grid>
              <Grid container item justify="center" xs={4}>
                <img
                  alt=""
                  className={classes.bossimg}
                  src={
                    value === 0
                      ? Shriekwing
                      : value === 1
                      ? Huntsman
                      : value === 2
                      ? Hungering
                      : value === 3
                      ? Lady
                      : value === 4
                      ? Xymox
                      : value === 5
                      ? Sunsking
                      : value === 6
                      ? Council
                      : value === 7
                      ? Sludgefist
                      : value === 8
                      ? Generals
                      : value === 9
                      ? Denathrius
                      : null
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Slide>
  );
};

export default Raid;
