import ColorBox from './components/ColorBox'
import SelectColor from './components/SelectColors'
import SelectColorRCC from './components/SelectColorsRCC'
import './App.css';
// import ColorContext from './contexts/color';
import { ColorProvider } from './contexts/color'

function App() {
  return (
    <ColorProvider>
      <div className="App">
        <SelectColor></SelectColor>
        <SelectColorRCC></SelectColorRCC>
        <ColorBox></ColorBox>
      </div>
    </ColorProvider>
  );
}

export default App;
