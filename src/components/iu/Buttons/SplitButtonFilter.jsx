import { useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";

export function SplitButtonFilter({ getReceiptsByOptions }) {
  const [options, setOptions] = useState();
  const onChangeFilter = (e) => {
    const value = e.target.value;
    setOptions(value);
  };
  const [dates, setDate] = useState({
    dateInitial: undefined,
    dateEnd: undefined,
  });
  const onChangedateInitial = (e) => {
    setDate({ ...dates, dateInitial: e.target.value });
  };
  const onChangedateEnd=e=>{
    setDate({...dates,dateEnd:e.target.value})
  }
  useEffect(() => {
    if (!options) {
      return;
    }
    const filter = {
      false: () =>
        getReceiptsByOptions({
          query: "complete",
          payload: {
            state: JSON.parse(options),
          },
        }),
      true: () =>
        getReceiptsByOptions({
          query: "complete",
          payload: {
            state: JSON.parse(options),
          },
        }),
      date: () => {
        return;
      },
    };
    filter[options] ? filter[options]() : getReceiptsByOptions({});
  }, [options]);
  useEffect(()=>{
    console.log()
    if(dates.dateEnd && dates.dateInitial ){
      getReceiptsByOptions({
        query:"date",
        payload:{
          dateInitial:dates.dateInitial,
          dateEnd:dates.dateEnd
        }
      })
    }
    return;
  },[dates])
 
  return (
    <Form>
      <Form.Group className=" mt-2 mt-md-0 mb-3" controlId="formBasicEmail">
        <Form.Label>Filtrar Por: </Form.Label>
        <Form.Select
          onChange={onChangeFilter}
          aria-label="Default select example"
        >
          <option value="all">Todos</option>
          <option value={true}>Completados</option>
          <option value={false}>No Completados</option>
          <option value="date">Fechas</option>
        </Form.Select>
      </Form.Group>
      {options == "date" && (
        <>
          <Form.Group>
            <Form.Group >
              <Form.Label>Fecha Inicial</Form.Label>
              <Form.Control onChange={onChangedateInitial} type="date" />
            </Form.Group>
            <Form.Group >
              <Form.Label>Fecha Final</Form.Label>
              <Form.Control onChange={onChangedateEnd} type="date" />
            </Form.Group>
          </Form.Group>
        </>
      )}
    </Form>
  );
}

// if(options == "day"){
//   getReceiptsByOptions({query:options})
//   return;
// }
// if(options=="false" || options == "true") {
//   getReceiptsByOptions({
//     query:"complete",
//     payload:{
//       state:JSON.parse(options)
//     }
//   })
//   return;
// } if(options === "date"){
//   return;
// }
// if( options === 'all'){
//   getReceiptsByOptions({})
// }
