import { useState } from "react";
import Relatorio from "./Relatorio";
import "./relatorio.css";

export default function RelatorioProtegido() {
  const [senha, setSenha] = useState("");
  const [acessoPermitido, setAcessoPermitido] = useState(false);
  const [erro, setErro] = useState(false);

  const SENHA_CORRETA = "timesnewroman";

  const handleChange = (e) => {
    const valorSemEspacos = e.target.value.replace(/\s/g, "");
    setSenha(valorSemEspacos);
    if (erro) setErro(false);
  };

  const verificarSenha = () => {
    if (senha.toLowerCase() === SENHA_CORRETA.toLowerCase()) {
      setAcessoPermitido(true);
    } else {
      setErro(true);
      setSenha("");
    }
  };

  if (acessoPermitido) return <Relatorio />;

  return (
    <div className="senhaWrapper">
      <div className="senhaBox">
        <h2>Acesso Restrito</h2>
        <p>Digite a senha para acessar o relatório:</p>
        <input
          type="password"
          value={senha}
          onChange={handleChange}
          onKeyDown={(e) => e.key === "Enter" && verificarSenha()}
          autoFocus
        />
        <button onClick={verificarSenha}>OK</button>
        {erro && <div className="senhaErro">Senha incorreta!</div>}
      </div>
    </div>
  );
}