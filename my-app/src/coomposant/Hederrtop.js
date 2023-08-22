import Carousel from 'react-bootstrap/Carousel';
import i1 from '../assets/1.jpg';
import i2 from '../assets/2.jpg';
import i3 from '../assets/3.jpg';
const Hederrtop=()=>{
    return(
        <>
  <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-95"
          src={i1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-98"
          src={i2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-85"
          src={i3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )
}
export default Hederrtop;