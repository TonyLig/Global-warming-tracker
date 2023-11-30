import "./App.css";
import Banner from "./assets/componets/Banner";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App() {
  return (
    <>
      <ParallaxProvider>
        <Banner />
        <div className="center h-full">
          <h1 className="headline gray">Goodnight.</h1>
        </div>
      </ParallaxProvider>
    </>
  );
}
