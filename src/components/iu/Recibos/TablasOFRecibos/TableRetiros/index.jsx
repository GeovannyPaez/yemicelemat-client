
import React from "react";
import { changeNumberToMoney } from "../../../../../services/chageNumberToMoney";
import parseDate from "../../../../../services/formatToDate";

import { BodyTableSkeleton } from "../../../../skeletons/BodyTableSkeleton";
import { headRetiros } from "../headsTables";
import { RowRecibo } from "../TablasRecargas/Row-Recibo";
import TableHead from "../TablasRecargas/TableHead";
export default function TableRetiros({ type, receiptsAll , loading }) {
  return (
    <>
      <TableHead theads={headRetiros} />
      {loading && <BodyTableSkeleton length={headRetiros}/>}
      <tbody>
        {receiptsAll.map((r) => (
          <RowRecibo key={r.id} id={r.id} type={type}>
            <th scope="row">{r.id}</th>
            <td>{r.typeReceipt}</td>
            <td>{r.bench}</td>
            <td>{r.numberReceipt}</td>
            <td>{changeNumberToMoney(Number(r.totalReceived))}</td>
            <td>{changeNumberToMoney(Number(r.totalDelivered))}</td>
            <td>{parseDate(r.date)}</td>
            <td>{r.state ? "Completado" : "Pendiente"}</td>
            <td>{r.user.nickname}</td>
          </RowRecibo>
        ))}
      </tbody>
    </>
  );
}
