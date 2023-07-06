import './App.css';
import Transactions from './Components/Transaction/Transactions';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { DataProvider } from './Context/DataContext';
import Nav from './NavBar/Nav';
import Home from './Home/Home';
import LiftConfig from './Components/LiftConfig/LiftConfig';
import { Contact } from './Components/Contact/Contact';
function App() {

  const navigate = useNavigate();
  return (
    <div className="App">
        {/* <h1>Elevator</h1> */}
        <DataProvider>
           <Nav/> 
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/transactions' element={<Transactions/>}/>
              <Route path='/config' element={<LiftConfig/>}/>
              <Route path='/contact' element={<Contact/>}/>
          </Routes> 
         
        </DataProvider>
    </div>
  );
}

export default App;
