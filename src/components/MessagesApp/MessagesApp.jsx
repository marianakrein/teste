import { useState } from "react";
import "./messages.css";
import { useWindowStore } from "../../stores/windowStore.js";
import ImageEditor from "../ImageEditor/ImageEditor";

const conversations = [
  {
    id: 1,
    name: "Dr. Marcus",
    messages: [
      { text: "Você recebeu os novos dados do laboratório?", from: "them" },
      { text: "Ainda não, estou analisando.", from: "me" },
      { text: "Precisamos continuar os testes.", from: "them" },
    ],
  },
  {
    id: 2,
    name: "Grace A.",
    messages: [
      { text: "E o melhor álbum da Halsey é sim IICHLIWP", from: "me" },
      { text: "avisa que eh old migoooooo", from: "them" },
      { text: "como q ta a emily?", from: "me" },
      { text: "ta viciada em minecraft", from: "them" },
      { text: "que saudade da jill valentine migo", from: "them" },
      { text: "nem me fale vamos matar o chris redfield", from: "me" },
      { text: "vamos!!", from: "them" },
      { text: "ficou sabendo que a jill valentine casou?", from: "them" },
      { text: "seriooo", from: "me" },
      { text: "com quem?", from: "me" },
      { text: "com uma tal de mariana krein", from: "them" },
      { text: "agr mariana valentine ne", from: "them" },
      { text: "nossa bom pra ela ne que sorte", from: "me" },
      { text: "agr vamos trabalhar ne", from: "me" },
    ],
  },
  {
    id: 3,
    name: "Mia W.",
    messages: [
      {
        text: "Você ainda tem aquele arquivo do convite que fizemos ano passado?",
        from: "me",
      },
      { text: "Acho que tenho.", from: "them" },
      { text: "Me dá uns minutos que eu já acho!", from: "them" },
      { text: "Beleza.", from: "me" },
      {
        text: "Você lembra qual é o nome da fonte que você usou pro título?",
        from: "me",
      },
      {
        type: "file",
        fileName: "convite-2024.pdf",
        windowId: "file-convite",
        from: "them",
      },
      { text: "Tá aí, agora te vira.", from: "them" },
    ],
  },
  {
    id: 4,
    name: "Administração",
    messages: [
      { text: "Relatórios pendentes.", from: "them" },
      { text: "Vou enviar ainda hoje.", from: "me" },
    ],
  },
  {
    id: 5,
    name: "Claire R.",
    messages: [
      { text: "Alguma notícia daquele projeto J?", from: "them" },
      { text: "Fiquei muito interessada.", from: "them" },
      { text: "Fique longe, Redfield.", from: "me" },
    ],
  },
];

export default function MessagesApp() {
  const [active, setActive] = useState(conversations[0]);
  const openWindow = useWindowStore((s) => s.openWindow);
  const FILE_ID = "file_viewer";

  const openFile = (msg) => {
    openWindow({
      id: "file_viewer",
      title: msg.fileName,
      x: 220,
      y: 160,
      w: 520,
      h: 320,
      file: "placeholder",
    });
  };

  return (
    <div className="messagesApp">
      <div className="conversationList">
        {conversations.map((c) => (
          <div
            key={c.id}
            className={`conversationItem ${active.id === c.id ? "active" : ""}`}
            onClick={() => setActive(c)}
          >
            {c.name}
          </div>
        ))}
      </div>

      <div className="chatArea">
        <div className="chatHeader">{active.name}</div>

        <div className="chatMessages">
          {active.messages.map((msg, i) => (
            <div
              key={i}
              className={`messageRow ${
                msg.from === "me" ? "sent" : "received"
              }`}
            >
              <div className="messageBubble">
                {msg.type === "file" ? (
                  <div className="fileMessage" onClick={() => openFile(msg)}>
                    📎 {msg.fileName}
                  </div>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
