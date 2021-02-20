import { useState } from "react";
import Field from "./../Components/Field";
import Layout from "./../Components/Layout";
function Teachers(props) {
  const [tableHead, setTableHead] = useState([
    {
      _id: 1,
      text: "ID NO#",
    },
    {
      _id: 2,
      text: "STUDENT NAME",
    },
    {
      _id: 3,
      text: "ASSESSMENTS",
    },
    {
      _id: 4,
      text: "MOCK EXAM",
    },
    {
      _id: 5,
      text: "TERM MARK",
    },
    {
      _id: 6,
      text: "COMMENT",
    },
  ]);
  const [tableData, setTableData] = useState([
    {
      _id: 1,
      student_id: "KG0001",
      student_name: "Student Full Name 1",
      assignments: "",
      mock_exams: "",
      term_marks: "",
      comments: "",
    },
    {
      _id: 2,
      student_id: "KG0001",
      student_name: "Student Full Name 1",
      assignments: "",
      mock_exams: "",
      term_marks: "",
      comments: "",
    },
    {
      _id: 3,
      student_id: "KG0001",
      student_name: "Student Full Name 1",
      assignments: "",
      mock_exams: "",
      term_marks: "",
      comments: "",
    },
    {
      _id: 4,
      student_id: "KG0001",
      student_name: "Student Full Name 1",
      assignments: "",
      mock_exams: "",
      term_marks: "",
      comments: "",
    },
    {
      _id: 5,
      student_id: "KG0001",
      student_name: "Student Full Name 1",
      assignments: "",
      mock_exams: "",
      term_marks: "",
      comments: "",
    },
    {
      _id: 6,
      student_id: "KG0001",
      student_name: "Student Full Name 1",
      assignments: "",
      mock_exams: "",
      term_marks: "",
      comments: "",
    },
    {
      _id: 7,
      student_id: "KG0001",
      student_name: "Student Full Name 1",
      assignments: "",
      mock_exams: "",
      term_marks: "",
      comments: "",
    },
    {
      _id: 8,
      student_id: "KG0001",
      student_name: "Student Full Name 1",
      assignments: "",
      mock_exams: "",
      term_marks: "",
      comments: "",
    },
    {
      _id: 9,
      student_id: "KG0001",
      student_name: "Student Full Name 1",
      assignments: "",
      mock_exams: "",
      term_marks: "",
      comments: "",
    },
    {
      _id: 10,
      student_id: "KG0001",
      student_name: "Student Full Name 1",
      assignments: "",
      mock_exams: "",
      term_marks: "",
      comments: "",
    },
  ]);
  return (
    <>
      <Layout>
        <section class="heading">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6" id="dynamic-buttons">
                <a class="btn" href="#">
                  <i class="fa fa-print"></i> Print
                </a>
                <a class="btn" href="#">
                  <i class="fa fa-paper-plane-o"></i> Email
                </a>
                <a class="btn" href="#">
                  <i class="fa fa-direction-right"></i> Export
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="px-3">
          <div class="row current-year-container">
            <div class="col-md-6" id="current-term">
              <form>
                <select>
                  <option>Additional Mathematics</option>
                  <option>Mathematics BGCSE</option>
                  <option>Pure Mathematics</option>
                </select>
              </form>
            </div>
            <div class="col-md-6" id="">
              <h3>
                <span>Class: </span> Form 1A
              </h3>
            </div>
          </div>
          <div class="row" id="section-devider">
            <div class="col-md-12">
              <div class="devider"></div>
            </div>
          </div>
          <div class="row welcome">
            <div class="col-md-6 text">
              <h3>
                <span>Mr Kugara </span> - Class Year 2020
              </h3>
            </div>
            <div class="col-md-6 full-term-selct">
              <div class="row login-area p-0 bg-light">
                <div class="col-md-6">
                  <Field
                    element="input"
                    name="filter_from"
                    type="text"
                    placeholder="Filter From: "
                    className=""
                    icon={true}
                    iconName="fa fa-calendar"
                    label={false}
                  />
                </div>
                <div class="col-md-6">
                  <Field
                    element="input"
                    name="last_date"
                    type="text"
                    placeholder="Last Date: "
                    className=""
                    icon={true}
                    iconName="fa fa-calendar"
                    label={false}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-bordered">
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
                        <th scope="row">{e.student_id}</th>
                        <td>{e.student_name}</td>
                        <td>{e.assignments}</td>
                        <td>{e.mock_exams}</td>
                        <td>{e.term_marks}</td>
                        <td>{e.comments}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Teachers;
