import React, { useState } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import ShriekwingComponent from "./RaidBosses/Shriekwing";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import GeneralsComponent from "./RaidBosses/Generals";

const useStyles = makeStyles((theme) => ({
  tittle: {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1em",
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

  root: {
    flexGrow: 1,
    width: "100%",
    maxWidth: "300px",
    background: "transparent",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
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
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const Raid = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const nextTab = () => {
    if (value === 1) {
      return;
    }
    setValue(value + 1);
  };

  const prevTab = () => {
    if (value === 0) {
      return;
    }
    setValue(value - 1);
  };

  const classes = useStyles();

  console.log(value);
  return (
    <Grid container style={{ padding: "10px 10px 10px 10px" }}>
      <Grid container justify="center" xs={12}>
        {" "}
        <Typography className={classes.tittle}>
          Best Destruction overall raid Setup
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
        }}
      >
        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ArrowBackIosIcon
            onClick={prevTab}
            style={{
              color: "white",
              position: "absolute",
              left: "5px",
              marginTop: "10px",
            }}
          />

          <div className={classes.root}>
            <AppBar
              position="static"
              color="default"
              style={{ background: "transparent", color: "white" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "rgb(245, 137, 0)",
                  },
                }}
                style={{ color: "white" }}
              >
                <Tab label="ST" {...a11yProps(0)} style={{ width: "100%" }} />
                <Tab
                  label="AOE/Cleave"
                  {...a11yProps(1)}
                  style={{ width: "100%" }}
                />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <ShriekwingComponent />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <GeneralsComponent />
            </TabPanel>
          </div>

          <ArrowForwardIosIcon
            onClick={nextTab}
            style={{
              color: "white",
              position: "absolute",
              right: "5px",
              marginTop: "10px",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Raid;
