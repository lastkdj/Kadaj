import "./App.css";
import Header from "./Header/Header";
import Banner from "./Body/Banner";
import Spec from "./Body/Spec";
import About from "./Body/About";
import VideosPOV from "./Body/VideosPOV";
import Guides from "./Body/Guides";
import { Grid } from "@material-ui/core";
import Addons from "./Body/Addons";
import Asset from "./Img/wall2.jpg";
import { makeStyles } from "@material-ui/core";
import ScrollToTop from "./Body/ScrollToTop";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${Asset})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: { backgroundPosition: "center" },

    [theme.breakpoints.up("xl")]: { backgroundPosition: "top" },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Grid id="Home">
      <ScrollToTop />
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
