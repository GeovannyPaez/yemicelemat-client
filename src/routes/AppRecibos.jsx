// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// function AppRecibos() {
//   const navigate = useNavigate();

//   const onNavigateForm = () => {
//     navigate("/add-recibo");
//   };
//   return (
//     <Row xs={1} md={2} className="g-4 mt-2 cardTypeReceipt">
//       <Col lg={"4"}>
//         <Card>
//           <Card.Img
//             variant="top"
//             src="https://th.bing.com/th/id/R.50ee313980fef606ab671f34008c786f?rik=7sNxGPcO7GoFfA&pid=ImgRaw&r=0"
//           />
//           <Card.Body>
//             <Card.Title>Recargas Celular</Card.Title>
//             <Card.Text>
//               Aquí puedes hacer tus recargas a tu SIM de Claro, Movistar, Wom u
//               otros operadores.
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <Button onClick={onNavigateForm}>Recargar</Button>
//           </Card.Footer>
//         </Card>
//       </Col>
//       <Col lg={"4"}>
//         <Card>
//           <Card.Img
//             variant="top"
//             src="https://abceconomia.co/wp-content/uploads/2012/04/Bancos-de-Colombia.jpg"
//           />
//           <Card.Body>
//             <Card.Title>Consignaciones</Card.Title>
//             <Card.Text>
//               Haz tus consignaciones a cualquier Banco de Colombia, con una
//               comicion muy minima.
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <Button onClick={onNavigateForm}>Consignar</Button>
//           </Card.Footer>
//         </Card>
//       </Col>
//       <Col lg={"4"}>
//         <Card>
//           <Card.Img
//             variant="top"
//             src="https://th.bing.com/th/id/R.8224a1e432df7f5ad4432714114b600d?rik=AQz9omi%2fvd7NhQ&pid=ImgRaw&r=0"
//           />
//           <Card.Body>
//             <Card.Title>Giros</Card.Title>
//             <Card.Text>
//               Envia dinero por medio de giros, en las diferentes entidades como Efety, SuRed a cualquier parte de Colombia.
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <Button onClick={onNavigateForm}>Girar</Button>
//           </Card.Footer>
//         </Card>
//       </Col>
//       <Col lg={"4"}>
//         <Card>
//           <Card.Img
//             variant="top"
//             src="https://th.bing.com/th/id/R.567e42fe545d6436437d6cd0c8d9dfde?rik=puz7%2fhqRgQQQnQ&pid=ImgRaw&r=0"
//           />
//           <Card.Body>
//             <Card.Title>Giros</Card.Title>
//             <Card.Text>
//               Envia dinero por medio de giros o Consignaciones a bancos de Venezuela.
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <Button onClick={onNavigateForm}>Enviar</Button>
//           </Card.Footer>
//         </Card>
//       </Col>
//       <Col lg={"4"}>
//         <Card>
//           <Card.Img
//             variant="top"
//             src="https://th.bing.com/th/id/R.567e42fe545d6436437d6cd0c8d9dfde?rik=puz7%2fhqRgQQQnQ&pid=ImgRaw&r=0"
//           />
//           <Card.Body>
//             <Card.Title>Giros</Card.Title>
//             <Card.Text>
//               Envia dinero por medio de giros o Consignaciones a bancos de Venezuela.
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <Button onClick={onNavigateForm}>Enviar</Button>
//           </Card.Footer>
//         </Card>
//       </Col>
//     </Row>
//   );
// }

// export default AppRecibos;

import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel className='mt-4 carouselContainer'>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dad87vqdp/image/upload/v1672076726/Yemicelemat/mh0zgxpt9clrruve95uv.jpg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://abceconomia.co/wp-content/uploads/2012/04/Bancos-de-Colombia.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Consignaciones</h3>
          <p>Envia dinero a cualquier persona y a cualquier banco.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.8224a1e432df7f5ad4432714114b600d?rik=AQz9omi%2fvd7NhQ&pid=ImgRaw&r=0"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Giros</h3>
          <p>
            Haz tus giros de manera rapida a cualquier persona en nuestros conrresponsales fisicos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="http://mlm-s2-p.mlstatic.com/650826-MLM40260861599_122019-O.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Free Fire</h3>
          <p>Recarga diamanes al juego de disparos mas jugado en Mobile</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.567e42fe545d6436437d6cd0c8d9dfde?rik=puz7%2fhqRgQQQnQ&pid=ImgRaw&r=0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Venezuela</h3>
          <p>Envia dinero de Colombia a Venezuela a los bancos que tenemos disponibles.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.nuQHJFlzP2dPhg9hq4BwuwHaE7?pid=ImgDet&w=2000&h=1333&rs=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Pines</h3>
          <p>Compra tus Pines de entretenimiento mas utilizados en el momento como Netflix, HBO, Disney Plus, Amazon.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default IndividualIntervalsExample;