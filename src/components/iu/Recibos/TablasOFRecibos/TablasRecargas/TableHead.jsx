import React from 'react'

export default function TableHead({theads}) {

  return (
    <thead className='table-dark'>
        <tr>
            {theads.map(element => {
                return <th scope='col' key={element}>{element}</th>
            })
            }
        </tr>
    </thead>
    
  )
}
