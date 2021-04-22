import React, { Component } from "react";
import SiteSetting from "../../Constants/SiteSetting";
import Layout from "../../Components/Layout";
import TableTools from "../../Components/TableTools";

import { Link } from "react-router-dom";

class PerformanceLeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
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
      ],
      tableData: [
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
      ],
      buttonClicked: false,
      score: [],
    };
  }

  handleEmailListChange = (index, event) => {
    var score = [...this.state.tableData];
    console.log("Scoreee", score);

    score[index].score = event.target.value; // Update it with the modified email.
    this.setState({ score });

    // Make a copy of the emails first.
    // Update the state.
  };

  render() {
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
                  <p
                  // style={{
                  //   marginBottom: "0",
                  // }}
                  >
                    Class Name
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
            <div className="row actions pb-3 mb-3 mx-0">
              <div className="col-md-12">
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
                          {this.state.tableHead.map((e, index) => (
                            <th scope="col" key={`id_${index}_${e._id}`}>
                              {e.text}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.tableData.map((e, index) => (
                          <tr key={`id_${index}_${e._id}`}>
                            <th scope="row">{e.position}</th>
                            <td>{e.name}</td>

                            <td>
                              {" "}
                              {this.state.buttonClicked ? (
                                <input
                                  value={e.score}
                                  onChange={(event) => {
                                    const score = [...this.state.tableData];
                                    score[index].score = event.target.value; // Update it with the modified email.
                                    this.setState({ score });
                                  }}
                                />
                              ) : (
                                e.score
                              )}
                            </td>
                            <td>
                              {this.state.buttonClicked ? (
                                <input
                                  value={e.class}
                                  onChange={(event) => {
                                    const score = [...this.state.tableData];
                                    score[index].class = event.target.value; // Update it with the modified email.
                                    this.setState({ score });
                                  }}
                                />
                              ) : (
                                e.class
                              )}
                            </td>
                            <td>
                              {" "}
                              {this.state.buttonClicked ? (
                                <input
                                  value={e.year}
                                  onChange={(event) => {
                                    const score = [...this.state.tableData];
                                    score[index].year = event.target.value; // Update it with the modified email.
                                    this.setState({ score });
                                  }}
                                />
                              ) : (
                                e.year
                              )}
                            </td>
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
                <a
                  href="#"
                  className="btn-click"
                  onClick={() => this.setState({ buttonClicked: true })}
                >
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
}

export default PerformanceLeast;
