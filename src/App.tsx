import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/customizationContext";

function App() {
  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas dpr={[1, 2]} className="canvas">
          <color attach="background" args={["#213547"]} />
          <fog attach="fog" args={["#213547", 10, 50]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  );
}

export default App;
