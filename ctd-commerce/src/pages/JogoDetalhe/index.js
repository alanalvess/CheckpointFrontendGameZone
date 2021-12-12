import "./style.scss";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button} from 'react-bootstrap';
import axios from "axios";
import { useCart } from "../../contexts/CartContext";
import { useParams } from "react-router-dom";

const JogoDetalhe = () => {
  const cartContext = useCart();
  const [product, setProducts] = useState({});

  let {id} = useParams();

  useEffect(() => {
    axios.get(`https://gamezonestore.herokuapp.com/products/${id}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handlePutOnCart(e) {
    e.preventDefault()
    cartContext.insertInToCart(product);
    alert('Jogo adicionado ao carrinho!')
  }

  return (
      <Container className="largura-card">
        <Row className=" justify-content-between">
          <Col className="py-4 d-flex centralizar" sm={5} xs={8}> 
            <img className="img-fluid imagem-jogo centralizar" src={product.image} alt=""/> 
          </Col>
          <Col className="py-5 px-2" sm={5} xs={12}>
            <h2 className="text-capitalize">{product.title}</h2>
            <p className="m-0">
              {product.description}
            </p>
            <p className="fw-bold fs-3 mt-2">R$ {product.price}</p>
            <Button onClick={handlePutOnCart} className="purple border-0" size="lg"> Adicionar ao Carrinho </Button>
          </Col>
        </Row>
      </Container>
  );
};
export default JogoDetalhe;
