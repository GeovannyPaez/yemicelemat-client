import React from "react";
import { useParams } from "react-router-dom";
import TableGiros from "./TableGiros";
import TableFreefire from "./TablasRecargas/Freefire";
import TablePines from "./TablasRecargas/Pines";
import TableCelular from "./TablasRecargas/TabelCelular";
import TableVenezuela from "./TableVenezuela";
import TableConsignaciones from "./TableConsignaciones";
import { useReceiptApi } from "../../../../hooks/useReceiptApi";
import { AcordionInfo } from "../../../InfoReceipts/AcordionInfo";
import { Search } from "../../Form/Search";
import { SplitButtonFilter } from "../../Buttons/SplitButtonFilter";
import { NotFountReceipts } from "../../NotFounts/NotFountReceipts";
import TableRetiros from "./TableRetiros";
import { AccordionInfoRetiros } from "../../../InfoReceipts/AccordionInfoRetiros";

export default function ContainerRecibos() {
  const { type } = useParams();
  const [
    { receiptsAll, infoReceipts, loading },
    { getSearchById, getReceiptsByOptions },
  ] = useReceiptApi(type);
  return (
    <>
      <div className="row align-items-center justify-content-between">
        <Search getSearchById={getSearchById} />
        <div className="col-12 col-sm-6">
          <SplitButtonFilter getReceiptsByOptions={getReceiptsByOptions} />
        </div>
      </div>
      <div className="table-responsive mb-5">
        <table className="table caption-top table-striped table-hover">
          <caption>{type.toUpperCase()}</caption>
          {type === "celular" && (
            <TableCelular
              type={type}
              receiptsAll={receiptsAll}
              loading={loading}
            />
          )}
          {type === "freefire" && (
            <TableFreefire
              type={type}
              receiptsAll={receiptsAll}
              loading={loading}
            />
          )}
          {type === "pines" && (
            <TablePines
              type={type}
              receiptsAll={receiptsAll}
              loading={loading}
            />
          )}
          {type === "venezuela" && (
            <TableVenezuela
              type={type}
              receiptsAll={receiptsAll}
              loading={loading}
            />
          )}
          {type === "giros" && (
            <TableGiros
              type={type}
              receiptsAll={receiptsAll}
              loading={loading}
            />
          )}
          {type === "consignaciones" && (
            <TableConsignaciones
              type={type}
              receiptsAll={receiptsAll}
              loading={loading}
            />
          )}
          {type === "retiros" && (
            <TableRetiros
              loading={loading}
              receiptsAll={receiptsAll}
              type={type}
            />
          )}
        </table>
        {receiptsAll.length === 0 && <NotFountReceipts />}
      </div>
      {type === "retiros" ? (
        <AccordionInfoRetiros loading={loading} infoReceipts={infoReceipts} />
      ) : (
        <AcordionInfo infoReceipts={infoReceipts} loading={loading} />
      )}
    </>
  );
}
