// @flow
import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import './styles.scss';
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

export default Dashboard;
