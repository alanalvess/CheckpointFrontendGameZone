import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col} from 'react-bootstrap';
import CardProduct from '../../components/CardProduct';
import axios from 'axios';

const Jogos = () => {
  const [consoles, setConsoles] = useState([]);

  useEffect(() => {
    async function request() {
      const { data } = await axios.get("http://gamezone-env.eba-nm6433md.us-east-1.elasticbeanstalk.com/products");
      const arrayConsoles = data.filter(produto => produto.category.name === "Consoles");
      setConsoles(arrayConsoles);
    }

    request();
  }, []);

  return (
    <>
      <Helmet>
        <title>GameZone | Jogos</title>
      </Helmet>
      <section id="banner-page-jogos" className="d-flex align-items-center justify-content-center">
        <h2 className="fs-1 text-center">Aqui você encontra os melhores jogos</h2>
      </section>
      <Container>
        <Row>
          {consoles.length !== 0 && (
            consoles.map(console => (
              <Col lg={3} md={4} sm={6} xs={12}>
              <CardProduct data={console}/>
            </Col>
            ))
          )}
        </Row>
      </Container>
    </>
  );
};

export default Jogos;
