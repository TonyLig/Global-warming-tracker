import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

import starrySky from "../img/starry-sky.jpg";
import earth from "../img/earth.png";
import DoubleArrow from "./DoubleArrow";

export default function Banner() {
  const background: BannerLayer = {
    image: `${starrySky}`,
    translateY: [0, 50],
    opacity: [1, 0.7],
    scale: [1.1, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.2, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-sans font-light text-[50px] mt-36 text-white md:text-[80px] md:mt-28 ">
          Global Warming
        </h1>
        <DoubleArrow />
      </div>
    ),
  };

  const foreground: BannerLayer = {
    image: `${earth}`,
    translateY: [0, 15],
    scale: [1, 1.5, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset-0 bg-gradient-to-b from-transparent via-transparent via-70% to-white h-screen" />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, foreground, gradientOverlay, headline]}
      className="h-screen"
    />
  );
}
