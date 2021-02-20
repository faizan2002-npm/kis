import Layout from "./../Components/Layout";
import TableTools from "./../Components/TableTools";
import { useState } from "react";
import SiteSetting from ".././Constants/SiteSetting";

function TeacherList(props) {
  const [tableHead, setTableHead] = useState([
    {
      _id: 1,
      text: "NAMES",
    },
    {
      _id: 2,
      text: "SURNAME",
    },
    {
      _id: 3,
      text: "GENDER",
    },
    {
      _id: 4,
      text: "SUPERVISOR",
    },
    {
      _id: 5,
      text: "GRADE",
    },
  ]);
  const [tableData, setTableData] = useState([
    {
      _id: 1,
      name: "John",
      surname: "Doe",
      gender: "Male",
      supervisor: "Kagiso Masoma",
      grade: "2A",
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
        <div className="px-3">
          <div className="row teacher-list-head" id="teacher_dashboard">
            <div className="col-md-6 text" id="List_title">
              <h2>Teacher List</h2>
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
                  <a href="#" className="btn" type="submit">
                    <i className="fa fa-filter"></i> Filter
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 logo_icon">
              <img src={SiteSetting.SiteSetting[0].Logomin} alt="kgaswe-logo" />
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
                    {tableData.map((e, index) => (
                      <tr key={`id_${index}_${e._id}`}>
                        <th scope="row">{e.name}</th>
                        <td>{e.surname}</td>
                        <td>{e.gender}</td>
                        <td>{e.supervisor}</td>
                        <td>{e.grade}</td>
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

export default TeacherList;
