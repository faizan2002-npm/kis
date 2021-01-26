import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
function Layout({ children }) {
  return (
    <>
      <Header />
      <section class="dashboard">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3 navigation">
              <Menu />
            </div>
            <div class="col-md-9" id="main_dashboard">
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
