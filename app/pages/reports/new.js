import Layout from '../../components/layout';
import Datepicker from '../../components/datepicker';
import CSVReader from '../../components/csv-reader';
import { Button } from 'reactstrap';
import Link from 'next/link';

export default function ReportsNew() {
  const upload = async (e) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/uploadCSV`);
    const data = await res.json();
    console.log(res);

    if (!data) {
      return {
        notFound: true,
      };
    }
  };

  return (
    <Layout>
      <h1>Reports</h1>
      <strong className="text-uppercase">Upload Purchase Order</strong>
      <p className="small text-muted">exported from Rain</p>

      <div className="my-2">
        <Datepicker />
      </div>
      <CSVReader />
      <Link href="http://localhost:3000/reports/new/">
        <a
          onClick={(e) => {
            upload();
          }}
        >
          <Button>Click Me</Button>
        </a>
      </Link>
    </Layout>
  );
}
