// @flow
import React from 'react';
import './styles.scss';

const Loader = () => (
  <div className="loader">
    <div className="loader__icon">
      <Loader
        type="Puff"
        color="#00BFFF"
        height="100"
        width="100"
      />
    </div>
  </div>
);

export default Loader;
