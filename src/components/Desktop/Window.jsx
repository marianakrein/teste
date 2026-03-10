import { Rnd } from "react-rnd";
import { useWindowStore } from "../../stores/windowStore";

export default function Window({ win, children }) {
  const { focusWindow, closeWindow, updateWindow } = useWindowStore();

  if (!win.isOpen) return null;

  return (
    <Rnd
      size={{ width: win.w, height: win.h }}
      position={{ x: win.x, y: win.y }}
      bounds="parent"
      minWidth={320}
      minHeight={200}
      style={{ zIndex: win.z, position: "absolute" }}
      onMouseDown={() => focusWindow(win.id)}
      onDragStop={(_, d) => updateWindow(win.id, { x: d.x, y: d.y })}
      onResizeStop={(_, __, ref, ___, pos) => {
        updateWindow(win.id, {
          w: ref.offsetWidth,
          h: ref.offsetHeight,
          x: pos.x,
          y: pos.y,
        });
      }}
    >
      <div className="window" style={{ width: "100%", height: "100%" }}>
        <div className="windowTitlebar">
          <div className="windowTitle">{win.title}</div>

          <div className="windowControls">
            <button className="ctrlBtn" onClick={() => closeWindow(win.id)} title="Fechar">
              ✕
            </button>
          </div>
        </div>

        <div className="windowBody">{children}</div>
      </div>
    </Rnd>
  );
}