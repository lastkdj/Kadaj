import "./App.css";
import Header from "./Header/Header";
import Banner from "./Body/Banner";
import Spec from "./Body/Spec";
import About from "./Body/About";
import VideosPOV from "./Body/VideosPOV";
import Guides from "./Body/Guides";
import { Grid } from "@material-ui/core";
import Addons from "./Body/Addons";
import Asset from "./Img/bannerwall.jpg";
import { useMediaQuery } from "react-responsive";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: null,

    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${Asset})`,
      backgroundPosition: "top",
    },

    [theme.breakpoints.up("lg")]: {

    },

    [theme.breakpoints.up("xl")]: {
  
    },
  },
}));

function App() {
  const classes = useStyles();
  const isMobile = useMediaQuery({ query: "(max-width: 375px)" });
  return (
    <Grid id="Home">
      <Grid className={classes.background}>
        <Header />
        <Banner />
      </Grid>
      <Spec />
      <About />
      <VideosPOV />
      <Guides />
      <Addons />
    </Grid>
  );
}

export default App;
