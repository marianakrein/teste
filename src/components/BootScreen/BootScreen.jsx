import "./BootScreen.css";

export default function BootScreen({ onStart }) {
  return (
    <div className="bootScreen">
      <div className="bootBox">
        <p>
          ACESSA ISSO AQUI NO &gt;&gt;&gt;&gt;&gt;&gt;&gt; <b>DESKTOP</b> &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;.
        </p>

        <p>
          PELO AMOR DE DEUS NAO ACESSA PELO CELULAR EU TE IMPLOROOOOOO
        </p>

        <p>
          OUTRA COISA POR FAVOR APERTA F11 NESSE NAVEGADOR OU DEPENDE DO NAVEGADOR QUE TU USA BOTA EM TELA CHEIA POR FAVORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
        </p>

        <p>espero que goste!</p>

        <button
          className="bootButton"
          onClick={onStart}
        >
          INICIAR
        </button>

      </div>
    </div>
  );
}