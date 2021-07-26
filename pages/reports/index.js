import Layout from "../../components/layout";
import Search from "../../components/search";
import TableButtons from "../../components/table-buttons";
import Pagination from "../../components/pagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const ReportsIndex = () => {
  // TODO: programmatically determine table contents and pagination
  return (
    <Layout>
      <h1>Reports</h1>

      <Search />

      <div className="w-50 mx-auto">
        <div className="d-flex justify-content-end my-auto">
          SORT
          <FontAwesomeIcon icon={faCaretDown} className="m-1" />
        </div>
        <table className="table align-middle mx-2">
          <tbody>
            <tr>
              <th scope="row">11/11/2021</th>
              <td className="text-end">
                <TableButtons />
              </td>
            </tr>
            <tr>
              <th scope="row">11/11/2021</th>
              <td className="text-end">
                <TableButtons />
              </td>
            </tr>
            <tr>
              <th scope="row">11/11/2021</th>
              <td className="text-end">
                <TableButtons />
              </td>
            </tr>
          </tbody>
        </table>

        <Pagination />
      </div>
    </Layout>
  );
};

module.exports = { ReportsIndex };
