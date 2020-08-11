import React from "react";
import { Link } from "react-router-dom";

// connecting to redux store
import { connect } from "react-redux";

const Header = (props) => {
  // logic for logout case show signup and login case show logout and profile tab
  const renderContent = () => {
    switch (props.user) {
      case null: // when net is slow - node url in process
        return (
          <li>
            <a href="/">loading..</a>
          </li>
        );

      case false: // when not log in case
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );

      default:
        // log in case
        return (
          <React.Fragment>
            <li>
              <a href="/api/logout">Log out</a>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </React.Fragment>
        );
    }
  };
  return (
    <nav>
      <div className="nav-wrapper  blue lighten-4">
        <Link to={props.user ? "/profile" : "/"} className="brand-logo">
          React JS
        </Link>
        <ul id="nav-mobile" className="right">
          {renderContent()}
          {/* <li>
            <a href="/auth/google">Login with Google</a>
          </li>
          <li>
            <Link to="/api/logout">Log out</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth, // this auth is in store (see client/index.js or chrome in chrome dev tools)
  };
};
export default connect(mapStateToProps)(Header);
