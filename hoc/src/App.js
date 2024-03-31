
import './App.css';
import Arow from './components/Arow';
import ClickCounter from './components/ClickCounter';
import Form from './components/Form';
import Functional from './components/Functional';
import Hook from './components/Hook';
import HoverCounter from './components/HoverCounter';
import State from './components/State';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';

function App() {
  return (
    <div className="App">
     <ClickCounter/>
     <HoverCounter/>
     <Arow/>
     <Hook/>
     <UseEffect/>
     <UseRef/>
     <State/>
     <Functional/>
     <Form/>
    
   
     
    </div>
  );
}

export default App;
