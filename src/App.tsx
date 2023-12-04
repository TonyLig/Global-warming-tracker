import "./App.css";
import Banner from "./assets/componets/Banner";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App() {
  return (
    <>
      <ParallaxProvider>
        <Banner />
        <div className="h-screen flex items-center justify-center">
          <h1 className="headline gray">Goodnight.</h1>
        </div>
      </ParallaxProvider>
    </>
  );
}
