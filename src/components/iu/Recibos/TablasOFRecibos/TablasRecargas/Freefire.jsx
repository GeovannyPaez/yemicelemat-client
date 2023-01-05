import React, { useContext, useEffect } from "react";
import TableHead from "./TableHead";
import { RowRecibo } from "./Row-Recibo";
import { headFreefire } from "../headsTables";
import { BodyTableSkeleton } from "../../../../skeletons/BodyTableSkeleton";


export default function TableFreefire({ type, receiptsAll , loading }) {
  
  return (
    <>
      <TableHead theads={headFreefire} />
      {loading && <BodyTableSkeleton length={headFreefire} />}
        <tbody>
          {receiptsAll.map((r) => (
            <RowRecibo key={r.id} id={r.id} type={type}>
              <th scope="row">{r.id}</th>
              <td>{r.typeReceipt}</td>
              <td>{r.idFreefire}</td>
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
