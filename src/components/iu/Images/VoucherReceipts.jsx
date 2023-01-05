import React from 'react'

export const VoucherReceipts = ({url}) => {
  return (
    <div className='row text-center'>
        <div className="col-6">
            <img src={url} alt="Comprobante del recibo  img-fluid"  />
        </div>
    </div>
  )
}
