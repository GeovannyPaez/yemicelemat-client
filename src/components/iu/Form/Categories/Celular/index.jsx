import React from "react";
import { useState } from "react";
import { Selects } from "../../Selects";

function Celular() {
    const [otherOperador,setOtherOperador]= useState(false);
  return (
    <>
      <div className="form-floating mb-3">
        { otherOperador !=='Otro' && (
         <>
          <Selects
            arrayValues={arrayEntidadRecargas}
            id={"Operador"}
            name={"operador"}
            onChange={setOtherOperador}
          />
          <label htmlFor="operdor">Operador</label>
         </>
        )}
        {otherOperador == 'Otro' && (
          <div className="form-floating mb-3">
            <input
              required
              type="text"
              name="operador"
              className="form-control"
              id="operador"
              placeholder="otor operador"
            />
            <label htmlFor="operdor">Operador</label>
          </div>
          
        )}
        
      </div>
    </>
  );
}

const arrayEntidadRecargas=["Claro","Wom","Movistar","Otro"]
export  {Celular};
