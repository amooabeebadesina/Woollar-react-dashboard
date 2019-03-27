// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import './styles.scss';
import { logout } from '../../../../actions/user';

type SideLinks = {
  to: string,
  name: string,
  icon: string,
};

type Props = {
  logout: () => {}
}

const links = [
  { to: '/dashboard/home', name: 'Dashboard', icon: 'fa fa-home' },
  { to: '/dashboard/orders', name: 'Orders', icon: 'fa fa-truck' },
  { to: '/dashboard/products', name: 'Products', icon: 'fa fa-shopping-cart' },
  { to: '/dashboard/categories', name: 'Categories', icon: 'fa fa-file-text-o' },
  { to: '/dashboard/transactions', name: 'Transactions', icon: 'fa fa-line-chart' },
  { to: '/dashboard/shops', name: 'Shops', icon: 'fa fa-home' },
  { to: '/dashboard/users', name: 'Users', icon: 'fa fa-user' },
  { to: '/dashboard/locations', name: 'Locations', icon: 'fa fa-globe' },
  { to: '/dashboard/shoppers', name: 'Shoppers', icon: 'fa fa-money' },
  { to: '/dashboard/firebase-tokens', name: 'Firebase Tokens', icon: 'fa fa-firefox' },
];

const SidebarLink = (props: SideLinks) => (
  <div className="sidebar__link">
    <NavLink to={props.to} activeClassName="active">
      <i className={props.icon} />
      {props.name}
    </NavLink>
  </div>
);

class Sidebar extends PureComponent<Props> {
  logout = () => {
    this.props.logout();
  };

  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar__logo">
          Woollar
        </div>
        <div className="sidebar-links">
          {
            links.map(link => (
              <SidebarLink to={link.to} name={link.name} icon={link.icon} key={link.name.toLowerCase()} />
            ))
          }
        </div>
        <div className="sidebar-logout">
          <Link to="#" onClick={this.logout}>
            Logout
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => (dispatch(logout())),
});

export default connect(null, mapDispatchToProps)(Sidebar);
