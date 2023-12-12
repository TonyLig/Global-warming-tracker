import { ParallaxProvider } from "react-scroll-parallax";

import "./App.css";
import Banner from "./assets/componets/Banner";
import Card from "./assets/componets/Card";
import temperature from ".//assets/img/high-temperatures.jpg";
import co2 from ".//assets/img/co2.jpg";
import ice from ".//assets/img/ice.jpg";
import methane from ".//assets/img/methane.jpg";
import nitrous from ".//assets/img/nitrous.jpg";
import home from ".//assets/img/home.jpg";

export default function App() {
  return (
    <>
      <ParallaxProvider>
        <div id="banner-section">
          <Banner />
        </div>
        <div
          id="card-section"
          className=" flex h-full flex-col
           items-center gap-4 pt-1 md:grid md:h-screen md:grid-flow-row-dense md:grid-cols-2 md:p-20 lg:grid lg:h-screen lg:grid-flow-row-dense lg:grid-cols-3 lg:p-20"
        >
          <Card
            pageLink=""
            imageCard={temperature}
            titleCard="TEMPERATURE"
            accessibilityDescription="image of the sun"
          />
          <Card
            pageLink=""
            imageCard={co2}
            titleCard="Co2"
            accessibilityDescription="clouds of smog"
          />
          <Card
            pageLink=""
            imageCard={nitrous}
            titleCard="NITROUS"
            accessibilityDescription="nitrous cylinder"
          />
          <Card
            pageLink=""
            imageCard={methane}
            titleCard="METHANE"
            accessibilityDescription="flame"
          />
          <Card
            pageLink=""
            imageCard={ice}
            titleCard="ICE"
            accessibilityDescription="ice cubes"
          />
          <Card
            pageLink="#banner-section"
            imageCard={home}
            titleCard="HOME"
            accessibilityDescription="picture of a doormat"
          />
        </div>
      </ParallaxProvider>
    </>
  );
}
