import Layout from "../../components/layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ReportsView = () => {
  return (
    <Layout>
      <h1>Reports</h1>
      <div className="d-flex justify-content-between">
        <h2>Date</h2>
        <div>
          <button type="button" className="btn btn-sm btn-primary mx-2">
            Edit
          </button>
          <button type="button" className="btn btn-sm btn-primary me-2">
            Print
          </button>
          <button type="button" className="btn btn-sm btn-dark">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Totals</h5>
          <div className="row">
            <div className="col pe-4 right-border">
              <table className="table align-middle mx-2">
                <tbody>
                  <tr>
                    <td>30 ml Vapor Shop</td>
                    <td>Quantity</td>
                  </tr>
                  <tr>
                    <td>30 ml Vapor Shop</td>
                    <td>Quantity</td>
                  </tr>
                  <tr>
                    <td>30 ml Vapor Shop</td>
                    <td>Quantity</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col">
              <table className="table align-middle mx-2">
                <tbody>
                  <tr>
                    <td>30 ml Vapor Shop</td>
                    <td>Quantity</td>
                  </tr>
                  <tr>
                    <td>30 ml Vapor Shop</td>
                    <td>Quantity</td>
                  </tr>
                  <tr>
                    <td>30 ml Vapor Shop</td>
                    <td>Quantity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <table className="table align-middle mx-2">
        <thead>
          <tr>
            <th scope="col">Quantity</th>
            <th scope="col">Nicotine</th>
            <th scope="col">Size</th>
            <th scope="col">Flavor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Quantity</td>
            <td>Nicotine</td>
            <td>Size</td>
            <td>Flavor</td>
          </tr>
        </tbody>
      </table>

      <button type="button" className="btn btn-sm btn-primary">
        Verify
      </button>

      <style jsx>
        {`
          .right-border {
            border-right: solid 1px lightgrey;
          }
        `}
      </style>
    </Layout>
  );
};

export default ReportsView;
