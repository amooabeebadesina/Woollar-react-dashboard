// @flow
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { dashboardActions } from '../../../../actions';
import './styles.scss';


type Props = {
  dashboardActions: Object<Function>
}

class Home extends PureComponent<Props> {
  componentDidMount() {
    this.props.dashboardActions.getDashboardData();
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
  dashboardActions: bindActionCreators(dashboardActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
