
import React from "react";
import TableHead from "./TableHead";
import { RowRecibo } from "./Row-Recibo";
import {headPines } from "../headsTables";
import { BodyTableSkeleton } from "../../../../skeletons/BodyTableSkeleton";
import { changeNumberToMoney } from "../../../../../services/chageNumberToMoney";

export default function TablePines({ type, receiptsAll , loading }) {
  return (
    <>
      <TableHead theads={headPines} />
      {loading && <BodyTableSkeleton length={headPines}/>}
      <tbody>
        {receiptsAll.map((r) => (
          <RowRecibo id={r.id} key={r.id} type={type}>
          <th scope="row">{r.id}</th>
          <td>{r.typeReceipt}</td>
          <td>{r.numPhone}</td>
          <td>{r.name}</td>
          <td>{r.email}</td>
          <td>{r.entidad}</td>
          <td>{changeNumberToMoney(r.value)}</td>
            <td>{changeNumberToMoney(r.comicion)}</td>
          <td>{r.date}</td>
          <td>{r.state?'Completado':'Pendiente'}</td>
          <td>{r.user.nickname}</td>
        </RowRecibo>
        ))}
      </tbody>
    </>
  );
}

      
 