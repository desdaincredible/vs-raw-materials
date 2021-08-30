import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
  return (
    <form>
      <div className="w-50 mx-auto my-3 d-flex">
        <div className="input-group input-group-sm">
          <label htmlFor="search" className="form-label my-auto">
            Search
          </label>
          <input type="text" className="form-control ms-2" id="search" />
          <button type="submit" className="btn btn-dark">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </form>
  )
}
