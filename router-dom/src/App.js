
import { Outlet } from 'react-router-dom';
import './App.css';


//components
import Navbar from './components/Navbar';
// import Address from './components/Address';
// import ContactUs from './components/ContactUs';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>

      </header>
      
      <main>
      <h1>Welcome to reactRouter Dom Sample....</h1>
        <Outlet/>
      </main>
      
    </div>
  );
}

export default App;
