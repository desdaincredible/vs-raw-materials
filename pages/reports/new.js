import Layout from '../../components/layout'
import Datepicker from '../../components/datepicker'
import CSVReader from '../../components/csv-reader'

export default function ReportsNew() {
  return (
    <Layout>
      <h1>Reports</h1>
      <h1>IS THIS WORKING?</h1>

      <strong className="text-uppercase">Upload Purchase Order</strong>
      <p className="small text-muted">exported from Rain</p>

      <div className="my-2">
        <Datepicker />
      </div>
      <CSVReader />
    </Layout>
  )
}
