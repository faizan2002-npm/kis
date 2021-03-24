import Layout from "../../Components/Layout";
import USPs from "../../Components/USPs";

function ReportsDashboard(props) {
  return (
    <>
      <Layout>
        <section className="heading">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6" id="welcome">
                <p>Welcome to Kgaswe Online Reporting Teacher Dashbord</p>
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
              iconName="fa fa-copy"
              text="Assignments Reports<br> by Terms"
              href="/reports/assignments-reports-by-terms"
            />
            <USPs
              icon={true}
              iconName="fa fa-copy"
              text="Assignments Reports<br> by Weeks"
              href="/reports/assignments-reports-by-weeks"
            />
            <USPs
              icon={true}
              iconName="fa fa-file-text"
              text="Tests Reports<br> by Terms"
              href="/reports/tests-reports-by-terms"
            />
            <USPs
              icon={true}
              iconName="fa fa-file-text"
              text="Tests Reports<br> by Weeks"
              href="/reports/tests-reports-by-weeks"
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

export default ReportsDashboard;
