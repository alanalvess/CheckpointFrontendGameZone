import axios from "axios";
import { Container, Row, Col} from 'react-bootstrap';
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CardProduct from "../../components/CardProduct";
import "./style.scss";

const Jogos = () => {
  function handleNavigateToGameDetail(e, jogo) {
    e.preventDefault();
    localStorage.setItem("jogo", JSON.stringify(jogo));
    window.location.href = "/jogo-detalhe";
  }
  const [jogos, setJogos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  useEffect(() => {
    axios.get("https://gamezonestore.herokuapp.com/products")
      .then((res) => {
        const jogos = res.data.filter(
          (jogo) => jogo.category.name !== "Consoles"
        );
        const jogosFiltrados = jogos.filter(
          (jogo) => jogo.category.name === selectedCategory
        );
        if (selectedCategory === "all") {
          setJogos(jogos);
        } else {
          setJogos(jogosFiltrados);
        }
      })
      .catch((err) => console.log(err));
  }, [selectedCategory]);
  
  return (
    <>
      <Helmet>
        <title>GameZone | Jogos</title>
      </Helmet>
      <section id="banner-page-jogos" className="d-flex align-items-center justify-content-center">
        <h2 className="fs-1 text-center">Aqui você encontra os melhores jogos</h2>
      </section>
      <Container className="d-flex justify-content-end">
        <select className="filtro mt-4" onChange={(e) => setSelectedCategory(e.target.value)}>
          <option selected="selected" value="all">
            Todos os jogos
          </option>
          <option value="Jogos de PlayStation">Jogos de Playstation</option>
          <option value="Jogos de Xbox">Jogos de Xbox</option>
          <option value="Jogos de Switch">Jogos de Switch</option>
        </select>
      </Container>
      <Container>
        <Row >
          {jogos.map((jogo) => (
            <Col lg={3} md={4} sm={6} xs={12}>
              <CardProduct data={jogo}/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Jogos;
