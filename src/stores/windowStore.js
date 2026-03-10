import { create } from "zustand";

export const useWindowStore = create((set, get) => ({
  windows: [],
  nextZ: 1,

  openWindow: (win) => {
    const { windows, nextZ } = get();

    // se já existe, só traz pra frente e desminimiza (se quiser)
    const exists = windows.find((w) => w.id === win.id);
    if (exists) {
      set({
        windows: windows.map((w) =>
          w.id === win.id ? { ...w, z: nextZ, isOpen: true } : w
        ),
        nextZ: nextZ + 1,
      });
      return;
    }

    set({
      windows: [...windows, { ...win, z: nextZ, isOpen: true }],
      nextZ: nextZ + 1,
    });
  },

  closeWindow: (id) => {
    const { windows } = get();
    set({
      windows: windows.map((w) => (w.id === id ? { ...w, isOpen: false } : w)),
    });
  },

  focusWindow: (id) => {
    const { windows, nextZ } = get();
    set({
      windows: windows.map((w) => (w.id === id ? { ...w, z: nextZ } : w)),
      nextZ: nextZ + 1,
    });
  },

  updateWindow: (id, patch) => {
    const { windows } = get();
    set({
      windows: windows.map((w) => (w.id === id ? { ...w, ...patch } : w)),
    });
  },
}));