import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import wowBack from "../Img/wowback.jpg";

const SimpleMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClick = () => {
    window.open("https://www.youtube.com/user/darkkadaj11");
  };
  return (
    <Grid>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon style={{ color: "white", fontSize: "2em" }} />
      </IconButton>
      <Menu
        style={{ zIndex: "1001" }}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={props.scrolled ? { top: "70px" } : null}
        MenuListProps={{
          style: {
            backgroundImage: `url(${wowBack})`,
            color: "white",
            padding: "0px",
          },
        }}
        PaperProps={{
          style: { backgroundColor: "rgb(28,28,28)", left: "250px" },
        }}
      >
        <Grid container direction="column">
          <MenuItem onClick={handleClose}>
            {" "}
            <Grid container justify="center" item>
              Specs{" "}
            </Grid>
          </MenuItem>
          <Divider
            component="li"
            style={{ boxShadow: "inset 0 0 0 1px #504137" }}
          />

          <MenuItem onClick={handleClose}>
            {" "}
            <Grid container justify="center" item>
              About{" "}
            </Grid>
          </MenuItem>
          <Divider
            component="li"
            style={{ boxShadow: "inset 0 0 0 1px #504137" }}
          />

          <MenuItem onClick={handleClose}>
            {" "}
            <Grid container justify="center" item>
              Raid{" "}
            </Grid>
          </MenuItem>
          <Divider
            component="li"
            style={{ boxShadow: "inset 0 0 0 1px #504137" }}
          />

          <MenuItem onClick={handleClose}>
            {" "}
            <Grid container justify="center" item>
              Guides{" "}
            </Grid>
          </MenuItem>
          <Divider
            component="li"
            style={{ boxShadow: "inset 0 0 0 1px #504137" }}
          />

          <MenuItem onClick={handleClose}>
            {" "}
            <Grid container justify="center" item>
              <Button
                stlye={{
                  backgroundColor: "#CF0404",
                  borderRadius: "9px",
                }}
                variant="contained"
                color="secondary"
                onClick={onClick}
              >
                Youtube
              </Button>{" "}
            </Grid>
          </MenuItem>
        </Grid>
      </Menu>
    </Grid>
  );
};

export default SimpleMenu;
