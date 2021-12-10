/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.scss";
import { Carousel, Row, Col } from "react-bootstrap";
import CardProduct from '../../components/CardProduct';

const Consoles = ({ consoles }) => {
  return (
    <>
      <h2>Consoles</h2>
      <Carousel variant="dark" className="max-width centralizar" indicators={false} interval={2000000}>
        <Carousel.Item>
          <Row className="d-flex justify-content-center max-width centralizar">
            {consoles.slice(0, 2).map((console) => (
              <Col className="coluna" md={3} sm={6}>
                <CardProduct data={console}/>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="d-flex justify-content-center max-width centralizar">
            {consoles.slice(2).map((console) => (
              <Col className="coluna" md={3} sm={6}>
                <CardProduct data={console}/>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Consoles;
