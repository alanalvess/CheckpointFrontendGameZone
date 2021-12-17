/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./style.scss";
import Playstation from "./playstation";
import Xbox from "./xbox";
import Switch from "./switch";
import Consoles from "./Consoles";
import axios from "axios";

const Jogos = () => {
  const [psGames, setPsGames] = useState([]);
  const [xboxGames, setXboxGames] = useState([]);
  const [switchGames, setSwitchGames] = useState([]);
  const [consoles, setConsoles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gamezonestore.herokuapp.com/products"
      )
      .then((res) => {
        const psGames = res.data.filter(
          (jogo) => jogo.category.name === "Jogos de PlayStation"
        );
        const xboxGames = res.data.filter(
          (jogo) => jogo.category.name === "Jogos de Xbox"
        );
        const switchGames = res.data.filter(
          (jogo) => jogo.category.name === "Jogos de Switch"
        );
        const consoles = res.data.filter(
          (jogo) => jogo.category.name === "Consoles"
        );
        setPsGames(psGames);
        setXboxGames(xboxGames);
        setSwitchGames(switchGames);
        setConsoles(consoles);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <>
      <Playstation jogos={psGames} />
      <Xbox jogos={xboxGames} />
      <Switch jogos={switchGames} />
      <Consoles jogos={consoles} />

    </>
  );
};

export default Jogos;
