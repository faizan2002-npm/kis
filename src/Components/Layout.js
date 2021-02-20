import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
function Layout({ children }) {
  return (
    <>
      <Header />
      <section className="dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 navigation">
              <Menu />
            </div>
            <div className="col-md-9 px-0" id="main_dashboard">
              {children}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Layout;
