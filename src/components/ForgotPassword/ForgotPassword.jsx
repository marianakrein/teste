import { Rnd } from "react-rnd";
import { useState } from "react";

export default function ForgotPassword({ onClose }) {

  const size = 3;

  const createBoard = () =>
    Array(size)
      .fill(null)
      .map(() =>
        Array(size)
          .fill(null)
          .map(() => Math.random() > 0.5)
      );

  const [board, setBoard] = useState(createBoard());
  const [revealed, setRevealed] = useState(false);
  const [username, setUsername] = useState("");
  const [checkedUser, setCheckedUser] = useState(false);

  function checkUser() {
    setCheckedUser(true);
  }

  function toggle(x, y) {
    const newBoard = board.map(row => [...row]);

    const flip = (i, j) => {
      if (i >= 0 && j >= 0 && i < size && j < size) {
        newBoard[i][j] = !newBoard[i][j];
      }
    };

    flip(x, y);
    flip(x - 1, y);
    flip(x + 1, y);
    flip(x, y - 1);
    flip(x, y + 1);

    setBoard(newBoard);

    const solved = newBoard.every(row => row.every(cell => cell));
    if (solved) setRevealed(true);
  }

  return (
    <Rnd
      default={{
        x: 200,
        y: 150,
        width: 340,
        height: 320   // janela mais alta
      }}
      minWidth={260}
      minHeight={260}
      bounds="window"
      className="window"
      dragHandleClassName="windowTitlebar"
    >

      <div className="windowTitlebar">
        <span className="windowTitle">Recuperar senha</span>

        <div className="windowControls">
          <button className="ctrlBtn" onClick={onClose}>
            X
          </button>
        </div>
      </div>

      <div className="windowBody">

        <div className="miniBox" style={{ margin: 10 }}>

          <input
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", marginBottom: 10 }}
          />

          <button
            className="btn"
            onClick={checkUser}
            style={{ marginBottom: 10 }}
          >
            Verificar usuário
          </button>

          {checkedUser && username !== "PROJETOJ" && (
            <p style={{ color: "red", fontSize: 12 }}>
              Usuário não existe.
            </p>
          )}

          {checkedUser && username === "PROJETOJ" && (
            <>
              <p style={{ fontSize: 12 }}>
                Ligue todos os interruptores:
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 40px)",
                  gap: 6,
                  justifyContent: "center",
                  marginBottom: 10
                }}
              >
                {board.map((row, i) =>
                  row.map((cell, j) => (
                    <button
                      key={i + "-" + j}
                      className="btn"
                      onClick={() => toggle(i, j)}
                      style={{
                        width: 40,
                        height: 40,
                        background: cell ? "#9be79b" : "#ddd"
                      }}
                    >
                      {cell ? "ON" : "OFF"}
                    </button>
                  ))
                )}
              </div>

              {revealed && (
                <div
                  style={{
                    marginTop: 10,
                    padding: 6,
                    background: "#fff",
                    border: "1px solid #9cc7c7",
                    fontWeight: "bold"
                  }}
                >
                  Senha revelada: FARINHAS
                </div>
              )}
            </>
          )}

        </div>

      </div>
    </Rnd>
  );
}