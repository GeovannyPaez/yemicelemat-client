export const BodyPines = ({ recibo }) => {
  return (
    <>
      <p><strong>Nombre: </strong>{recibo.name}</p>
      <p><strong>E-mail: </strong>{recibo.email}</p>
      <p><strong>Entidad: </strong>{recibo.entidad}</p>
    </>
  );
};
