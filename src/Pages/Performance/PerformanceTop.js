import SiteSetting from "../../Constants/SiteSetting";
import Layout from "../../Components/Layout";
import TableTools from "../../Components/TableTools";
import { useState } from "react";
import { Link } from "react-router-dom";
function PerformanceTop(props) {
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
      text: "AVERAGE SCORE",
    },
    {
      _id: 4,
      text: "CLASS",
    },
    {
      _id: 5,
      text: "YEAR",
    },
  ]);
  const [tableData, setTableData] = useState([
    {
      _id: 1,
      position: "01",
      name: "KAOSI MOREETSI DITEBO",
      score: "5.5",
      class: "",
      year: "2020",
    },
    {
      _id: 2,
      position: "02",
      name: "RAJNANDINI GHOSH",
      score: "5.4",
      class: "",
      year: "2020",
    },
    {
      _id: 3,
      position: "03",
      name: "LOAGO JOSEPH MATOME SEBOLA	",
      score: "5.3",
      class: "",
      year: "2020",
    },
    {
      _id: 4,
      position: "04",
      name: "SEKAO MAATLA PELAELO",
      score: "5.2",
      class: "",
      year: "2020",
    },
    {
      _id: 5,
      position: "05",
      name: "AAKRITI GUPTA",
      score: "5.1",
      class: "",
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
            <div
              className="col-md-5 text"
              id="List_title"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="user_icon logo_icon">
                <img
                  src={SiteSetting.SiteSetting[0].Logomin}
                  alt="kgaswe-logo"
                />
              </div>
              <div className="student_creeds">
                <h3 id="full_S_name">Student Performance List</h3>
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
          <div className="row actions pb-3 mb-3 mx-0">
            <div className="col-md-12">
              <div class="biologicals class-details">
                <h4 class="title">
                  CLASS LIST
                  <span
                    style={{
                      float: "right",
                    }}
                  >
                    <a href="#">
                      Edit <i class="fa fa-edit"></i>
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
                          <td>{e.score}</td>
                          <td>{e.class}</td>
                          <td>{e.year}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row actions mx-0">
            <div className="col-md-12 text-center">
              <a href="#" className="btn-click">
                Edit
              </a>
              <a href="#" className="btn-click">
                Delete
              </a>
              <Link to="/performer" className="btn-click">
                Back
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default PerformanceTop;
