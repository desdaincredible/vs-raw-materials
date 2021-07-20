import Layout from "../../../components/layout";
import TableButtons from "../../../components/table-buttons";
import Pagination from "../../../components/pagination";

const QualityVerification = () => {
  return (
    <Layout>
      <h1>Quality Verification</h1>

      <div className="w-50 mx-auto">
        <table className="table align-middle mx-2">
          <tbody>
            <tr>
              <th scope="row">11/11/2021</th>
              <td className="text-end">
                <TableButtons
                  showEdit={false}
                  showDelete={false}
                  showExportCSV={true}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">11/11/2021</th>
              <td className="text-end">
                <TableButtons
                  showEdit={false}
                  showDelete={false}
                  showExportCSV={true}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">11/11/2021</th>
              <td className="text-end">
                <TableButtons
                  showEdit={false}
                  showDelete={false}
                  showExportCSV={true}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <Pagination />
      </div>
    </Layout>
  );
};

export default QualityVerification;
