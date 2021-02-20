import SiteSetting from ".././Constants/SiteSetting";
import Layout from "./../Components/Layout";
import TableTools from "./../Components/TableTools";
import { useState } from "react";

function StudentList(props) {
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
    {
      _id: 6,
      text: "NEXT OF KIN",
    },
    {
      _id: 7,
      text: "GRADE",
    },
    {
      _id: 8,
      text: "TEACHER",
    },
  ]);
  const [tableData, setTableData] = useState([
    {
      _id: 1,
      student_no: "KS0001",
      name: "Joshua",
      surname: "Thabo",
      gender: "Female",
      dob: "22 August 1994",
      next_of_kin: "Mathor Andrea",
      grade: "2A",
      teacher: "Salang Kebonaeng",
    },
    {
      _id: 2,
      student_no: "KS0001",
      name: "Joshua",
      surname: "Thabo",
      gender: "Female",
      dob: "22 August 1994",
      next_of_kin: "Mathor Andrea",
      grade: "2A",
      teacher: "Salang Kebonaeng",
    },
    {
      _id: 3,
      student_no: "KS0001",
      name: "Joshua",
      surname: "Thabo",
      gender: "Female",
      dob: "22 August 1994",
      next_of_kin: "Mathor Andrea",
      grade: "2A",
      teacher: "Salang Kebonaeng",
    },
    {
      _id: 4,
      student_no: "KS0001",
      name: "Joshua",
      surname: "Thabo",
      gender: "Female",
      dob: "22 August 1994",
      next_of_kin: "Mathor Andrea",
      grade: "2A",
      teacher: "Salang Kebonaeng",
    },
    {
      _id: 5,
      student_no: "KS0001",
      name: "Joshua",
      surname: "Thabo",
      gender: "Female",
      dob: "22 August 1994",
      next_of_kin: "Mathor Andrea",
      grade: "2A",
      teacher: "Salang Kebonaeng",
    },
    {
      _id: 6,
      student_no: "KS0001",
      name: "Joshua",
      surname: "Thabo",
      gender: "Female",
      dob: "22 August 1994",
      next_of_kin: "Mathor Andrea",
      grade: "2A",
      teacher: "Salang Kebonaeng",
    },
    {
      _id: 7,
      student_no: "KS0001",
      name: "Joshua",
      surname: "Thabo",
      gender: "Female",
      dob: "22 August 1994",
      next_of_kin: "Mathor Andrea",
      grade: "2A",
      teacher: "Salang Kebonaeng",
    },
    {
      _id: 8,
      student_no: "KS0001",
      name: "Joshua",
      surname: "Thabo",
      gender: "Female",
      dob: "22 August 1994",
      next_of_kin: "Mathor Andrea",
      grade: "2A",
      teacher: "Salang Kebonaeng",
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
              <h2>2020 Student List</h2>
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
                        <th scope="row">{e.student_no}</th>
                        <td>{e.name}</td>
                        <td>{e.surname}</td>
                        <td>{e.gender}</td>
                        <td>{e.dob}</td>
                        <td>{e.next_of_kin}</td>
                        <td>{e.grade}</td>
                        <td>{e.teacher}</td>
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

export default StudentList;
