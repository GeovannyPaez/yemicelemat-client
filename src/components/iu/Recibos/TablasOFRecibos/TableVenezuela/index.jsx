import React from "react";
import { changeNumberToMoney } from "../../../../../services/chageNumberToMoney";
import parseDate from "../../../../../services/formatToDate";
import { BodyTableSkeleton } from "../../../../skeletons/BodyTableSkeleton";
import { headVenezuela } from "../headsTables";
import { RowRecibo } from "../TablasRecargas/Row-Recibo";
import TableHead from "../TablasRecargas/TableHead";

export default function TableVenezuela({ type, receiptsAll , loading }) {
  return (
    <>
      <TableHead theads={headVenezuela} />
      {loading && <BodyTableSkeleton length={headVenezuela}/>}
      <tbody>
        {receiptsAll.map((r) => (
          <RowRecibo key={r.id} id={r.id} type={type}>
            <th scope="row">{r.id}</th>
            <td>{r.typeReceipt}</td>
            <td>{r.nameRemitente}</td>
            <td>{r.ccRemitente}</td>
            <td>{r.nameReceptor}</td>
            <td>{r.ccReceptor}</td>
            <td>{r.typeDocument}</td>
            <td>{r.destino}</td>
            <td>{r.numAccount}</td>
            <td>{r.bench}</td>
            <td>{r.typeAccount}</td>
            <td>{changeNumberToMoney(Number(r.value))}</td>
            <td>{changeNumberToMoney(r.comicion)}</td>
            <td>{parseDate(r.date)}</td>
            <td>{r.state ? "Completado" : "Pendiente"}</td>
            <td>{r.user.nickname}</td>
          </RowRecibo>
        ))}
      </tbody>
    </>
  );
}
