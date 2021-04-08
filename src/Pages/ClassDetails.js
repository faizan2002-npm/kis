import SiteSetting from ".././Constants/SiteSetting";
import Layout from "./../Components/Layout";
import TableTools from "./../Components/TableTools";
import { useState } from "react";
import { Link } from "react-router-dom";
function ClassDetails(props) {
  const [StudentData, setStudentData] = useState([
    {
      _parentID: 1,
      parentContent: [
        {
          _id: 1,
          content: [
            {
              _subID: 1,
              title: "CLASS DETAILS",
              subContent: [
                {
                  _subSubID: 1,
                  title: "",
                  inputData: [
                    {
                      _inputID: 1,
                      label: "Class Name:",
                      name: "name",
                      type: "text",
                      placeholder: "Joshua",
                      value: "Student Name",
                    },
                    {
                      _inputID: 2,
                      label: "Capacity:",
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
                      label: "Class Teacher:",
                      name: "gender",
                      type: "text",
                      placeholder: "Gender",
                      value: "Female",
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
  const [tableHead, setTableHead] = useState([
    {
      _id: 1,
      text: "POSITION",
    },
    {
      _id: 2,
      text: "STUDENT NAME",
    },
    {
      _id: 3,
      text: "SUBJECT",
    },
    {
      _id: 4,
      text: "SUBJECT CORE",
    },
    {
      _id: 5,
      text: "CLASS",
    },
    {
      _id: 6,
      text: "YEAR",
    },
  ]);
  const [tableData, setTableData] = useState([
    {
      _id: 1,
      position: "01",
      name: "John Doe",
      subject: "Mathematics",
      subjectCore: "80%",
      class: "3A",
      year: "2020",
    },
    {
      _id: 2,
      position: "01",
      name: "John Doe",
      subject: "Mathematics",
      subjectCore: "80%",
      class: "3A",
      year: "2020",
    },
    {
      _id: 3,
      position: "01",
      name: "John Doe",
      subject: "Mathematics",
      subjectCore: "80%",
      class: "3A",
      year: "2020",
    },
    {
      _id: 4,
      position: "01",
      name: "John Doe",
      subject: "Mathematics",
      subjectCore: "80%",
      class: "3A",
      year: "2020",
    },
    {
      _id: 5,
      position: "01",
      name: "John Doe",
      subject: "Mathematics",
      subjectCore: "80%",
      class: "3A",
      year: "2020",
    },
    {
      _id: 6,
      position: "01",
      name: "John Doe",
      subject: "Mathematics",
      subjectCore: "80%",
      class: "3A",
      year: "2020",
    },
    {
      _id: 7,
      position: "01",
      name: "John Doe",
      subject: "Mathematics",
      subjectCore: "80%",
      class: "3A",
      year: "2020",
    },
    {
      _id: 8,
      position: "01",
      name: "John Doe",
      subject: "Mathematics",
      subjectCore: "80%",
      class: "3A",
      year: "2020",
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
              <div className="user_icon logo_icon">
                <img
                  src={SiteSetting.SiteSetting[0].Logomin}
                  alt="kgaswe-logo"
                />
              </div>
              <div className="student_creeds">
                <h3 id="full_S_name">Class Details</h3>
                <p
                  style={{
                    marginBottom: "0",
                  }}
                >
                  Form 2A
                </p>
              </div>
            </div>
            <div className="col-md-7" id="function-btns">
              <p>
                <a href="#">
                  Edit <i className="fa fa-edit"></i>
                </a>
              </p>
            </div>
          </div>
          <form>
            {StudentData.map((e, parentIndex) => (
              <div className="row actions pb-3 mb-3 mx-0">
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
          <div className="row actions pb-3 mb-3 mx-0">
            <div className="biologicals class-details">
              <h4 className="title">
                CLASS LIST
                <span
                  style={{
                    float: "right",
                  }}
                >
                  <a href="#">
                    Edit <i className="fa fa-edit"></i>
                  </a>
                </span>
              </h4>

              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      {tableHead.map((e, index) => (
                        <th scope="col" key={`id_${index}_${e._id}`}>
                          {e.text}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((e, index) => (
                      <tr key={`id_${index}_${e._id}`}>
                        <th scope="row">{e.position}</th>
                        <td>{e.name}</td>
                        <td>{e.subject}</td>
                        <td>{e.subjectCore}</td>
                        <td>{e.class}</td>
                        <td>{e.year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row actions mx-0">
            <div className="col-md-12 text-center">
              <a href="#" className="btn-click">
                Edit Class Info
              </a>
              <a href="#" className="btn-click">
                Delete
              </a>
              <Link to="/teacher-list" className="btn-click">
                Back to Teacher List
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ClassDetails;
