import React, {  useReducer,useEffect  } from "react";
import {   Spinner } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useReceiptApi } from "../hooks/useReceiptApi";
import { CarBody } from "../components/DetailRecibo/CarBody/CarBody";


export function ViewDetailRecibo() {
  const { receipt: dataParams } = useParams();
  const [path, id] = dataParams.split("-");
  const [{ receipt, loading,refresh }, { getOne,uploadVoucher, setRefresh,deleteReceipt}] = useReceiptApi();

  useEffect(() => {
    if (!id && !path && !refresh) {
      return;
    }
    getOne({ path, id });
    setRefresh(false)
  }, [id,refresh]);
  const onDeleteReceipt=()=>{
    deleteReceipt(path,id);
  }
  return (
    <>
        <div className="row">
          <div className={`col-12 col-sm-7  'col-md-10'  m-auto`}>
            <Card className=" mt-5 flex-column justify-content-center p-2 flex-lg-row detailReceipt ">
              {loading ? <Spinner  animation="border"/> : <CarBody receipt={receipt} setRefresh={setRefresh} uploadVoucher={uploadVoucher} deleteReceipt={onDeleteReceipt}/>}
            </Card>
          </div>
        </div>
    </>
  );
}