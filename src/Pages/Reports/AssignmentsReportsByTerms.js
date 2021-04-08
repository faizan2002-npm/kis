import SiteSetting from "../../Constants/SiteSetting";
import Layout from "../../Components/Layout";
import TableTools from "../../Components/TableTools";
import { useState } from "react";
import { Link } from "react-router-dom";
import Collapsible from 'react-collapsible';

function AssignmentsReportsByTerms(props) {
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
                <Collapsible trigger="Start here 1">
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
    </Collapsible>
    <Collapsible trigger="Start here 2">
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
    </Collapsible>
    <Collapsible trigger="Start here 3">
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
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

export default AssignmentsReportsByTerms;
