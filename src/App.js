import "./App.css";
import Header from "./Header/Header";
import Banner from "./Body/Banner";
import Spec from "./Body/Spec";
import About from "./Body/About";
import VideosPOV from "./Body/VideosPOV";
import Guides from "./Body/Guides";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid id="Home">
      <Header />
      <Banner />
      <Spec />
      <About />
      <VideosPOV />
      <Guides />
    </Grid>
  );
}

export default App;
