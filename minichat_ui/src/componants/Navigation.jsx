import React from "react";
import { connect } from "react-redux";

const Navigation = (props) => {
  const { isDarkMode } = props;

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ height: "100%", padding: "0px 26px", alignItems: "baseline" }}
    >
      <a className="navbar-brand" href="#">
        <p style={{ color: isDarkMode ? "#fff" : "#333" }}> ChatUI Box</p>
      </a>
      <button
        id="toggleButton"
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span
          className="navbar-toggler-icon"
          style={{ backgroundColor: isDarkMode ? "#fff" : "" }}
        ></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-between
"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a
              className="nav-link"
              href="#"
              style={{ color: isDarkMode ? "#fff" : "#333" }}
            >
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{
                color: isDarkMode ? "#fff" : "#333",
              }}
            >
              Dropdown
            </a>
          </li>
        </ul>
        <div className="d-flex" style={{ columnGap: "27px" }}>
          <button
            style={{
              padding: " 0px 10px",
              backgroundColor: isDarkMode ? "#fff" : "#333",
              color: isDarkMode ? "#333" : "#fff",
            }}
            onClick={() => {
              props.onToggleButtonClick();
            }}
          >
            {isDarkMode ? "Light" : "Dark"}
          </button>
          <button
            className="btn btn-outline-danger my-2 my-sm-0"
            type="submit"
            onClick={() => {
              props.onLogOutButtonClick();
            }}
          >
            LogOut
          </button>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isDarkMode: state.theme.isDarkMode,
});

export default connect(mapStateToProps)(Navigation);
