import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import wow from "../../Img/wowback.jpg";
import SoulRot from "../../Img/aff/soulrot.png";
import Demonic from "../../Img/aff/demonic.png";
import Afflogo from "../../Img/aff.png";
import Skull from "../../Img/skull.png";
import "../guideStyles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    justifyContent: "center",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),

    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },

  accordion: {
    backgroundImage: `url(${wow})`,
  },

  accordionsummary: {
    boxShadow: "inset 0 0 0 1px #504137",
    color: "white",
  },

  accordiondetails: {
    boxShadow: "inset 0 0 0 1px #504137",
    color: "white",
  },

  accordiontext: {
    fontSize: "1em",
    alignSelf: "center",
    color: "white",
  },

  accordiongrid: {
    paddingLeft: "30%",
  },

  accordionarrow: {
    color: "white",
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.7,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // fade in observed elements that are in view
          entry.target.classList.replace("fadeOut", "fadeInLeftFast");
        } else {
          // fade out observed elements that are not in view
          return;
        }
      });
    };

    const fadeElms = document.querySelectorAll(".menu");

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElms.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Grid container xs={12} className={classes.root} class="menu fadeOut">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.accordionarrow} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.accordionsummary}
        >
          <Grid container className={classes.accordiongrid}>
            <Avatar
              style={{
                backgroundColor: "darkblue",
                boxShadow: "inset 10px 10px 5px 0px rgba(0,0,0,0.27)",
                margin: "0px 10px",
              }}
            >
              {" "}
              <LocalHospitalIcon />
            </Avatar>
            <Typography className={classes.accordiontext}> Stats</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails className={classes.accordiondetails}>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.accordionarrow} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className={classes.accordionsummary}
        >
          <Grid container className={classes.accordiongrid}>
            <Avatar
              src={Demonic}
              style={{
                boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                margin: "0px 10px",
              }}
            ></Avatar>
            <Typography className={classes.accordiontext}>
              Legendaries
            </Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails className={classes.accordiondetails}>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.accordionarrow} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className={classes.accordionsummary}
        >
          <Grid container className={classes.accordiongrid}>
            <Avatar
              src={SoulRot}
              style={{
                boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                margin: "0px 10px",
              }}
            ></Avatar>
            <Typography className={classes.accordiontext}>Covenant</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails className={classes.accordiondetails}>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.accordionarrow} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          className={classes.accordionsummary}
        >
          <Grid container className={classes.accordiongrid}>
            <Avatar
              src={Afflogo}
              style={{
                boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                margin: "0px 10px",
              }}
            ></Avatar>
            <Typography className={classes.accordiontext}>Talents</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails className={classes.accordiondetails}>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.accordionarrow} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          className={classes.accordionsummary}
        >
          <Grid container className={classes.accordiongrid}>
            <Avatar
              src={Skull}
              style={{
                boxShadow: " 10px 10px 13px 1px rgba(0,0,0,0.17)",
                margin: "0px 10px",
              }}
            ></Avatar>
            <Typography className={classes.accordiontext}>
              Raid Setup
            </Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails className={classes.accordiondetails}>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
