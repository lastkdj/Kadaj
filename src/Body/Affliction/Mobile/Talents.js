import React from "react";
import Paper from "@material-ui/core/Paper";
import { Grid, Slide, Typography, makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import TalentsImg from "../../../Img/aff/talents.jpg";
import st from "../../../Img/aff/st.png";
import aoe from "../../../Img/aff/aoe.png";
import wowBack from "../../../Img/wowback.jpg";

const useStyles = makeStyles((theme) => ({
  tittle: {
    fontWeight: 600,
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
    backgroundImage: `url(${wowBack})`,
  },

  infoBox: {
    fontWeight: 400,
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    textAlign: "justify",
    color: "#adb0bb",
    fontSize: "0.9em",
  },

  mobiletalents: {
    width: "inherit",
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

  return (
    <Grid>
      <Grid container>
        <Grid container justify="center" xs={12}>
          {" "}
          <Typography className={classes.tittle}>
            Best Affliction Warlock Talents
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
          <Grid item xs={12}>
            <AppBar
              position="static"
              style={{
                backgroundColor: "#60338A",
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
                <img alt="" src={st} className={classes.mobiletalents} />
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container justify="space-around">
                <img alt="" src={aoe} className={classes.mobiletalents} />
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              {" "}
              <Grid container justify="space-around">
                <img alt="" src={st} className={classes.mobiletalents} />
              </Grid>
            </TabPanel>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Talents;
