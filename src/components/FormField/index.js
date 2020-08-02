import React from 'react'

const FormField = ({label, type, name, value, onChange}) => {
  return (
    <div>
          <label>
            <span>{label}: </span>
            <input type={type} name={name} value={value} onChange={onChange}/>
          </label>
        </div>
  )
}

export default FormField