import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Circles } from "react-loader-spinner";

// Importing selectors and asynchronous action
import * as apiDataSelectors from "features/data/selectors";
import { requestData } from "features/data/asyncActions";

// Importing route components
import Home from "routes/Home";
import Temperature from "routes/Temperature";
import Co2 from "routes/CO2";
import Methane from "routes/Methane";
import Nitrous from "routes/Nitrous";
import Arctic from "routes/Arctic";
import NavBar from "components/NavBar";

// Component to wrap routes with a navigation bar
function WithNavbar() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default function App() {
  const dispatch = useDispatch();
  const error = useSelector(apiDataSelectors.getError);
  const pending = useSelector(apiDataSelectors.getPending);

  // Fetching data when the component mounts
  useEffect(() => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
    dispatch(requestData());
  }, []);

  // Display loading state if data is pending
  if (pending) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Circles
          height="80"
          width="80"
          color="#0067A3"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  } else if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-4xl"> Error! {error}</h1>
      </div>
    );
  }

  // Main application routes
  return (
    <>
      <Helmet htmlAttributes>
        <title>Global Warming</title>
        <meta name="golabal warming" content="global warming" />
        <link rel="icon" href="/favicon.ico"></link>
      </Helmet>

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route element={<WithNavbar />}>
            <Route path="temperature" element={<Temperature />} />
            <Route path="co2" element={<Co2 />} />
            <Route path="methane" element={<Methane />} />
            <Route path="nitrous" element={<Nitrous />} />
            <Route path="arctic" element={<Arctic />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <div className="flex h-screen items-center justify-center">
              <h1 className="text-4xl">Not Found</h1>
            </div>
          }
        />
      </Routes>
    </>
  );
}
