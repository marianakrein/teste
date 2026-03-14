import { useState } from "react";
import "./imageEditor.css";

export default function ImageEditor() {
  const [tool, setTool] = useState("move");
  const [font, setFont] = useState("Arial");
  const [size, setSize] = useState(20);
  const [text, setText] = useState("Digite algo");

  return (
    <div className="editorApp">
      {/* TOOLBAR */}
      <div className="editorToolbar">
        <button
          className={tool === "move" ? "tool active" : "tool"}
          onClick={() => setTool("move")}
        >
          🖱
        </button>

        <button
          className={tool === "text" ? "tool active" : "tool"}
          onClick={() => setTool("text")}
        >
          T
        </button>

        <button
          className={tool === "brush" ? "tool active" : "tool"}
          onClick={() => setTool("brush")}
        >
          🖌
        </button>

        <div className="separator" />

        <select value={font} onChange={(e) => setFont(e.target.value)}>
          <option>Times New Roman</option>
        </select>

        <input
          type="number"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="fontSize"
        />
      </div>

      {/* WORK AREA */}
      <div className="editorCanvas">
        <img
          className="placeholderImage"
          src="./src/assets/arte.png"
          alt="arte"
        />

        {tool === "text" && (
          <div
            className="textLayer"
            style={{
              fontFamily: font,
              fontSize: size + "px",
            }}
            contentEditable
            suppressContentEditableWarning
            onInput={(e) => setText(e.currentTarget.textContent)}
          >
            {text}
          </div>
        )}
      </div>
    </div>
  );
}
