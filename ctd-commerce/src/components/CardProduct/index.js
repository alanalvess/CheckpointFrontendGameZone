import { Link, useNavigate } from 'react-router-dom';

import './style.scss';

export default function CardProduct({data}) {
  let navigate = useNavigate();

  function handleNavigateToGameDetail(id) {
    navigate(`/${id}`);
  }

  return (
    <div className="card-product">
      <img src={data.image} alt=""/>
      <div className="box-info-product">
        <strong className="text-capitalize">{data.title}</strong>
        <span>R$ {data.price}</span>
      </div>
      <button className="purple text-white" onClick={() => handleNavigateToGameDetail(data.id)}>Ver detalhe</button>
    </div>
  );
}