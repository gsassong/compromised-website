import { useState, useEffect } from "react";
import ReactGA  from 'react-ga';
// import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Platforms } from "./components/platforms";
// import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const TRACKING_ID = "UA-217892910-1";
  if(document.location.hostname !== 'localhost') {
    console.log("sending google analytics", document.location.hostname);
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      {/* <Navigation data={landingPageData.Navigation} /> */}
      <Header data={landingPageData.Header} />
      <Platforms data={landingPageData.Platforms} />
      {/* <About data={landingPageData.About} /> */}
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/>
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
