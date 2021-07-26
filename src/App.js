import Palette from "./Palette"
import './App.css';
import seedPalettes from "./seedPalettes"

function App() {
  return (
    <div className="App">
      <Palette {...seedPalettes[7]}/>
    </div>
  );
}

export default App;
