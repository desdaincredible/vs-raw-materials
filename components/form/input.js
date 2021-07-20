import { useState } from 'react'
import { Input, Label } from 'reactstrap'

function InputBox({ value, setValue, label, type }) {
  const [data, setData] = useState(value)

  return (
    <>
      <Label htmlFor={label} className="form-Label">
        {label}
      </Label>
      <Input
        type={type}
        id={label}
        value={data}
        onChange={(e) => {
          setData(e.target.value)
          setValue(e.target.value)
        }}
        className="form-control"
      />
    </>
  )
}

export default InputBox
