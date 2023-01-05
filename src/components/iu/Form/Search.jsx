import React from "react";

export const Search = ({getSearchById}) => {
  const onSearchReceipts=(e)=>{
    getSearchById(e.target.value)
  }
  return (
    <div className="col-12 col-md-6 mt-3">
      <form className="d-flex">
        <input
          onChange={onSearchReceipts}
          className="form-control me-2"
          type="number"
          placeholder="busqueda por id de recibo"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
            Buscar
        </button>
      </form>
    </div>
  );
};
