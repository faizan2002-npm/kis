import SiteSetting from "../../Constants/SiteSetting";
import Layout from "../../Components/Layout";
import TableTools from "../../Components/TableTools";
import { useState } from "react";
import { Link } from "react-router-dom";
function TestsReportsByTerms(props) {
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
      </Layout>
    </>
  );
}

export default TestsReportsByTerms;
