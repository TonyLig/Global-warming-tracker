import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

// Importing assets and components
import starrySky from "assets/img/starry-sky.jpg";
import earth from "assets/img/earth.png";
import DoubleArrow from "./DoubleArrow";

// Banner component displaying a parallax banner
export default function Banner() {
  // Configuration for the background layer
  const background: BannerLayer = {
    image: `${starrySky}`,
    translateY: [0, 50],
    opacity: [1, 0.7],
    scale: [1.1, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  // Configuration for the headline layer
  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.2, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-36 font-sans text-[50px] font-light text-white md:mt-28 md:text-[80px] ">
          Global Warming
        </h1>
        <DoubleArrow />
      </div>
    ),
  };

  // Configuration for the foreground layer
  const foreground: BannerLayer = {
    image: `${earth}`,
    translateY: [0, 15],
    scale: [1, 1.5, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  // Configuration for the gradient overlay layer
  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset-0 h-screen bg-gradient-to-b from-transparent via-transparent via-70% to-white" />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, foreground, gradientOverlay, headline]}
      className="h-screen"
    />
  );
}
