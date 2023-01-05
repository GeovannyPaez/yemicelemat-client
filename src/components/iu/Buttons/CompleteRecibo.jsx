import React, { useState } from "react";
import { useRef } from "react";
import { Alert, Button } from "react-bootstrap";
import { ButtonComplete } from "./ButtonComplete";
export const CompleteRecibo = ( {uploadVoucher, stateReceipt}) => {
  const [error, setError] = useState(false);
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    if(files[0].type.startsWith('image/')){
      data.append("file", files[0]);
      data.append("upload_preset", "Yemicelemat");
      uploadVoucher(data)
    }else{
      setError(true)
    }
  }
  const Input= useRef(null);

    const onHandleClickFile=()=>Input.current.click();
  return (
    <>
      <input
        className="form-control form-control-sm"
        id="formFileSm"
        type="file"
        ref={Input}
        accept="image/*"
        onChange={uploadImage}
      />
     
      {error&& <Alert variant="danger">El archivo debe ser una imagen</Alert>}
    <div className=""> <ButtonComplete stateReceipt={stateReceipt}  onClick={onHandleClickFile}/></div>
  </>
  );
};
