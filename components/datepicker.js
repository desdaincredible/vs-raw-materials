import { useState } from 'react'
import DatePicker from 'react-datepicker'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

export default function AdverseReactionsIndex() {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <div className="input-group mb-3">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="form-control datepicker"
        aria-describedBy="datepickerIcon"
      />

      <span className="input-group-text" id="datepickerIcon">
        <FontAwesomeIcon icon={faCalendarAlt} />
      </span>
    </div>
  )
}
