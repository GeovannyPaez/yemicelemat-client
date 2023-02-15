

import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel className='carouselContainer'>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 m-auto"
          src="https://res.cloudinary.com/dad87vqdp/image/upload/v1672076726/Yemicelemat/mh0zgxpt9clrruve95uv.jpg" alt="logo Yemicelemat"
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
          src="https://th.bing.com/th/id/OIP.V-RgqmfSze_T0zO0CD-7vgHaHa?pid=ImgDet&dpr=2"
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