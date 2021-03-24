import Layout from "../../Components/Layout";
import USPs from "../../Components/USPs";

function PerformanceDashboard(props) {
  return (
    <>
      <Layout>
        <section className="heading">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6" id="welcome">
                <p>Welcome to Kgaswe Online Reporting System Dashbord</p>
              </div>
              <div className="col-md-3 user">
                <div className="navbar-headera">
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
              </div>
            </div>
          </div>
        </section>
        <div className="px-3">
          <div className="row">
            <USPs
              icon={true}
              iconName="fa fa-graduation-cap"
              text="Perfomace List"
              href="/performance-list"
            />
            <USPs
              icon={true}
              iconName="fa fa-pie-chart"
              text="Performace By Subject"
              href="/performance-subject"
            />
            {/* <USPs
              icon={true}
              iconName="fa fa-pie-chart"
              text="Performace By Grade"
              href="/performance-grade"
            /> */}
            <USPs
              icon={true}
              iconName="fa fa-hand-o-up"
              text="Top Performers"
              href="/performance-top"
            />
            <USPs
              icon={true}
              iconName="fa fa-hand-o-down"
              text="Least Performers"
              href="/performance-least"
            />

            <div className="col-md-12" id="calendar">
              <h2>YEAR CALENDER</h2>
              <div className="calendar"></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default PerformanceDashboard;
