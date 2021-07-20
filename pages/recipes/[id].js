import Layout from "../../components/layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const RecipesView = () => {
  return (
    <Layout>
      <h1>Recipes</h1>
      <div className="d-flex justify-content-between">
        <h2>Name</h2>
        <div>
          <button type="button" className="btn btn-sm btn-primary mx-2">
            Edit
          </button>
          <button type="button" className="btn btn-sm btn-primary me-2">
            Inventory
          </button>
          <button type="button" className="btn btn-sm btn-dark">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>

      <table className="table align-middle mx-2">
        <thead>
          <tr>
            <th scope="col">Nicotine</th>
            <th scope="col">Size</th>
            <th scope="col">VG</th>
            <th scope="col">PG</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>mg</td>
            <td>mL</td>
            <td>mL</td>
            <td>mL</td>
          </tr>
        </tbody>
      </table>

      <table className="table align-middle w-50 mx-auto">
        <thead>
          <tr>
            <th scope="col">Flavor</th>
            <th scope="col" className="col-sm-1">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flavor Name</td>
            <td>mL</td>
          </tr>
        </tbody>
      </table>

      <style jsx>
        {`
          .right-border {
            border-right: solid 1px lightgrey;
          }
        `}
      </style>
    </Layout>
  );
};

export default RecipesView;
