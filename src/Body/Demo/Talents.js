import React from "react";
import Paper from "@material-ui/core/Paper";
import { Menu } from "../../Context/DemoMenuContext";
import { Grid, Slide, Typography, makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import TalentsImg from "../../Img/demo/talentright.jpg";
import st from "../../Img/demo/demotalents.png";
import aoe from "../../Img/demo/demodungeontalents.png";
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

  border: {
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#2AB602",
    backgroundImage: `url(${wowBack})`,

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {},
  },

  statsimg: {
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#B97AF4",
    backgroundImage: `url(${wowBack})`,

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      width: "300px",
      height: "400px",
    },

    [theme.breakpoints.up("xl")]: {
      width: "400px",
      height: "536px",
    },
  },

  paperborder: {
    maxWidth: "100%",
    height: "auto",
    backgroundColor: "#1c1c1c",
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#B97AF4",
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

    [theme.breakpoints.up("xl")]: { marginTop: "50px" },
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
    display: "none",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {
      display: "block",
    },
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

  talentsimg: {
    width: "inherit",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

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

const Talents = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  const { state } = Menu();
  const { talents } = state;
  return (
    <Slide
      direction="left"
      in={talents}
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
                Best Demonology Warlock Talents
              </Typography>
            </Grid>
            <Divider variant="inset" component="hr" />
            <Grid
              container
              item
              xs={12}
              justify="space-around"
              style={{ marginTop: "20px" }}
            >
              <Grid item xs={7}>
                <AppBar
                  position="static"
                  style={{
                    backgroundColor: "#60338A",
                    borderRadius: "9px 9px 0px 0px",
                    justifyContent: "center",
                  }}
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
                    <Tab label="Single Target" {...a11yProps(0)} />
                    <Tab label="AOE/Council" {...a11yProps(1)} />
                    <Tab label="Mythic+" {...a11yProps(2)} />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  <Grid container justify="space-between">
                    <img alt="" src={st} className={classes.talentsimg} />
                    <Grid direction="column" style={{ marginRight: "30px" }}>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "10px" }}
                      >
                        Best Choice
                      </Typography>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "50px" }}
                      >
                        Best Choice
                      </Typography>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "40px" }}
                      >
                        Depends on Fight
                      </Typography>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "50px" }}
                      >
                        Best Choice
                      </Typography>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "40px" }}
                      >
                        Depends on Fight
                      </Typography>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "50px" }}
                      >
                        Best Choice
                      </Typography>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "50px" }}
                      >
                        Best Choice
                      </Typography>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Grid container justify="space-between">
                    <img alt="" src={st} className={classes.talentsimg} />
                    <Grid direction="column" style={{ marginRight: "30px" }}>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "10px" }}
                      >
                        Best Choice
                      </Typography>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "50px" }}
                      >
                        Best Choice
                      </Typography>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "40px" }}
                      >
                        Depends on Fight
                      </Typography>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "50px" }}
                      >
                        Best Choice
                      </Typography>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "40px" }}
                      >
                        Depends on Fight
                      </Typography>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "50px" }}
                      >
                        Best Choice
                      </Typography>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "50px" }}
                      >
                        Best Choice
                      </Typography>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  {" "}
                  <Grid container justify="space-around">
                    <img alt="" src={aoe} className={classes.talentsimg} />
                    <Grid direction="column">
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "10px", fontSize: "0.7em" }}
                      >
                        Using Carnivorous Stalkers
                      </Typography>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "50px" }}
                      >
                        Best Choice
                      </Typography>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "40px" }}
                      >
                        Depends on Dungeon
                      </Typography>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "50px", fontSize: "0.7em" }}
                      >
                        Using Carnivorous Stalkers
                      </Typography>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "40px" }}
                      >
                        Depends on Dungeon
                      </Typography>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "50px" }}
                      >
                        Best Choice
                      </Typography>
                      <Typography
                        className={classes.infoBox}
                        style={{ marginTop: "50px" }}
                      >
                        Best Choice
                      </Typography>
                    </Grid>
                  </Grid>
                </TabPanel>
              </Grid>
              <Grid container item xs={4} style={{ maxHeight: "400px" }}>
                <img alt="" src={TalentsImg} className={classes.statsimg} />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Slide>
  );
};

export default Talents;
