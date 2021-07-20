import Layout from "../../components/layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";

const RecipesNew = () => {
  return (
    <Layout>
      <h1>Recipes</h1>
      <form>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="name" />

        <div className="row mt-2">
          <div className="col">
            <label htmlFor="mg" className="form-label">
              Nicotine
            </label>
            <select className="form-select" aria-label="nicotine">
              <option value="0">0mg</option>
              <option value="3">3mg</option>
              <option value="6">6mg</option>
              <option value="12">12mg</option>
              <option value="18">18mg</option>
              <option value="24">24mg</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="Size" className="form-label">
              Size
            </label>
            <select className="form-select" aria-label="size">
              <option value="20">20mL</option>
              <option value="120">120mL</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="VG" className="form-label">
              VG
            </label>
            <input type="number" className="form-control" id="VG" />
          </div>
          <div className="col">
            <label htmlFor="PG" className="form-label">
              PG
            </label>
            <input type="number" className="form-control" id="PG" />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <label htmlFor="Flavor" className="form-label">
              Flavor
            </label>
            <select className="form-select" aria-label="flavor">
              <option value="1">Strawberry</option>
              <option value="2">Other</option>
            </select>
            {/* if other, swap for input */}
            {/* <input type="text" className="form-control" id="Flavor" /> */}
          </div>
          <div className="col">
            <label htmlFor="mL" className="form-label">
              mL
            </label>
            <input type="number" className="form-control" id="mL" />
          </div>
          <div className="col-sm-1">
            <button
              type="button"
              className="btn btn-sm btn-dark"
              style={{ marginTop: "2.65em" }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
        <div className="my-2 text-center">
          <button type="button" className="btn btn-sm btn-dark">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default RecipesNew;
