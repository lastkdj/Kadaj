import React from "react";
import Paper from "@material-ui/core/Paper";
import { Menu } from "../../Context/MenuContext";
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

  bossframe: {
    width: "700px",
    height: "485px",
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
      <Grid item xs={9} style={{ marginTop: "50px" }}>
        <Paper
          elevation={3}
          style={{
            maxWidth: "100%",
            height: "650px",
            backgroundColor: "#1c1c1c",
          }}
          className={classes.border}
        >
          <Grid container style={{ padding: "10px 10px 10px 15px" }}>
            <Grid container xs={12}>
              {" "}
              <Typography
                className={classes.tittle}
                style={{ textAlign: "center" }}
              >
                Best Affliction Setup per Boss
              </Typography>
            </Grid>
            <Divider variant="inset" component="hr" />
            <Grid
              container
              item
              xs={12}
              style={{
                marginTop: "20px",
                justifyContent: "space-between",
                paddingLeft: "20px",
              }}
            >
              <Grid
                item
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
                <TabPanel value={value} index={0}>
                  <Grid className={classes.bossframe}>
                    <ShriekwingComponent />
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  {" "}
                  <Grid className={classes.bossframe}>
                    <HuntsmanComponent />
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  {" "}
                  <Grid className={classes.bossframe}>
                    <HungeringComponent />
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  {" "}
                  <Grid className={classes.bossframe}>
                    <LadyComponent />
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={4}>
                  {" "}
                  <Grid className={classes.bossframe}>
                    <XymoxComponent />
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={5}>
                  {" "}
                  <Grid className={classes.bossframe}>
                    <SunskingComponent />
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={6}>
                  {" "}
                  <Grid className={classes.bossframe}></Grid>
                </TabPanel>
                <TabPanel value={value} index={7}>
                  {" "}
                  <Grid className={classes.bossframe}></Grid>
                </TabPanel>
                <TabPanel value={value} index={8}>
                  {" "}
                  <Grid className={classes.bossframe}></Grid>
                </TabPanel>
                <TabPanel value={value} index={9}>
                  {" "}
                  <Grid className={classes.bossframe}></Grid>
                </TabPanel>
              </Grid>
              <Grid
                container
                item
                justify="center"
                xs={4}
                style={{ maxHeight: "400px" }}
              >
                <img
                  width="400px"
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
                  className={classes.border}
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
