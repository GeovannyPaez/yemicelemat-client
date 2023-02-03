import React from "react";
import TableHead from "./TableHead";
import { RowRecibo } from "./Row-Recibo";
import {headCelular } from "../headsTables";
import { BodyTableSkeleton } from "../../../../skeletons/BodyTableSkeleton";
import { changeNumberToMoney } from "../../../../../services/chageNumberToMoney";
import parseDate from "../../../../../services/formatToDate";
export default function TableCelular({ type, receiptsAll , loading }) {

  return (
    <>
      <TableHead theads={headCelular} />
      {loading && <BodyTableSkeleton length={headCelular}/>}
      <tbody>
        {receiptsAll.map((r) => (
          <RowRecibo key={r.id+'celular'} id={r.id} type={type}>
            <th scope="row">{r.id}</th>
            <td>{r.typeReceipt}</td>
            <td>{r.numPhone}</td>
            <td>{r.operador}</td>
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
