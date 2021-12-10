/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";

import CardProduct from '../../CardProduct';

const Xbox = ({ jogos }) => {
  return (
    <>
      <h2>Jogos | Xbox</h2>
      <Carousel variant="dark" className="max-width centralizar" indicators={false} interval={2000000}>
        <Carousel.Item>
          <Row className="d-flex justify-content-center max-width centralizar">
            {jogos.slice(0,3).map((jogo) => (
              <Col className="coluna" md={3} sm={6}>
                <CardProduct data={jogo}/>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="d-flex justify-content-center max-width centralizar">
            {jogos.slice(3,6).map((jogo) => (
              <Col className="coluna" md={3} sm={6}>
                <CardProduct data={jogo}/>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="d-flex justify-content-center max-width centralizar">
            {jogos.slice(6).map((jogo) => (
              <Col className="coluna" md={3} sm={6}>
                <CardProduct data={jogo}/>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Xbox;
