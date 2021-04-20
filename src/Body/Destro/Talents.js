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
import TalentsImg from "../../Img/destro/talents.jpg";
import destrostfull from "../../Img/destro/destrostfull.png";
import destroaoefull from "../../Img/destro/destroaoefull.png";

const useStyles = makeStyles((theme) => ({
  tittle: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2.1em",
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
    borderColor: "#E64D00",
  },

  infoBox: {
    fontWeight: 400,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.9em",
    textAlign: "justify",
    color: "#adb0bb",
    fontSize: "0.9em",
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
                Best Destruction Warlock Talents
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
                    <img src={destrostfull} />
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
                    <img src={destroaoefull} />
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
                    <img src={destroaoefull} />
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
                <img
                  width="400px"
                  src={TalentsImg}
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

export default Talents;
