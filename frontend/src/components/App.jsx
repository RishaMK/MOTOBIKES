
import Home from './Home';
import Login from './Login';
import Register from './Register';
import FirstStep from './FirstStep';
import {Routes, Route} from "react-router-dom";
import History from './History';

function App() {

  return (
    <div style={{marginTop : '-3.5rem'}}>
        <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path='/firststep' element={<FirstStep/>}/>
          <Route path='/history' element={<History/>}/>
        </Routes>
    </div>
  )
}

export default App
