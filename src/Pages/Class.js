import React, { useEffect } from "react";
import SiteSetting from ".././Constants/SiteSetting";
import Layout from "./../Components/Layout";
import TableTools from "./../Components/TableTools";
import { useState } from "react";
import { getRequest } from "../api/request";
import { reactLocalStorage } from "reactjs-localstorage";
import { Link } from "react-router-dom";

function MyClass(props) {
  const [tableHead, setTableHead] = useState([
    {
      _id: 1,
      text: "CLASS",
    },
    {
      _id: 2,
      text: "CAPACITY",
    },
    {
      _id: 3,
      text: "YEAR",
    },
  ]);

  const getAllClases = async () => {
    try {
      const token = localStorage.getItem("TOKEN");
      console.log("token", token);
      const response = await getRequest("/api/class/getAllClasses", token);
      console.log("classes", response.result.data.classes);
      setTableData(response.result.data.classes);
    } catch (error) {
      console.log("getAllClases", error.message);
    }
  };

  useEffect(() => {
    getAllClases();
  }, []);

  const [tableData, setTableData] = useState([]);
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
              <h2>Classes for Mathematics</h2>
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
                    {tableData === "No classes found against this teacher" ? (
                      <tr>
                        <td className="text-center" colSpan={3}>
                          No classes found against this teacher
                        </td>
                      </tr>
                    ) : (
                      tableData.map((e, index) => (
                        <tr key={`id_${index}_${e._id}`}>
                          <th scope="row">
                            <Link to={`/student-list?_id=${e._id}`}>
                              {e.name}
                            </Link>
                          </th>
                          <td>{e.capacity}</td>
                          {/* <td>{e.class_techer}</td> */}
                          <td>{e.year}</td>
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

export default MyClass;
