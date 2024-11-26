import React from "react";
import styles from "./App.module.css";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Benefits from "./components/Benefits/Benefits";
import Impact from "./components/Impact/Impact";
import Approach from "./components/Approach/Approach";
import Nasa from "./components/Nasa/Nasa";
import Api from "./components/Api/Api";
import Api2 from "./components/Api2/Api2";
// import ImagesSlider from "./components/ImagesSlider/ImagesSlider";

function App() {
  return (
    <div className={styles.container}>
      <Menu />
      <img src="./Berlin (2).png" alt="Berlin" className={styles.berlin}></img>
      <Home />
      <Benefits />
      <Impact />
      <Approach />
      <Nasa />
      <Api />
      <Api2 />

      <footer className={styles.footer}>
        <p>&copy; 2023 Ваша Компания. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;
