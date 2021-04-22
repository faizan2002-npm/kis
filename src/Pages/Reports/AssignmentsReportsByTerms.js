import React, { Component } from "react";
import SiteSetting from "../../Constants/SiteSetting";
import Layout from "../../Components/Layout";
import TableTools from "../../Components/TableTools";

import { Link } from "react-router-dom";
import Collapsible from "react-collapsible";

class AssignmentsReportsByTerm extends Component {
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
              <div className="col-md-5 text" id="List_title">
                <div className="user_icon">
                  <i className="fa fa-user-circle"></i>
                </div>
                <div className="student_creeds">
                  <h3 id="full_S_name">Assignments Report | 2021</h3>
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
            <div className="row pr20 mx-0">
              <div className="col-md-12 ">
                <div className="row welcome biologicals student-list-head mx-0">
                  <div className="col-md-6 search-filter text-left">
                    <div className="form-group m-0">
                      <select className="form-control">
                        <option>Year</option>
                        <option>2020</option>
                        <option>2021</option>
                      </select>
                      <a href="#" className="btn" type="submit">
                        <i className="fa fa-filter"></i> Filter
                      </a>
                    </div>
                  </div>
                  {/* <div className="col-md-6 logo_icon">
              <img src={SiteSetting.SiteSetting[0].Logomin} alt="kgaswe-logo" />
            </div> */}
                </div>

                <div className="biologicals class-details reports">
                  <h4 className="title">Mathematics Term Reports </h4>
                  <Collapsible trigger="Week 1">
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
                  </Collapsible>
                  <Collapsible trigger="Week 2">
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
                  </Collapsible>
                  <Collapsible trigger="Week 3">
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
                  </Collapsible>
                  {/* <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <i className="more-less glyphicon glyphicon-plus"></i>
                        Term 1
                    </a>
                      </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                      <div className="panel-body">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th scope="col">STUDENT NAME</th>
                                <th scope="col">JANUARY</th>
                                <th scope="col">FEBRUARY</th>
                                <th scope="col">MARCH</th>
                                <th scope="col">AVERAGE</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>KAOSI MOREETSI DITEBO</td>
                                <td>86</td>
                                <td>66</td>
                                <td>72</td>
                                <td>84</td>
                              </tr>
                              <tr>
                                <td>RAJNANDINI GHOSH</td>
                                <td>74</td>
                                <td>72</td>
                                <td>87</td>
                                <td>78</td>
                              </tr>
                              <tr>
                                <td>LOAGO JOSEPH MATOME SEBOLA</td>
                                <td>67</td>
                                <td>66</td>
                                <td>72</td>
                                <td>69</td>
                              </tr>
                              <tr>
                                <td>SEKAO MAATLA PELAELO</td>
                                <td>64</td>
                                <td>66</td>
                                <td>76</td>
                                <td>73</td>
                              </tr>
                              <tr>
                                <td>AAKRITI GUPTA</td>
                                <td>75</td>
                                <td>66</td>
                                <td>62</td>
                                <td>67</td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>

                            </tbody>
                          </table>
                        </div>
                        <div className="row actions pr20">
                          <div className="col-md-12">
                            <a href="#" className="btn-click">Edit</a>
                            <a href="#" className="btn-click">Delete</a>
                            <a href="index_t_reports.html" className="btn-click">Back</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <i className="more-less glyphicon glyphicon-plus"></i>
                        Term 2
                    </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                      <div className="panel-body">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th scope="col">STUDENT NAME</th>
                                <th scope="col">JANUARY</th>
                                <th scope="col">FEBRUARY</th>
                                <th scope="col">MARCH</th>
                                <th scope="col">AVERAGE</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>KAOSI MOREETSI DITEBO</td>
                                <td>86</td>
                                <td>66</td>
                                <td>72</td>
                                <td>84</td>
                              </tr>
                              <tr>
                                <td>RAJNANDINI GHOSH</td>
                                <td>74</td>
                                <td>72</td>
                                <td>87</td>
                                <td>78</td>
                              </tr>
                              <tr>
                                <td>LOAGO JOSEPH MATOME SEBOLA</td>
                                <td>67</td>
                                <td>66</td>
                                <td>72</td>
                                <td>69</td>
                              </tr>
                              <tr>
                                <td>SEKAO MAATLA PELAELO</td>
                                <td>64</td>
                                <td>66</td>
                                <td>76</td>
                                <td>73</td>
                              </tr>
                              <tr>
                                <td>AAKRITI GUPTA</td>
                                <td>75</td>
                                <td>66</td>
                                <td>62</td>
                                <td>67</td>
                              </tr>

                            </tbody>
                          </table>
                        </div>
                        <div className="row actions pr20">
                          <div className="col-md-12">
                            <a href="#" className="btn-click">Edit</a>
                            <a href="#" className="btn-click">Delete</a>
                            <a href="index_t_reports.html" className="btn-click">Back</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <i className="more-less glyphicon glyphicon-plus"></i>
                        Term 3
                    </a>
                      </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                      <div className="panel-body">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th scope="col">STUDENT NAME</th>
                                <th scope="col">JANUARY</th>
                                <th scope="col">FEBRUARY</th>
                                <th scope="col">MARCH</th>
                                <th scope="col">AVERAGE</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>KAOSI MOREETSI DITEBO</td>
                                <td>86</td>
                                <td>66</td>
                                <td>72</td>
                                <td>84</td>
                              </tr>
                              <tr>
                                <td>RAJNANDINI GHOSH</td>
                                <td>74</td>
                                <td>72</td>
                                <td>87</td>
                                <td>78</td>
                              </tr>
                              <tr>
                                <td>LOAGO JOSEPH MATOME SEBOLA</td>
                                <td>67</td>
                                <td>66</td>
                                <td>72</td>
                                <td>69</td>
                              </tr>
                              <tr>
                                <td>SEKAO MAATLA PELAELO</td>
                                <td>64</td>
                                <td>66</td>
                                <td>76</td>
                                <td>73</td>
                              </tr>
                              <tr>
                                <td>AAKRITI GUPTA</td>
                                <td>75</td>
                                <td>66</td>
                                <td>62</td>
                                <td>67</td>
                              </tr>

                            </tbody>
                          </table>
                        </div>
                        <div className="row actions pr20">
                          <div className="col-md-12">
                            <a href="#" className="btn-click">Edit</a>
                            <a href="#" className="btn-click">Delete</a>
                            <a href="index_t_reports.html" className="btn-click">Back</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div> */}
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default AssignmentsReportsByTerm;
