/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet";

import Poster from "./Poster";
import Jogos from "../../components/carrosselJogos";

const Home = () => {

  return (
    <>
      <Helmet>
        <title>GameZone | Home</title>
      </Helmet>
      <Poster />
      <Jogos />
    </>
  );
};
export default Home;
