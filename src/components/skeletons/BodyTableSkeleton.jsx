import React from 'react'

export const BodyTableSkeleton = ({length}) => {
  return (
   
    <tbody className='skeletonTableContainer'>
        <tr>
            {length.map(i=> <td key={i +'wdw'}></td> )}
        </tr>
        <tr>
            {length.map(i=> <td key={i +'wdw'}></td> )}
        </tr>
        <tr>
            {length.map(i=> <td key={i +'wdw'}></td> )}
        </tr>
        <tr>
            {length.map(i=> <td key={i +'wdw'}></td> )}
        </tr>
        <tr>
            {length.map(i=> <td key={i +'wdw'}></td> )}
        </tr>
    </tbody>
   
  )
}
