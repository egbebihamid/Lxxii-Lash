import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rout from "./FrontPage/Rout";
import Calender from "./CalenderPage/Calender";
import Form  from "./FormPage/Form";
import Buttom from './Buttom';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Rout />} />
            <Route path="/calender" element={<Calender />} />
            <Route path='/form' element={<Form />} />
          </Routes>
          <Buttom />
        </BrowserRouter>
    </div>
  );
}

export default App;
