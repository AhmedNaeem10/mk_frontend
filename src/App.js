import Header from './components/Header';
import Admin from './components/Admin';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// import Main from './components/Main';
import Check from './components/Check';
import './App.css';
import AddRecord from './components/AddRecord';

function App() {
  return (
    <>
    
    <Router>
    <div className="container">
      
    <Header />

    <Routes>
      <Route path='/' element={<Check />}> </Route>
      <Route path='/admin' element={<Admin />}> </Route>
      <Route path='/addRecord' element={<AddRecord />}> </Route>
    </Routes>
    
    
    </div>
    </Router>
    
    {/* <h1>VeriFy</h1> */}
    </>
  );
}

export default App;
