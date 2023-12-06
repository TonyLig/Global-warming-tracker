import { ParallaxProvider } from "react-scroll-parallax";

import "./App.css";
import Banner from "./assets/componets/Banner";
import Card from "./assets/componets/Card";
import temperature from ".//assets/img/high-temperatures.jpg";

export default function App() {
  return (
    <>
      <ParallaxProvider>
        <Banner />
        <div
          id="card-section"
          className="flex flex-col items-center gap-4 pt-2 "
        >
          <Card
            pageLink=""
            imageCard={temperature}
            titleCard="TEMPERATURE"
            accessibilityDescription="image of the sun"
          />
          <Card
            pageLink=""
            imageCard={temperature}
            titleCard="TEMPERATURE"
            accessibilityDescription="image of the sun"
          />
          <Card
            pageLink=""
            imageCard={temperature}
            titleCard="TEMPERATURE"
            accessibilityDescription="image of the sun"
          />
          <Card
            pageLink=""
            imageCard={temperature}
            titleCard="TEMPERATURE"
            accessibilityDescription="image of the sun"
          />
          <Card
            pageLink=""
            imageCard={temperature}
            titleCard="TEMPERATURE"
            accessibilityDescription="image of the sun"
          />
        </div>
      </ParallaxProvider>
    </>
  );
}
