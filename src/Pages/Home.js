import Layout from "./../Components/Layout";
import USPs from "./../Components/USPs";
function Home(props) {
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
              iconName="fa fa-user-plus"
              text="Create Student Profile List"
              href="#"
            />
            <USPs
              icon={true}
              iconName="fa fa-bank"
              text="All Students in School"
              href="#"
            />
            <USPs
              icon={true}
              iconName="fa fa-graduation-cap"
              text="Classes in School"
              href="#"
            />
            <USPs
              icon={true}
              iconName="fa fa-users"
              text="All Teachers Profile List"
              href="#"
            />
            <USPs
              icon={true}
              iconName="fa fa-pie-chart"
              text="Overall School Performance"
              href="#"
            />
            <USPs
              icon={true}
              iconName="fa fa-hand-o-up"
              text="Top Performer Student"
              href="#"
            />
            <USPs
              icon={true}
              iconName="fa fa-hand-o-down"
              text="List Performing Transcprits Student"
              href="#"
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

export default Home;
