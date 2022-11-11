import React from "react";
import LoadingBar from "../../components/loading/LoadingBar";
import "./loader.css";
// import { Spinner } from "reactstrap";

const Loader = () => (
  <div className="fallback-spinner">
    <div className="loading">
      <LoadingBar />
      {/* <Spinner color="primary" /> */}
    </div>
  </div>
);
export default Loader;
