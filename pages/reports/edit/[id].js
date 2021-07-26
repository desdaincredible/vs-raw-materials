import Link from 'next/link'

import Layout from '../../../components/layout'
import Datepicker from '../../../components/datepicker'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function ReportsEdit() {
  return (
    <Layout>
      <h1>Reports</h1>
      <Datepicker />

      <form>
        <table className="table align-middle align-middle mx-2">
          <thead>
            <tr>
              <th scope="col" style={{ width: '10%' }}>
                Quantity
              </th>
              <th scope="col">Nicotine</th>
              <th scope="col">Size</th>
              <th scope="col">Flavor</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="number" className="form-control" id="quantity" />
              </td>
              <td>
                <select className="form-select" aria-label="nicotine">
                  <option value="0">0mg</option>
                  <option value="3">3mg</option>
                  <option value="6">6mg</option>
                  <option value="12">12mg</option>
                  <option value="18">18mg</option>
                  <option value="24">24mg</option>
                </select>
              </td>
              <td>
                <select className="form-select" aria-label="size">
                  <option value="20">20mL</option>
                  <option value="120">120mL</option>
                </select>
              </td>
              <td>
                <select className="form-select" aria-label="flavor">
                  <option value="1">Abbicake</option>
                  <option value="2">Aloha</option>
                </select>
                {/* if other, swap for input */}
                {/* <input type="text" className="form-control" id="Flavor" /> */}
              </td>
              <td className="text-end">
                <Link href="/">
                  <a>View Recipe</a>
                </Link>
                <button type="button" className="btn btn-sm btn-dark ms-3">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </td>
            </tr>
            <tr>
              <td className="my-2 text-center" colSpan="5">
                <button type="button" className="btn btn-sm btn-dark">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" className="btn btn-sm btn-primary">
          Save
        </button>
      </form>
    </Layout>
  )
}
