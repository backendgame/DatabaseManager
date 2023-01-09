import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Langdingpage from './Page/Langdingpage';
import Castingpage from './Page/Castingpage';
import GMILearning from './Page/GMILearning';

function App() {
  return (
    <Router>
        <Navbar></Navbar>
        <Routes>
              <Route path='/' element={<Langdingpage/>}></Route>
              <Route exact path='/Casting' element={<Castingpage />}></Route>
              <Route exact path='/GMILearning' element={< GMILearning/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
