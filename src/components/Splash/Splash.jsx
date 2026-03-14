import { useEffect } from "react";
import "./Splash.css";

export default function Splash({ onFinish }) {

  useEffect(() => {

    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <div className="splashScreen">

      <div className="splashPanel">

        <img
          src="./src/assets/umbrella.png"
          className="umbrellaLogo"
        />

        <div className="splashTitle">
          UMBRELLA LABORATORIES
        </div>

        <div className="splashSubtitle">
          TERMINAL DE SEGURANÇA DE PESQUISA
        </div>

        <div className="bootText">
          Inicializando módulos de segurança...
        </div>

        <div className="progressBar">
          <div className="progressFill"></div>
        </div>

      </div>

    </div>
  );
}