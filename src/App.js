import './App.css';
import LeftSide from './Components/leftSide';
import MiddlSide from './Components/MiddlSide';
import RightSection from './Components/RightSection';

function App() {
  return (
    <div className="App">
      <div className='leftSection'><LeftSide /> </div>
      <div className='middSection'><MiddlSide /> </div>
      <div className='rightSide'><RightSection /> </div>
    </div>
  );
}

export default App;
