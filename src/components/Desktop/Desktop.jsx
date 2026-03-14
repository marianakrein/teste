import "./desktop.css";
import Window from "./Window";
import { useWindowStore } from "../../stores/windowStore";
import MessagesApp from "../MessagesApp/MessagesApp";
import ImageEditor from "../ImageEditor/ImageEditor";
import RelatorioProtegido from "./Relatorio/RelatorioProtegido";

const TERMINAL_ID = "terminal";
const FILE_ID = "file_viewer";
const MENSAGEM_ID = "mensagens";
const TXT_ID = "txt";

export default function Desktop() {
  const { windows, openWindow, focusWindow } = useWindowStore();

  const terminalWin = windows.find((w) => w.id === TERMINAL_ID);
  const fileWin = windows.find((w) => w.id === FILE_ID);
  const mensagensWin = windows.find((w) => w.id === MENSAGEM_ID);
  const txtWin = windows.find((w) => w.id === TXT_ID);

  const openTerminal = () =>
    openWindow({
      id: TERMINAL_ID,
      title: "UMBRA TERMINAL",
      x: 140,
      y: 90,
      w: 560,
      h: 360,
    });

  const openMensagens = () =>
    openWindow({
      id: MENSAGEM_ID,
      title: "Mensagens",
      x: 260,
      y: 200,
      w: 420,
      h: 260,
    });

  const openTxt = () =>
    openWindow({
      id: TXT_ID,
      title: "RELATORIO.txt",
      x: 260,
      y: 200,
      w: 420,
      h: 260,
    });

  return (
    <div className="desktop">
      <div className="desktopIcons">
        <div className="iconButton" onClick={openTerminal}>
          <img src="./src/assets/umbrella.png" alt="terminal" />
          <span>Terminal</span>
        </div>

        <div className="iconButton" onClick={openTxt}>
          <img src="./src/assets/umbrella.png" alt="arquivo" />
          <span>RELATORIO.txt</span>
        </div>

        <div className="iconButton" onClick={openMensagens}>
          <img src="src/assets/messages.png" alt="Mensagens" />
          <span>Mensagens</span>
        </div>
      </div>

      {terminalWin?.isOpen && (
        <Window win={terminalWin}>
          <div className="miniBox">UMBRA OS v2.3</div>
        </Window>
      )}

      {fileWin?.isOpen && (
        <Window win={fileWin}>
          <div className="miniBox">Umbrella Lab Notes</div>
        </Window>
      )}

      {mensagensWin?.isOpen && (
        <Window win={mensagensWin}>
          <MessagesApp />
        </Window>
      )}

      {fileWin?.isOpen && (
        <Window win={fileWin}>
          <ImageEditor file={fileWin.file} />
        </Window>
      )}

      {txtWin?.isOpen && (
        <Window win={txtWin}>
          <RelatorioProtegido />
        </Window>
      )}

      {/* TASKBAR */}

      <div className="taskbar">
        <div className="startButton">
          <img src="./src/assets/umbrella.png" />
          START
        </div>

        <div className="taskButtons">
          {windows
            .filter((w) => w.isOpen)
            .map((w) => (
              <div
                key={w.id}
                className="taskButton"
                onClick={() => focusWindow(w.id)}
              >
                {w.title}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
