import React from 'react'

export const Selects = ({arrayValues,id,name,onChange,}) => {
  return (
    <select
         className="form-select"
        id={id}
                name={name}
                aria-label="Floating label select example"
                onChange={(e) => {
                    onChange(e.target.value);
                }}
              >
                {arrayValues.map(option=><option key={option} value={option}>{option}</option>)}
    </select>
  )
}
