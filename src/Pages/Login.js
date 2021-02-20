import SiteSetting from ".././Constants/SiteSetting";
import Field from "./../Components/Field";
function Login(props) {
  return (
    <>
      <div id="kgaswe-login-logo" className="text-center">
        <img src={SiteSetting.SiteSetting[0].Logo} alt="Kgaswe" />
      </div>
      <div className="login-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 welcome">
              <h2>
                Welcome to
                <br />
                Kgaswe Online
                <br />
                Reporting System
              </h2>
              <p>
                Its now easy to track student progress and access their results
                by just login into the Online Reporting System
              </p>
            </div>
            <div className="col-md-6">
              <div className="card">
                <article className="card-body">
                  <form>
                    <Field
                      element="input"
                      name="username"
                      type="text"
                      placeholder="Username"
                      className=""
                      icon={true}
                      iconName="fa fa-user"
                      label={false}
                    />
                    <Field
                      element="input"
                      name="password"
                      type="password"
                      placeholder="******"
                      className=""
                      icon={true}
                      iconName="fa fa-lock"
                      label={false}
                    />

                    <Field element="button" btnType="submit" btnText="Submit" />

                    <p className="text-center">
                      <a href="#" className="btn">
                        Forgot password?
                      </a>
                    </p>
                  </form>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
