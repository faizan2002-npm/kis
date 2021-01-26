import Layout from "./../Components/Layout";
import USPs from "./../Components/USPs";
function Home(props) {
  return (
    <>
      <Layout>
        <section class="heading">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6" id="welcome">
                <p>Welcome to Kgaswe Online Reporting System Dashbord</p>
              </div>
              <div class="col-md-3 user">
                <div class="navbar-headera">
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
              </div>
            </div>
          </div>
        </section>
        <div class="row">
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

          <div class="col-md-12" id="calendar">
            <h2>YEAR CALENDER</h2>
            <div class="calendar"></div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
