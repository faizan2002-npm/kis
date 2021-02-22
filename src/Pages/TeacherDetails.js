import Layout from "./../Components/Layout";
import TableTools from "./../Components/TableTools";
import { useState } from "react";
function TeacherDetails(props) {
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
                  title: "",
                  inputData: [
                    {
                      _inputID: 1,
                      label: "Mobile Number:",
                      name: "name",
                      type: "text",
                      placeholder: "Mobile Number",
                      value: "000000000",
                    },
                  ],
                },
                {
                  _subSubID: 2,
                  title: "",
                  inputData: [
                    {
                      _inputID: 1,
                      label: "Email:",
                      name: "gender",
                      type: "text",
                      placeholder: "Email",
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
      _parentID: 2,
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
                      name: "name",
                      type: "text",
                      placeholder: "Class Name",
                      value: "2A",
                    },
                    {
                      _inputID: 2,
                      label: "Class Teacher:",
                      name: "surname",
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
                      name: "gender",
                      type: "text",
                      placeholder: "Student ID",
                      value: "1",
                    },
                    {
                      _inputID: 2,
                      label: "Number of Subjects:",
                      name: "dob",
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
                <h3 id="full_S_name " className="">
                  Teacher Names
                </h3>
                <p>Teacher Number: KS0001</p>
              </div>
            </div>
            <div className="col-md-7" id="function-btns">
              <a href="/teacher-list" className="btn-click">
                Back to Teacher List
              </a>
              <p>
                <a href="#">
                  Edit <i className="fa fa-edit"></i>
                </a>
              </p>
            </div>
          </div>
          <form>
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
                                  <input
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
          </form>
          <div className="row actions mx-0">
            <div className="col-md-12 text-center">
              <a href="#" className="btn-click">
                Edit Teacher Info
              </a>
              <a href="#" className="btn-click">
                Delete
              </a>
              <a href="#" className="btn-click">
                Back to Teacher List
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default TeacherDetails;
