import Link from 'next/link'
import Layout from '../../components/layout'
import Pagination from '../../components/pagination'
import Search from '../../components/search'
import TableButtons from '../../components/table-buttons'

export default function RecipesIndex() {
  return (
    <Layout>
      <h1>Recipes</h1>
      <Search />

      <table className="table align-middle mx-auto">
        <tbody>
          <tr>
            <td>Nicotine</td>
            <td>Size</td>
            <td>Flavor</td>
            <td className="text-end">
              <TableButtons />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="d-flex justify-content-between">
        <Link href="/">
          <a>
            <small>View inactive recipes</small>
          </a>
        </Link>

        <Pagination />
      </div>
    </Layout>
  )
}
