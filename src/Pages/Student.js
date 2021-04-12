import Layout from "./../Components/Layout";
import TableTools from "./../Components/TableTools";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getRequest } from "../api/request";

function Student(props) {
  const [StudentData, setStudentData] = useState([
    {
      _parentID: 1,
      parentContent: [
        {
          _id: 1,
          content: [
            {
              _subID: 1,
              title: "BIOLOGICAL DETAILS",
              subContent: [
                {
                  _subSubID: 1,
                  title: "",
                  inputData: [
                    {
                      _inputID: 1,
                      label: "Name:",
                      name: "name",
                      type: "text",
                      placeholder: "Joshua",
                      value: "Student Name",
                    },
                    {
                      _inputID: 2,
                      label: "Surname:",
                      name: "surname",
                      type: "text",
                      placeholder: "Thabo",
                      value: "Student Surname",
                    },
                  ],
                },
                {
                  _subSubID: 2,
                  title: "",
                  inputData: [
                    {
                      _inputID: 1,
                      label: "Gender:",
                      name: "gender",
                      type: "text",
                      placeholder: "Gender",
                      value: "Female",
                    },
                    {
                      _inputID: 2,
                      label: "Date of Birth:",
                      name: "dob",
                      type: "text",
                      placeholder: "Date of Birth",
                      value: "22 August 1994	",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          _id: 2,
          content: [
            {
              _subID: 1,
              title: "CONTACT DETAILS",
              subContent: [
                {
                  _subSubID: 1,
                  title: "PHYSICAL ADDRESS:",
                  inputData: [
                    {
                      _inputID: 1,
                      label: "Street/Ward:",
                      name: "street",
                      type: "text",
                      placeholder: "Street/Ward",
                      value: "1342 Military Rd",
                    },
                    {
                      _inputID: 2,
                      label: "Town/Village:",
                      name: "town",
                      type: "text",
                      placeholder: "Town/Village",
                      value: "Niagara falls",
                    },
                  ],
                },
                {
                  _subSubID: 2,
                  title: "POSTAL ADDRESS:",
                  inputData: [
                    {
                      _inputID: 1,
                      label: "P O Box/Private Bag:",
                      name: "poBoxAddress",
                      type: "text",
                      placeholder: "P O Box/Private Bag",
                      value: "1342 Military Rd",
                    },
                    {
                      _inputID: 2,
                      label: "Town/Village:",
                      name: "postalAddresTown",
                      type: "text",
                      placeholder: "Town/Village",
                      value: "Niagara falls",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      _parentID: 2,
      parentContent: [
        {
          _id: 1,
          content: [
            {
              _subID: 1,
              title: "PARENT / NEXT OF KIN",
              subContent: [
                {
                  _subSubID: 1,
                  title: "",
                  inputData: [
                    {
                      _inputID: 1,
                      label: "Name:",
                      name: "parentName",
                      type: "text",
                      placeholder: "Parent Name",
                      value: "Mathor",
                    },
                    {
                      _inputID: 2,
                      label: "Surname:",
                      name: "parentSurname",
                      type: "text",
                      placeholder: "Parent Name",
                      value: "Andrea",
                    },
                  ],
                },
                {
                  _subSubID: 2,
                  title: "",
                  inputData: [
                    {
                      _inputID: 1,
                      label: "Relationship:",
                      name: "relationship",
                      type: "text",
                      placeholder: "Relationship",
                      value: "Daughter",
                    },
                    {
                      _inputID: 2,
                      label: "Date of Birth:",
                      name: "parentDob",
                      type: "text",
                      placeholder: "Date of Birth",
                      value: "22 August 1994",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          _id: 2,
          content: [
            {
              _subID: 1,
              title: "CONTACT DETAILS",
              subContent: [
                {
                  _subSubID: 1,
                  title: "PHYSICAL ADDRESS:",
                  inputData: [
                    {
                      _inputID: 1,
                      label: "Street/Ward:",
                      name: "parentStreet",
                      type: "text",
                      placeholder: "Street/Ward",
                      value: "1342 Military Rd",
                    },
                    {
                      _inputID: 2,
                      label: "Town/Village:",
                      name: "parentTown",
                      type: "text",
                      placeholder: "Town/Village",
                      value: "Niagara falls",
                    },
                  ],
                },
                {
                  _subSubID: 2,
                  title: "POSTAL ADDRESS:",
                  inputData: [
                    {
                      _inputID: 1,
                      label: "P O Box/Private Bag:",
                      name: "parentPOBoxAddress",
                      type: "text",
                      placeholder: "P O Box/Private Bag",
                      value: "1342 Military Rd",
                    },
                    {
                      _inputID: 2,
                      label: "Town/Village:",
                      name: "parentPOBoxToen",
                      type: "text",
                      placeholder: "Town/Village",
                      value: "Niagara falls",
                    },
                  ],
                },
                {
                  _subSubID: 3,
                  title: "POSTAL ADDRESS:",
                  inputData: [
                    {
                      _inputID: 1,
                      label: "Telephone(Home)",
                      name: "parentTelephoneHome",
                      type: "text",
                      placeholder: "Telephone",
                      value: "00000000",
                    },
                    {
                      _inputID: 2,
                      label: "Mobile:",
                      name: "parentMobile",
                      type: "text",
                      placeholder: "Mobile Number",
                      value: "00000000",
                    },
                  ],
                },
                {
                  _subSubID: 4,
                  title: "",
                  inputData: [
                    {
                      _inputID: 1,
                      label: "Telephone(Work)",
                      name: "parentTelephoneWork",
                      type: "text",
                      placeholder: "Telephone",
                      value: "00000000",
                    },
                    {
                      _inputID: 2,
                      label: "Email:",
                      name: "parentEmail",
                      type: "text",
                      placeholder: "Email Address",
                      value: "demo@mail.com",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      _parentID: 3,
      parentContent: [
        {
          _id: 1,
          content: [
            {
              _subID: 1,
              title: "ACADEMIC ENROLLMENT",
              subContent: [
                {
                  _subSubID: 1,
                  title: "",
                  inputData: [
                    {
                      _inputID: 1,
                      label: "Class:",
                      name: "class",
                      type: "text",
                      placeholder: "Class Name",
                      value: "2A",
                    },
                    {
                      _inputID: 2,
                      label: "Class Teacher:",
                      name: "classTeacher",
                      type: "text",
                      placeholder: "Class Teacher Name",
                      value: "Salang Kebonaeng",
                    },
                  ],
                },
                {
                  _subSubID: 2,
                  title: "",
                  inputData: [
                    {
                      _inputID: 1,
                      label: "Student Number:",
                      name: "studentNumber",
                      type: "text",
                      placeholder: "Student ID",
                      value: "1",
                    },
                    {
                      _inputID: 2,
                      label: "Number of Subjects:",
                      name: "numberofSubject",
                      type: "text",
                      placeholder: "Number of Subjects",
                      value: "6",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  const [apiResponse, setAPIResponse] = useState([]);

  const getClassStudent = async () => {
    try {
      const token = localStorage.getItem("TOKEN");
      // console.log("token", token);
      var params = props.location.search.slice(5);
      const response = await getRequest(
        `/api/class/getStudent/${params}`,
        token
      );
      // console.log("classes", response.result.data.Student);
      setAPIResponse(response.result.data);
      console.log("apiResponse", apiResponse);
    } catch (error) {
      console.log("getClassStudent", error.message);
    }
  };

  useEffect(() => {
    getClassStudent();
  }, []);

  return (
    <>
      <Layout>
        <section className="heading">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6" id="dynamic-buttons">
                <TableTools
                  href="#"
                  text="Prnt"
                  icon={true}
                  iconName="fa fa-print"
                />
                <TableTools
                  href="#"
                  icon={true}
                  text="Email"
                  iconName="fa fa-paper-plane-o"
                />
                <TableTools
                  href="#"
                  icon={true}
                  iconName="fa-direction-right"
                  text="Export"
                />
              </div>
            </div>
          </div>
        </section>
        <div
          id="teacher_dashboard"
          style={{
            backgroundColor: "#e8e8e8",
          }}
        >
          <div className="row student-list-head mx-0">
            <div className="col-md-5 text" id="List_title">
              <div className="user_icon">
                <i className="fa fa-user-circle"></i>
              </div>
              <div className="student_creeds">
                <h3 id="full_S_name">Full Student Name</h3>
                <p>Student Number: KS0001</p>
              </div>
            </div>
            <div className="col-md-7" id="function-btns">
              <a href="#" className="btn-click">
                View Academic Record
              </a>
              <Link to="/student-list" className="btn-click">
                Back to Student List
              </Link>
              <p>
                <a href="#">
                  Edit <i className="fa fa-edit"></i>
                </a>
              </p>
            </div>
          </div>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              gender: "",
              dob: "",
              street: "",
              town: "",
              poBoxAddress: "",
              postalAddresTown: "",
              parentName: "",
              parentSurname: "",
              surname: "",
              relationship: "",
              parentDob: "",
              parentStreet: "",
              parentTown: "",
              parentPOBoxAddress: "",
              parentPOBoxToen: "",
              parentTelephoneHome: "",
              parentMobile: "",
              parentTelephoneWork: "",
              parentEmail: "",
              class: "",
              classTeacher: "",
              studentNumber: "",
              numberofSubject: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ isSubmitting, handleSubmit }) => (
              <Form>
                {/* <Field type="email" name="email" />
           <Field type="password" name="password" /> */}

                {StudentData.map((e, parentIndex) => (
                  <div className="row actions mb-3 mx-0">
                    {e.parentContent.map((e, index) => (
                      <div className="col-md-12" key={`key_${index}-${e._id}`}>
                        {e.content.map((e, subIndex) => (
                          <div
                            className="biologicals"
                            key={`key_${subIndex}-${e._subID}`}
                          >
                            <h4 className="title">{e.title}</h4>
                            <div className="row">
                              {e.subContent.map((e, subSubIndex) => (
                                <div
                                  className="col-lg-6 col-md-6 col-12"
                                  key={`key_${subSubIndex}-${e._subSubID}`}
                                >
                                  <h4>{e.title}</h4>
                                  {/* {e.inputData} */}
                                  {e.inputData.map((e, innerIndex) => (
                                    <div
                                      className="fowrm-group"
                                      key={`key_${innerIndex}-${e._inputID}`}
                                    >
                                      <label>{e.label}</label>
                                      <Field
                                        type={e.type}
                                        name={e.name}
                                        id={e.name}
                                        defaultValue={e.value}
                                        placeholder={e.placeholder}
                                      />
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>

          <div className="row actions mx-0">
            <div className="col-md-12">
              <a href="#" className="btn-click">
                View Academic Record
              </a>
              <a href="#" className="btn-click">
                Edit Student Info
              </a>
              <a href="#" className="btn-click">
                Delete Record
              </a>
              <Link to="/student-list" className="btn-click">
                Back to Student List
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Student;
