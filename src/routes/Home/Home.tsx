import React, { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import Banner from "components/Banner/Banner";
import Card from "components/Card/Card";

// Import images
import temperature from "assets/img/high-temperatures.jpg";
import carbon from "assets/img/co2.jpg";
import ice from "assets/img/ice.jpg";
import methane from "assets/img/methane.jpg";
import nitrous from "assets/img/nitrous.jpg";
import home from "assets/img/home.jpg";
import styles from "./home.module.css";

export default function Home() {
  const [clickedElementId, setClickedElementId] = useState(null);

  // Effect to scroll to banner section when clicked
  useEffect(() => {
    if (clickedElementId === "banner-section") {
      const element = document.getElementById(clickedElementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setClickedElementId(null);
      }
    }
  }, [clickedElementId]);

  return (
    <>
      <ParallaxProvider>
        <div id="banner-section">
          <Banner />
        </div>
        <div id="card-section" className={styles.container}>
          <Card
            pageLink="temperature"
            imageCard={temperature}
            titleCard="TEMPERATURE"
            accessibilityDescription="image of the sun"
          />
          <Card
            pageLink="co2"
            imageCard={carbon}
            titleCard="Co2"
            accessibilityDescription="clouds of smog"
          />
          <Card
            pageLink="nitrous"
            imageCard={nitrous}
            titleCard="NITROUS"
            accessibilityDescription="nitrous cylinder"
          />
          <Card
            pageLink="methane"
            imageCard={methane}
            titleCard="METHANE"
            accessibilityDescription="flame"
          />
          <Card
            pageLink="arctic"
            imageCard={ice}
            titleCard="ICE"
            accessibilityDescription="ice cubes"
          />
          <Card
            pageLink="/"
            imageCard={home}
            titleCard="HOME"
            accessibilityDescription="picture of a doormat"
            onClick={() => setClickedElementId("banner-section")}
          />
        </div>
      </ParallaxProvider>
    </>
  );
}
