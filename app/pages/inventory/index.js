import Layout from '../../components/layout'
import Search from '../../components/search'
import Pagination from '../../components/pagination'

export default function InventoryIndex() {
  return (
    <Layout>
      <h1>Raw Materials Inventory</h1>
      <Search />

      <form>
        <table className="table align-middle mx-2">
          <thead>
            <tr>
              <th scope="col" style={{ width: '10%' }}>
                Quantity
              </th>
              <th scope="col">Description</th>
              <th scope="col" className="text-end">
                <button type="button" className="btn btn-sm btn-primary me-2">
                  Print All
                </button>
                <button type="button" className="btn btn-sm btn-primary">
                  Print Mins
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-25">
                <input type="number" className="form-control" id="quantity" />
              </td>
              <td colSpan="2">Brand Flavor Nic Size</td>
            </tr>
            <tr>
              <td className="w-25">
                <input type="number" className="form-control" id="quantity" />
              </td>
              <td colSpan="2">VS Nicotine</td>
            </tr>
            <tr>
              <td className="w-25">
                <input type="number" className="form-control" id="quantity" />
              </td>
              <td colSpan="2">Brand Flavor</td>
            </tr>
            <tr>
              <td className="w-25">
                <input type="number" className="form-control" id="quantity" />
              </td>
              <td colSpan="2">PG</td>
            </tr>
            <tr>
              <td className="w-25">
                <input type="number" className="form-control" id="quantity" />
              </td>
              <td colSpan="2">VG</td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex justify-content-between">
          <div>
            <button type="button" className="btn btn-sm btn-primary">
              Save
            </button>
          </div>

          <Pagination />
        </div>
      </form>
    </Layout>
  )
}
