import * as React from "react";
import "./Topbar.scss";
// import SearchIcon
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div class="topbar">
      <nav
        className="navbar navbar-expand-lg navbar-dark nav"
        style={{ backgroundColor: "#12b8e1" }}
      >
        <img src="https://picsum.photos/30" className="logoImg" alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Link className="Link" to="/">
              <li className="nav-item active topList">
                <i className="nav-link topListLink">
                  HOME <span className="sr-only">(current)</span>
                </i>
              </li>
            </Link>
            <Link className="Link" to="/service">
              <li className="nav-item topList">
                <i className="nav-link topListLink">
                  SERVICE <span className="sr-only"></span>
                </i>
              </li>
            </Link>
            <Link className="Link" to="/about">
              <li className="nav-item topList">
                <i className="nav-link topListLink">
                  ABOUT <span className="sr-only"></span>
                </i>
              </li>
            </Link>
            <Link className="Link" to="/contact">
              <li className="nav-item topList">
                <i className="nav-link topListLink">
                  CONTACT <span className="sr-only"></span>
                </i>
              </li>
            </Link>
            <li className="nav-item dropdown topList">
              <i
                className="nav-link dropdown-toggle topListLink"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                PAGES
              </i>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <i className="dropdown-item">GALLERY</i>
                <i className="dropdown-item">VIDEO</i>
                <div className="dropdown-divider" />
                <i className="dropdown-item">ADS</i>
              </div>
            </li>
          </ul>
          <Link className="Link" to="/contact">
            <li className="nav-item topList loginList">
              <i className="nav-link topListLink">
                LOGIN / SIGNUP <span className="sr-only"></span>
              </i>
            </li>
          </Link>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2 searchInput"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn searchBtn" type="submit">
              <SearchIcon className="searchIcon" />
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
export default Topbar;
