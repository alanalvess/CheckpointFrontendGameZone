/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet";

import Poster from "./Poster";
import Jogos from "../../components/carrosselJogos";
import Consoles from "../../components/Consoles";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [consoles, setConsoles] = useState([]);
  useEffect(() => {
    localStorage.removeItem("jogo");
  }, []);
  useEffect(() => {
    axios
      .get(
        "http://gamezone-env.eba-nm6433md.us-east-1.elasticbeanstalk.com/products"
      )
      .then((res) => {
        const consoles = res.data.filter(
          (jogo) => jogo.category.name === "Consoles"
        );
        setConsoles(consoles);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Helmet>
        <title>GameZone | Home</title>
      </Helmet>
      <Poster />
      <Jogos />
      <Consoles consoles={consoles} />
    </>
  );
};
export default Home;
