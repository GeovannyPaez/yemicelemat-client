
import React from "react";

import { BodyTableSkeleton } from "../../../../skeletons/BodyTableSkeleton";
import { headGiros } from "../headsTables";
import { RowRecibo } from "../TablasRecargas/Row-Recibo";
import TableHead from "../TablasRecargas/TableHead";

export default function TableGiros({ type, receiptsAll , loading }) {
  return (
    <>
      <TableHead theads={headGiros} />
      {loading && <BodyTableSkeleton length={headGiros}/>}
      <tbody>
        {receiptsAll.map((r) => (
          <RowRecibo key={r.id} id={r.id} type={type}>
            <th scope="row">{r.id}</th>
            <td>{r.typeReceipt}</td>
            <td>{r.nameRemitente}</td>
            <td>{r.ccRemitente}</td>
            <td>{r.nameReceptor}</td>
            <td>{r.ccReceptor}</td>
            <td>{r.destino}</td>
            <td>{r.entidad}</td>
            <td>{r.value}</td>
            <td>{r.comicion}</td>
            <td>{r.date}</td>
            <td>{r.state ? "Completado" : "Pendiente"}</td>
            <td>{r.user.nickname}</td>
          </RowRecibo>
        ))}
      </tbody>
    </>
  );
}
