import { useState } from "react";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import "./login.css";

export default function Login({ onLogin }) {
  const [pass, setPass] = useState("");
  const [showForgot, setShowForgot] = useState(false);

  const handleLogin = () => {
    if (pass === "FARINHAS") {
      onLogin();
    } else {
      alert("CREDENCIAL INVÁLIDA.");
    }
  };

  return (
    <div className="loginScreen">
      <div className="loginBox">
        <input
          placeholder="Usuário"
          value="PROJETOJ"
          readOnly
          disabled
        />

        <input
          type="password"
          placeholder="SENHA"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button onClick={handleLogin}>ENTRAR</button>

        <div
          className="forgot"
          onClick={() => setShowForgot(true)}
        >
          ESQUECI MINHA SENHA
        </div>
      </div>

      {showForgot && (
        <ForgotPassword onClose={() => setShowForgot(false)} />
      )}
    </div>
  );
}