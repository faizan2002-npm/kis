import SiteSetting from ".././Constants/SiteSetting";
function Header(props) {
  return (
    <>
      <header class="mobile-view">
        <div id="sticker" class="header-area wow fadeInUp animate">
          <div class="container logo-area">
            <div class="row">
              <div
                class="col-md-7 col-sm-12 menu-area hidden-md"
                id="mobile-menu"
              >
                <div class="containera">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="notifications-area" id="mobile">
                        <i class="fa fa-bell-o" id="notifications"></i>
                        <i class="fa fa-envelope-o" id="messages"></i>
                      </div>

                      <nav class="navbar navbar-default">
                        <div class="navbar-header">
                          <button
                            type="button"
                            class="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target=".bs-example-navbar-collapse-1"
                            aria-expanded="false"
                          >
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                          </button>
                        </div>
                        <div
                          class="collapse navbar-collapse main-menu bs-example-navbar-collapse-1"
                          id="navbar-example"
                        >
                          <ul class="nav navbar-nav">
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-laptop"></i> Dashboard
                              </a>
                            </li>
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-calendar"></i> Calendar
                              </a>
                            </li>
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-graduation-cap"></i> Subjects
                              </a>
                            </li>
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-users"></i> Teachers
                              </a>
                            </li>
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-address-card"></i> Students
                              </a>
                            </li>
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-exchange"></i> Enrollment
                              </a>
                            </li>
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-file-text"></i> Reports
                              </a>
                            </li>
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-copy"></i> Transcripts
                              </a>
                            </li>
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-area-chart"></i> Statistics
                              </a>
                            </li>
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-cog"></i> Configuration
                              </a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2" id="logo">
                <a href="">
                  <img
                    src={SiteSetting.SiteSetting[0].Logo}
                    alt="Global Expo"
                  />
                </a>
              </div>
              <div class="col-md-12 mobile" id="welcome">
                <p>Welcome to Kgaswe Online Reporting System Dashbord</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header class="desktop">
        <div id="sticker" class="header-area wow fadeInUp animate">
          <div class="container logo-area">
            <div class="row">
              <div class="col-md-2" id="logo">
                <a href="">
                  <img
                    src={SiteSetting.SiteSetting[0].Logo}
                    alt="Global Expo"
                  />
                </a>
              </div>
              <div class="col-md-7 col-sm-12 menu-area hidden-md">
                <div class="containera">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="search-area">
                        <form class="form-inline search">
                          <i class="fa fa-search" aria-hidden="true"></i>
                          <input
                            class="form-control form-control-sm ml-3 w-75"
                            type="text"
                            placeholder=""
                            aria-label="Search"
                          />
                          <select>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                          </select>
                          <button class="btn" type="submit" target="">
                            SEARCH
                          </button>
                        </form>
                      </div>
                      <div class="notifications-area" id="desktop">
                        <i class="fa fa-bell-o" id="notifications"></i>
                        <i class="fa fa-envelope-o" id="messages"></i>
                      </div>

                      <nav class="navbar navbar-default">
                        <div class="navbar-header">
                          <button
                            type="button"
                            class="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target=".bs-example-navbar-collapse-1"
                            aria-expanded="false"
                          >
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                          </button>
                        </div>
                        <div
                          class="collapse navbar-collapse main-menu bs-example-navbar-collapse-1"
                          id="navbar-example"
                        >
                          <ul class="nav navbar-nav">
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-laptop"></i> Dashboard
                              </a>
                            </li>
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-calendar"></i> Calendar
                              </a>
                            </li>
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-graduation-cap"></i> Subjects
                              </a>
                            </li>
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-users"></i> Teachers
                              </a>
                            </li>
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-address-card"></i> Students
                              </a>
                            </li>
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-exchange"></i> Enrollment
                              </a>
                            </li>
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-file-text"></i> Reports
                              </a>
                            </li>
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-copy"></i> Transcripts
                              </a>
                            </li>
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-area-chart"></i> Statistics
                              </a>
                            </li>
                            <li>
                              <a class="page-scroll" href="#">
                                <i class="fa fa-cog"></i> Configuration
                              </a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 user">
                <p>
                  Raymond Doherty <i class="fa fa-user-circle-o"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
