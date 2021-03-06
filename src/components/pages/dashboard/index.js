// @flow
import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Sidebar from './sidebar';
import './styles.scss';
// $FlowFixMe
import Routes from './routes';

const Dashboard = (props: any) => (
  <div className="dashboard">
    <div className="dashboard__sidebar">
      <Sidebar />
    </div>
    <div className="dashboard__body">
      <Header />

      <div className="dashboard__content">
        <Routes {...props} />
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Dashboard);
