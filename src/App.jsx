import { useState } from "react";

import BootScreen from "./components/BootScreen/BootScreen";
import SplashScreen from "./components/Splash/Splash";
import Login from "./components/Login/Login";
import Desktop from "./components/Desktop/Desktop";

export default function App() {

  const [stage, setStage] = useState("boot");

  if (stage === "boot") {
    return <BootScreen onStart={() => setStage("splash")} />;
  }

  if (stage === "splash") {
    return <SplashScreen onFinish={() => setStage("login")} />;
  }

  if (stage === "login") {
    return <Login onLogin={() => setStage("desktop")} />;
  }

  return <Desktop />;
}