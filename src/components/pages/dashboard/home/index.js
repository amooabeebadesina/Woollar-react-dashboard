// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getDashboardData } from '../../../../actions/dashboard';
import './styles.scss';

type Props = {
  getDashboardData: () => {}
}

class Home extends PureComponent<Props> {
  componentDidMount() {
    this.props.getDashboardData();
  }

  render() {
    return (
      <div>Hello Home</div>
    );
  }
}

const mapStateToProps = state => ({
  dashboard: state.dashboard,
});

const mapDispatchToProps = dispatch => ({
  getDashboardData: () => dispatch(getDashboardData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
