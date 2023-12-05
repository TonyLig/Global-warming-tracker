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
        <div className="h-screen grid grid-cols-4 gap-4" id="card-section">
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
