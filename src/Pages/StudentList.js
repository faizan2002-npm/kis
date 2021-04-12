import SiteSetting from ".././Constants/SiteSetting";
import Layout from "./../Components/Layout";
import TableTools from "./../Components/TableTools";
import { useState, useEffect } from "react";

import { getRequest } from "../api/request";
import { Link } from "react-router-dom";
function StudentList(props) {
  console.log(props);

  console.log(props.location.search);

  const [tableHead, setTableHead] = useState([
    {
      _id: 1,
      text: "STUDENT NO	",
    },
    {
      _id: 2,
      text: "NAMES",
    },
    {
      _id: 3,
      text: "SURNAME",
    },
    {
      _id: 4,
      text: "GENDER",
    },
    {
      _id: 5,
      text: "D.O.B",
    },
    // {
    //   _id: 6,
    //   text: "NEXT OF KIN",
    // },
    {
      _id: 7,
      text: "GRADE",
    },
    // {
    //   _id: 8,
    //   text: "TEACHER",
    // },
  ]);
  const getAllStudentOfSpecificClass = async () => {
    try {
      const token = localStorage.getItem("TOKEN");
      console.log("token", token);
      // console.log("paraamsss",params.slice(0));

      var params = props.location.search.slice(5);
      // console.log("paraamsss",params);
      const response = await getRequest(
        `/api/class/getAllStudents/${params}`,
        token
      );
      console.log(
        "getAllStudentOfSpecificClass Response",
        response.result.data
      );
      //  console.log(response.result.data.Students);
      const studentData = response.result.data.Students.map((data) => {
        return {
          _id: data._id,
          name: data.biological_details.name,
          surname: data.biological_details.surname,
          gender: data.biological_details.gender,
          dob: data.biological_details.dob,
          grade: data.biological_details.grade,
        };

        // data.biological_details,

        // ...data._id
      });

      // console.log('data.id', studentData);
      setTableData(studentData);
    } catch (error) {
      console.log("getAllStudentOfSpecificClass Error", error.message);
    }
  };
  useEffect(() => {
    getAllStudentOfSpecificClass();
  }, []);
  const [tableData, setTableData] = useState([]);

  console.log("new Sata", tableData);

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
        <div className="px-3">
          <div className="row teacher-list-head" id="teacher_dashboard">
            <div className="col-md-6 text" id="List_title">
              <h2>1PN Students | 2021</h2>
            </div>
            <div className="col-md-6" id="function-btns">
              <p>
                <a href="#">
                  Add <i className="fa fa-user-plus"></i>
                </a>
                <a href="#">
                  Edit <i className="fa fa-edit"></i>
                </a>
                <a href="#">
                  Suspend <i className="fa fa-user-times"></i>
                </a>
              </p>
            </div>
          </div>
          <div className="row welcome">
            <div className="col-md-6 search-filter">
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 logo_icon">
              <img src={SiteSetting.SiteSetting[0].Logomin} alt="kgaswe-logo" />
            </div> */}
            <div className="col-md-6 search-filter">
              <div className="form-group">
                <div className="" id="dataTables-example_filter">
                  <select>
                    <option>Year</option>
                    <option>2020</option>
                    <option>2021</option>
                  </select>
                  <a href="#" className="btn" type="submit">
                    <i className="fa fa-filter"></i> Filter
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 ">
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
                    {tableData === "No students found against this class" ? (
                      <tr>
                        <td className="text-center" colSpan={6}>
                          No students found against this class
                        </td>
                      </tr>
                    ) : (
                      tableData.map((e, index) => (
                        <tr key={`id_${index}_${e._id}`}>
                          {/* {e._id}</th> */}
                          <th scope="row">
                            <Link to={`/student?_id=${e._id}`}>{e._id}</Link>
                          </th>
                          <td>{e.name}</td>
                          <td>{e.surname}</td>
                          <td>{e.gender}</td>
                          <td>{e.dob}</td>
                          <td>{e.grade}</td>
                        </tr>
                      ))
                    )}
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

export default StudentList;
