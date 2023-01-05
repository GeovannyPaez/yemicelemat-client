import React from "react";


class ComponetToPrint extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="container">
          <div className="row  text-center">
            <div className="col shadow-sm p-3 mb-5 bg-body rounded">
              <h3>YEMICELEMAT</h3>
              <h3>Sucursal de pago de facturas</h3>
              <h4>San Martin</h4>
            </div>
          </div>
          <div className="row text-center">
              <div className="col">
                {this.props.children}
              </div>
          </div>
          <p className="text-center">Observaciones, dudas e inquietudes a la linea 3145089366</p>
        </div>
      );
    }
  }

  export {ComponetToPrint}