import { Link, useNavigate } from 'react-router-dom';
import { Card, Button } from "react-bootstrap";

import './style.scss';

export default function CardProduct({ data }) {
  let navigate = useNavigate();

  function handleNavigateToGameDetail(id) {
    navigate(`/${id}`);
  }

  return (
    <Card className="card-product">
      <Card.Img src={data.image} alt="" />

      <Card.Body className="box-info-product">
        <Card.Title className="text-capitalize">{data.title}</Card.Title>
        <Card.Text>R$ {data.price}</Card.Text>
        <Button className="purple text-white" onClick={() => handleNavigateToGameDetail(data.id)}>Ver detalhe</Button>
      </Card.Body>
    </Card>
  );
}