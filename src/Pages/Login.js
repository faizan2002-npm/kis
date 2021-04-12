// import React,{useHistory,useContext} from 'react';
import SiteSetting from ".././Constants/SiteSetting";
import Field from "./../Components/Field";
import { useHistory } from "react-router-dom";

import { Formik, Form, Field as FormikField, ErrorMessage } from "formik";
import { postRequestForm } from "../api/request";
// postRequestForm
import { reactLocalStorage } from "reactjs-localstorage";

function Login(props) {
  const history = useHistory();

  function teacherLoginRedirect() {
    history.push("/teacher-index");
  }
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
                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                    }}
                    onSubmit={async (values) => {
                      console.log(values);

                      try {
                        const response = await postRequestForm(
                          "/api/auth/login",
                          "",
                          values
                        );
                        localStorage.setItem(
                          "TOKEN",
                          response.result.data.token
                        );
                        // console.log('TOKEN', response.result .data.token);
                        console.log("status", response.result.status);
                        if (response.result.status === 200) {
                          console.log("logged in!");
                          if (response.result.data.user.type === "teacher") {
                            // navigate("TeacherDashboard");
                            teacherLoginRedirect();
                          }
                        }
                      } catch (error) {
                        console.log("Login APi error", error.message);
                      }
                    }}
                  >
                    <Form>
                      <FormikField
                        element="input"
                        name="email"
                        type="email"
                        placeholder="email"
                        className=""
                        icon={true}
                        iconName="fa fa-user"
                        label={false}
                      />
                      <FormikField
                        element="input"
                        name="password"
                        type="password"
                        placeholder="******"
                        className=""
                        icon={true}
                        iconName="fa fa-lock"
                        label={false}
                      />

                      <Field
                        element="button"
                        btnType="submit"
                        btnText="Submit"
                      />

                      <p className="text-center">
                        <a href="#" className="btn">
                          Forgot password?
                        </a>
                      </p>
                    </Form>
                  </Formik>
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
