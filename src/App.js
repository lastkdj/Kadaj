import "./App.css";
import Header from "./Header/Header";
import Banner from "./Body/Banner";
import Spec from "./Body/Spec";
import About from "./Body/About";
import VideosPOV from "./Body/VideosPOV";
import Affliction from "./Body/Affliction";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid id="Home">
      <Header />
      <Banner />
      <Spec />
      <About />
      <VideosPOV />
      <Affliction />
    </Grid>
  );
}

export default App;
