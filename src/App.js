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

function App() {
  return (
    <Grid id="Home">
      <Grid style={{ backgroundImage: `url(${Asset})` }}>
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
