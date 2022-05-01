import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import Welcome from "./Welcome";
import HeardSection from "../heard/HeardSection";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
        <HeadSection />
        <Welcome/>
      <HeardSection />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
