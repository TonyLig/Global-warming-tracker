import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import Banner from "components/Banner";
import Card from "components/Card";

import temperature from "assets/img/high-temperatures.jpg";
import carbon from "assets/img/co2.jpg";
import ice from "assets/img/ice.jpg";
import methane from "assets/img/methane.jpg";
import nitrous from "assets/img/nitrous.jpg";
import home from "assets/img/home.jpg";

export default function Home() {
  return (
    <>
      <ParallaxProvider>
        <div id="banner-section">
          <Banner />
        </div>
        <div
          id="card-section"
          className=" flex h-full flex-col
           items-center gap-4 pt-1 md:grid md:h-screen md:grid-flow-row-dense md:grid-cols-2 lg:grid lg:h-screen lg:grid-flow-row-dense lg:grid-cols-3"
        >
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
          />
        </div>
      </ParallaxProvider>
    </>
  );
}
