import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Styles/Header";
import Button from "@material-ui/core/Button";

const Header = () => {
  const classes = useStyles();

  const onClick = () => {
    window.open("https://www.youtube.com/user/darkkadaj11");
  };

  return (
    <Grid container xs={12} className={classes.background}>
      <Grid container item xs={12} style={{ margin: "0px 450px" }}>
        <Grid container item xs={3} className={classes.menulist}>
          <Grid container item xs={2}>
            <Typography className={classes.navbarLogo}>KADAJ</Typography>
          </Grid>
        </Grid>
        <Grid container item xs={9} style={{ justifyContent: "flex-end" }}>
          <ul className={classes.ul}>
            <li className={classes.li}>
              <Typography className={classes.headerfont}>Specs</Typography>
            </li>
            <li className={classes.li}>
              <Typography className={classes.headerfont}>Details</Typography>
            </li>
            <li className={classes.li}>
              <Typography className={classes.headerfont}>Contact</Typography>
            </li>
            <li className={classes.li}>
              <Typography className={classes.headerfont}>FAQ</Typography>
            </li>
            <li className={classes.li}>
              <Typography className={classes.headerfont}>Other</Typography>
            </li>
            <li className={classes.li}>
              <Typography className={classes.headerfont}>Info</Typography>
            </li>
          </ul>
          <Grid item>
            <Button
              stlye={{ margin: "0px 20px" }}
              variant="contained"
              color="primary"
              onClick={onClick}
              style={{
                backgroundColor: "#CF0404",
                borderRadius: "9px",
                "&:hover": {
                  backgroundColor: "#6461B9",
                },
              }}
            >
              Youtube
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
