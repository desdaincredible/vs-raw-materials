import Layout from "../../components/layout";
import Datepicker from "../../components/datepicker";
import CSVReader from "../../components/csv-reader";

const ReportsNew = () => {
  return (
    <Layout>
      <h1>Reports</h1>

      <strong className="text-uppercase">Upload Purchase Order</strong>
      <p className="small text-muted">exported from Rain</p>

      <div className="my-2">
        <Datepicker />
      </div>
      <CSVReader />
    </Layout>
  );
};

module.exports = ReportsNew;
