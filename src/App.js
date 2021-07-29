import Palette from "./Palette"
import './App.css';
import seedPalettes from "./seedPalettes"

function App() {
  return (
    <div className="App">
      <Palette {...seedPalettes[1]}/>
    </div>
  );
}

export default App;
