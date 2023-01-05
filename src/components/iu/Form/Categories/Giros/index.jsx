import React from "react"

const Giros=()=>{
    return(
        <>
            <div className="form-floating mb-3">
                <input required type="text" className="form-control" name="nameRemitente"  id="nameRemitente" placeholder="jose"/>
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
                <input required type="text" className="form-control" name="destino" id="destinoGiro" placeholder="jose"/>
                <label htmlFor="destinoGiro">Destino</label>
            </div>
            <div className="form-floating mb-3">
                <select className="form-select" id="entidadGiro" name="entidad" aria-label="Floating label select example">
                    <option value="Su Red">Su Red</option>
                    <option value="Efecty">Efecty</option>
                </select>
                <label htmlFor="entidadGiro">Entnamead</label>
            </div>
        </>
    )
}


export {
    Giros
}