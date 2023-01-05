import React from "react"

const Consignaciones=()=>{
    return(
        <>
        <div className="form-floating mb-3">
                <input required type="number"  className="form-control" name="numAccount" placeholder="3205415512"/>
                <label htmlFor="numCuenta">Numero De Cuenta</label>
            </div>
            <div className="form-floating mb-3">
                <select className="form-select" name="typeAccount" aria-label="Floating label select example">
                    <option value="Conrriente">Corriente</option>
                    <option value="Ahorro">Ahorro</option>
                </select>
                <label htmlFor="typeAccount">Bancos</label>
            </div>
            <div className="form-floating mb-3">
                <input required type="text" className="form-control" name="name" placeholder="jose"/>
                <label htmlFor="name">Nombre</label>
            </div>
            <div className="form-floating mb-3">
                <input required type="number"  className="form-control" name="cc" placeholder="653511615"/>
                <label htmlFor="cc">Numero Cedula</label>
            </div>
            <div className="form-floating mb-3">
                <select className="form-select" name="bench" aria-label="Floating label select example">
                    <option value="Nequi">Nequi</option>
                    <option value="Daviplata">Daviplata</option>
                    <option value="Bancolombia">Bancolombia</option>
                </select>
                <label htmlFor="consignacionBanco">Bancos</label>
            </div>
        </>
    )
}


export {Consignaciones}