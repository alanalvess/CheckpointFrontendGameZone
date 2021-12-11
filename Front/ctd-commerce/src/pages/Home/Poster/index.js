import { Carousel} from 'react-bootstrap';
import './style.scss';

export default function Carrossel() {
  return (
    <Carousel fade controls={false} indicators={false}>
      <Carousel.Item>
        <div className='d-block w-100 poster poster-1 imagem-carrossel'></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-block w-100 poster poster-2 imagem-carrossel'></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-block w-100 poster poster-3 imagem-carrossel'></div>
      </Carousel.Item>
    </Carousel>
  );
}