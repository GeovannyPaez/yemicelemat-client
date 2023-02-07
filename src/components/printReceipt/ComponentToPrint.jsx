import React from "react";


class ComponetToPrint extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="container">
          <div className="row  text-center">
            <div className="col shadow-sm p-3  bg-body rounded">
              <h3>Multiservicios</h3>
              <h4>Yemicelemat</h4>
            </div>
          </div>
          <div className="row text-center">
              <div className="col">
                {this.props.children}
              </div>
          </div>
          <p className="text-center">Observaciones, dudas e inquietudes a la linea +57 3145089366</p>
        </div>
      );
    }
  }

  export {ComponetToPrint}