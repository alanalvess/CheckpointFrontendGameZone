import { Container, Row, Col, Button} from 'react-bootstrap';
import { useEffect, useState } from 'react';

import './style.scss';

export default function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dataLocalStorage = localStorage.getItem("@CART");
    if(dataLocalStorage){
      const data = JSON.parse(dataLocalStorage);
      setProducts(data);
    }

  }, [])

  function calcularSubtotal() {
    let sub = 0;

    products.forEach(product => { sub += product.price; })
    const valorFormatado = sub.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorFormatado;
  }

  return (
    <>
      {products.length !== 0 ? (
        <>
          <Container className="largura">
            <h2 className="fs-3 titulo-sacola">Sacola de compras</h2>
            <span className="fs-4">Subtotal: <strong>{calcularSubtotal()}</strong></span>
            <Button className="w-100 purple mb-2 mt-3 border-0">Finalizar Compra</Button>
          </Container>
          {products.map(produto => (
            <Container className="largura">
                <Row key={produto.id} className="justify-content-between mb-2 cor-card py-2">
                  <Col className="d-flex justify-content-center align-items-center" sm={2} xs={5}>
                    <img className="img-fluid largura-minima" src={produto.image} alt="" />
                  </Col>
                  <Col sm={10} xs={7} className="py-2">
                    <strong className="fw-bold text-capitalize">{produto.title}</strong>
                    <p className="">R$ {produto.price}</p>
                  </Col>
                </Row>
            </Container>
          ))}
        </>
      ) : (<h1 className="text-center">Nada no Carrinho</h1>)}
      
    </>
  )
}

