import React from "react";
import { changeNumberToMoney } from "../../../../../services/chageNumberToMoney";
import parseDate from "../../../../../services/formatToDate";
import { BodyTableSkeleton } from "../../../../skeletons/BodyTableSkeleton";
import { headConsignaciones } from "../headsTables";
import { RowRecibo } from "../TablasRecargas/Row-Recibo";
import TableHead from "../TablasRecargas/TableHead";

export default function TableConsignaciones({ type, receiptsAll , loading }) {
  return (
    <>
      <TableHead theads={headConsignaciones} />
      {loading && <BodyTableSkeleton length={headConsignaciones}/>}
      <tbody>
        {receiptsAll.map((r) => (
          <RowRecibo key={r.id} id={r.id} type={type}>
          <th scope="row">{r.id}</th>
          <td>{r.typeReceipt}</td>
          <td>{r.numAccount}</td>
          <td>{r.name}</td> 
          <td>{r.bench}</td>
          <td>{changeNumberToMoney(Number(r.value))}</td>
            <td>{changeNumberToMoney(r.comicion)}</td>
          <td>{parseDate(r.date)}</td>
          <td>{r.state?'Completado':'Pendiente'}</td>
          <td>{r.user.nickname}</td>
      </RowRecibo>

        ))}
      </tbody>
    </>
  );
}


