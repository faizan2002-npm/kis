import SiteSetting from ".././Constants/SiteSetting";
import { reactLocalStorage } from "reactjs-localstorage";
import { useHistory } from "react-router-dom";

function Header(props) {
  const history = useHistory();
  return (
    <>
      <header className="mobile-view">
        <div id="sticker" className="header-area wow fadeInUp animate">
          <div className="container logo-area">
            <div className="row">
              <div
                className="col-md-7 col-sm-12 menu-area hidden-md"
                id="mobile-menu"
              >
                <div className="containera">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="notifications-area" id="mobile">
                        <i className="fa fa-bell-o" id="notifications"></i>
                        <i className="fa fa-envelope-o" id="messages"></i>
                      </div>

                      <nav className="navbar navbar-default">
                        <div className="navbar-header">
                          <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target=".bs-example-navbar-collapse-1"
                            aria-expanded="false"
                          >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                        </div>
                        <div
                          className="collapse navbar-collapse main-menu bs-example-navbar-collapse-1"
                          id="navbar-example"
                        >
                          <ul className="nav navbar-nav">
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-laptop"></i> Dashboard
                              </a>
                            </li>
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-calendar"></i> Calendar
                              </a>
                            </li>
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-graduation-cap"></i>{" "}
                                Subjects
                              </a>
                            </li>
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-users"></i> Teachers
                              </a>
                            </li>
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-address-card"></i> Students
                              </a>
                            </li>
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-exchange"></i> Enrollment
                              </a>
                            </li>
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-file-text"></i> Reports
                              </a>
                            </li>
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-copy"></i> Transcripts
                              </a>
                            </li>
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-area-chart"></i> Statistics
                              </a>
                            </li>
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-cog"></i> Configuration
                              </a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2" id="logo">
                <a href="">
                  <img
                    src={SiteSetting.SiteSetting[0].Logo}
                    alt="Global Expo"
                  />
                </a>
              </div>
              <div className="col-md-12 mobile" id="welcome">
                <p>Welcome to Kgaswe Online Reporting System Dashbord</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="desktop">
        <div id="sticker" className="header-area wow fadeInUp animate">
          <div className="container logo-area">
            <div className="row">
              <div className="col-md-2" id="logo">
                <a href="">
                  <img
                    src={SiteSetting.SiteSetting[0].Logo}
                    alt="Global Expo"
                  />
                </a>
              </div>
              <div className="col-md-7 col-sm-12 menu-area hidden-md">
                <div className="containera">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="search-area">
                        <form className="form-inline search">
                          <i className="fa fa-search" aria-hidden="true"></i>
                          <input
                            className="form-control form-control-sm ml-3 w-75"
                            type="text"
                            placeholder=""
                            aria-label="Search"
                          />
                          <select>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                          </select>
                          <button className="btn" type="submit" target="">
                            SEARCH
                          </button>
                        </form>
                      </div>
                      <div className="notifications-area" id="desktop">
                        <i className="fa fa-bell-o" id="notifications"></i>
                        <i className="fa fa-envelope-o" id="messages"></i>
                      </div>

                      <nav className="navbar navbar-default">
                        <div className="navbar-header">
                          <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target=".bs-example-navbar-collapse-1"
                            aria-expanded="false"
                          >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                        </div>
                        <div
                          className="collapse navbar-collapse main-menu bs-example-navbar-collapse-1"
                          id="navbar-example"
                        >
                          <ul className="nav navbar-nav">
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-laptop"></i> Dashboard
                              </a>
                            </li>
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-calendar"></i> Calendar
                              </a>
                            </li>
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-graduation-cap"></i>{" "}
                                Subjects
                              </a>
                            </li>
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-users"></i> Teachers
                              </a>
                            </li>
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-address-card"></i> Students
                              </a>
                            </li>
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-exchange"></i> Enrollment
                              </a>
                            </li>
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-file-text"></i> Reports
                              </a>
                            </li>
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-copy"></i> Transcripts
                              </a>
                            </li>
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-area-chart"></i> Statistics
                              </a>
                            </li>
                            <li>
                              <a className="page-scroll" href="#">
                                <i className="fa fa-cog"></i> Configuration
                              </a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 user">
                <p>
                  Raymond Doherty <i className="fa fa-user-circle-o"></i>
                </p>

                <button
                  onClick={() => {
                    localStorage.removeItem("TOKEN");
                    history.push("/login");
                  }}
                >
                  {" "}
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
