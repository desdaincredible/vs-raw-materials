import Datepicker from "../../components/datepicker";

import Layout from "../../components/layout";
import TableButtons from "../../components/table-buttons";
import Pagination from "../../components/pagination";

const AdverseReactionsIndex = () => {
  return (
    <Layout>
      <div className="d-flex justify-content-between">
        <h1>Adverse Effects</h1>
        <div className="my-auto">
          <button type="button" className="btn btn-sm btn-primary">
            Print
          </button>
        </div>
      </div>
      <form>
        <div className="row mb-3">
          <div className="col-sm-3" style={{ width: "22%" }}>
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <Datepicker />
          </div>
          <div className="col-sm-4">
            <label htmlFor="reason" className="form-label">
              Reason
            </label>
            <select className="form-select" aria-label="size">
              <option value="1">Quality Issue</option>
              <option value="2">Incorrect Flavor</option>
              <option value="3">Incorrect Nicotine</option>
              <option value="3">Allergic Reaction</option>
              <option value="3">Other</option>
            </select>
          </div>
          <div className="col-sm-4">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              rows="1"
              type="number"
              className="form-control"
              id="description"
            />
          </div>
          <div className="col text-end">
            <button
              type="button"
              className="btn btn-sm btn-primary"
              style={{ marginTop: "2.65em" }}
            >
              Save
            </button>
          </div>
        </div>
      </form>
      <table className="table align-middle mx-auto">
        <tbody>
          <tr>
            <td>Date</td>
            <td>Reason</td>
            <td>Description</td>
            <td className="text-end">
              <TableButtons showView={false} />
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination />
    </Layout>
  );
};

module.exports = AdverseReactionsIndex;
