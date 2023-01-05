import React from "react"

const TransferenciaVenezuela=()=>{
    return(
        <>
            <div className="form-floating mb-3">
                <input required type="text" className="form-control" name="nameRemitente" id="nameRemitente" placeholder="jose"/>
                <label htmlFor="nameRemitente">Nombre Remitente</label>
            </div>
            <div className="form-floating mb-3">
                <input required type="number" className="form-control" name='ccRemitente' id="ccRemitente" placeholder="jose"/>
                <label htmlFor="ccRemitente">C.C Remitente</label>
            </div>
            <div className="form-floating mb-3">
                <input required type="text" className="form-control" name="nameReceptor" id="nameReceptor" placeholder="jose"/>
                <label htmlFor="nameReceptor">Nombre Receptor</label>
            </div>
            <div className="form-floating mb-3">
                <input required type="number" className="form-control" name="ccReceptor" id="ccReceptor" placeholder="jose"/>
                <label htmlFor="ccReceptor">C.C Receptor</label>
            </div>
            <div className="form-floating mb-3">
                <select className="form-select" id="typeDocument" name="typeDocument" aria-label="Floating label select example">
                    <option value="Venezolano">Venezolano</option>
                    <option value="Extranjero">Extranjero</option>
                </select>
                <label htmlFor="typeDocument">Tipo Documento</label>
            </div>
            <div className="form-floating mb-3">
                <input required type="text" className="form-control" name="destino" id="destinoGiro" placeholder="jose"/>
                <label htmlFor="destinoGiro">Destino</label>
            </div>
            <div className="form-floating mb-3">
                <input required type="number" className="form-control" name="numAccount" id="numCuenta" placeholder="jose"/>
                <label htmlFor="numCuenta">Numero Cuenta</label>
            </div>
            <div className="form-floating mb-3">
                <input required type="text" className="form-control" name="bench" id="nameBanco" placeholder="jose"/>
                <label htmlFor="nameBanco">Nombre Banco</label>
            </div>
            <div className="form-floating mb-3">
                <select className="form-select" id="typeCuenta" name="typeAccount" aria-label="Floating label select example">
                    <option value="Corriente">Corriente</option>
                    <option value="Ahorro">Ahorro</option>
                </select>
                <label htmlFor="typeCuenta">Tipo de Cuenta</label>
            </div>
        </>
    )
}


export {
    TransferenciaVenezuela
}