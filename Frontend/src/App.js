import "./App.css";

import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/100.css"; // Specify weight
import "@fontsource/inter/200.css"; // Specify weight
import "@fontsource/inter/300.css"; // Specify weight
import "@fontsource/inter/400.css"; // Specify weight
import "@fontsource/inter/500.css"; // Specify weight
import "@fontsource/inter/600.css"; // Specify weight

import MedisenseApp from "./MedisenseApp";

function App() {
  return (
    <div className="App">
      <MedisenseApp />
    </div>
  );
}

export default App;
