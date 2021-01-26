import Layout from "./../Components/Layout";
import TableTools from "./../Components/TableTools";
import Field from "./../Components/Field";
import SiteSetting from ".././Constants/SiteSetting";
import { useState } from "react";

function Parents(props) {
  const [result, setResult] = useState([
    {
      _id: 1,
      text: "Terms Completed",
      value: "0",
    },
    {
      _id: 2,
      text: "Class   Position",
      value: "0",
    },
    {
      _id: 3,
      text: "Overall Mark",
      value: "0",
    },
    {
      _id: 4,
      text: "Attendance Avg",
      value: "0",
    },
    {
      _id: 5,
      text: "Year Completed",
      value: "2020",
    },
  ]);
  const [tableHead, setTableHead] = useState([
    {
      _id: 1,
      text: "SUBJECT",
    },
    {
      _id: 2,
      text: "TERM 1 MARK",
    },
    {
      _id: 3,
      text: "TERM 2 MARK",
    },
    {
      _id: 4,
      text: "TERM 3 MARK",
    },
    {
      _id: 5,
      text: "FINAL EXAM MARK",
    },
  ]);
  const [tableData, setTableData] = useState([
    {
      _id: 1,
      subject: "ICT",
      first_term_marks: "",
      second_term_marks: "",
      third_term_marks: "",
      final_term_marks: "",
    },
    {
      _id: 2,
      subject: "MATHEMATICS",
      first_term_marks: "",
      second_term_marks: "",
      third_term_marks: "",
      final_term_marks: "",
    },
    {
      _id: 3,
      subject: "SCIENCE",
      first_term_marks: "",
      second_term_marks: "",
      third_term_marks: "",
      final_term_marks: "",
    },
    {
      _id: 4,
      subject: "ENGLISH LANGAUGE",
      first_term_marks: "",
      second_term_marks: "",
      third_term_marks: "",
      final_term_marks: "",
    },
    {
      _id: 5,
      subject: "ENGLISH LITERATURE",
      first_term_marks: "",
      second_term_marks: "",
      third_term_marks: "",
      final_term_marks: "",
    },
    {
      _id: 6,
      subject: "SETSWANA",
      first_term_marks: "",
      second_term_marks: "",
      third_term_marks: "",
      final_term_marks: "",
    },
    {
      _id: 7,
      subject: "FRENCH",
      first_term_marks: "",
      second_term_marks: "",
      third_term_marks: "",
      final_term_marks: "",
    },
    {
      _id: 8,
      subject: "GEOGRAPHY",
      first_term_marks: "",
      second_term_marks: "",
      third_term_marks: "",
      final_term_marks: "",
    },
    {
      _id: 9,
      subject: "BUSINESS STUDIES",
      first_term_marks: "",
      second_term_marks: "",
      third_term_marks: "",
      final_term_marks: "",
    },
    {
      _id: 10,
      subject: "HISTORY",
      first_term_marks: "",
      second_term_marks: "",
      third_term_marks: "",
      final_term_marks: "",
    },
  ]);
  return (
    <>
      <Layout>
        <section class="heading">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6" id="dynamic-buttons">
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
        <div class="row current-year-container">
          <div class="col-md-6" id="current-term">
            <form>
              <select>
                <option>Current School Year</option>
                <option>YEAR 2020</option>
                <option>YEAR 2021</option>
              </select>
            </form>
            <p id="current-year">YEAR 2020</p>
          </div>
          <div class="col-md-6" id="in-logo">
            <img src={SiteSetting.SiteSetting[0].Logo} alt="Kgaswe" />
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
              <span>Academic Report</span> - Student Full Name
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
        <div id="statistics">
          <div class="row">
            {result.map((e, index) => (
              <div class="col-md-3 col-15" key={`id_${index}_${e._id}`}>
                <p>{e.text}</p>
                <h3>{e.value}</h3>
              </div>
            ))}
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
                      <th scope="row">{e.subject}</th>
                      <td>{e.first_term_marks}</td>
                      <td>{e.second_term_marks}</td>
                      <td>{e.third_term_marks}</td>
                      <td>{e.final_term_marks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row" id="principal-comments">
          <div class="col-md-12">
            <div class="comments-wrapper">
              <h6>Overall comments by Principal</h6>
              <p>
                Disappointing results for Mosako. He must reflect on these
                results and ensure they are not repeated
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Parents;
