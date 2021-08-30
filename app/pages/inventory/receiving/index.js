import Layout from '../../../components/layout'
import Datepicker from '../../../components/datepicker'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Receiving() {
  return (
    <Layout>
      <h1>Receiving</h1>
      <Datepicker />

      <form>
        <table className="table align-middle mx-2">
          <thead>
            <tr>
              <th scope="col" style={{ width: '10%' }}>
                Quantity
              </th>
              <th scope="col">Product</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="number" className="form-control" id="quantity" />
              </td>
              <td>
                <select className="form-select" aria-label="product">
                  <option value="1">Product 1</option>
                  <option value="2">Product 2</option>
                </select>
              </td>
              <td className="text-end">
                <button type="button" className="btn btn-sm btn-dark me-2">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </td>
            </tr>
            <tr>
              <td className="my-2 text-center" colSpan="3">
                <button type="button" className="btn btn-sm btn-dark">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex justify-content-between">
          <div>
            <button type="button" className="btn btn-sm btn-primary">
              Save
            </button>
          </div>
        </div>
      </form>
    </Layout>
  )
}
