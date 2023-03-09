/**
 * @format
 * @author Ankush Chavan
 * @description Here we are combining all our components.
 */

import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Movies from "./components/Movies";
import { useDispatch } from "react-redux";
import { getMovies } from "./redux/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  });

  return (
    <React.Fragment>
      <Header />
      <Movies />
      <Footer />
    </React.Fragment>
  );
}

export default App;
