import React from "react";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import * as apiDataSelectors from "features/data/selectors";
import { requestData } from "features/data/asyncActions";
import Home from "routes/Home";
import Temperature from "routes/Temperature";
import Co2 from "routes/CO2";
import Methane from "routes/Methane";

export default function App() {
  const dispatch = useDispatch();
  const error = useSelector(apiDataSelectors.getError);
  const pending = useSelector(apiDataSelectors.getPending);

  useEffect(() => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
    dispatch(requestData());
  }, []);

  if (pending) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error! {error}</div>;
  }

  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/temperature" element={<Temperature />} />
      <Route path="/co2" element={<Co2 />} />
      <Route path="/methane" element={<Methane />} />
      {/* <Route path="/nitrous" component={Nitrous} />
      <Route path="/arctic" component={Ice} /> */}
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}
