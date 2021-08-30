import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function TableButtons({
  showView = true,
  showEdit = true,
  showDelete = true,
  showExportCSV = false,
}) {
  return (
    <>
      <button
        type="button"
        className="btn btn-sm btn-primary me-2"
        hidden={!showView}
      >
        View
      </button>
      <button
        type="button"
        className="btn btn-sm btn-primary me-2"
        hidden={!showEdit}
      >
        Edit
      </button>
      <button
        type="button"
        className="btn btn-sm btn-dark me-2"
        hidden={!showDelete}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <button
        type="button"
        className="btn btn-sm btn-primary"
        hidden={!showExportCSV}
      >
        Export CSV
      </button>
    </>
  )
}
