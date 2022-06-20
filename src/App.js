import './App.css';
import Header from './Components/Header';
import { Routes, Route, } from "react-router-dom";
import About from './Pages/About';
import EltweTole from './Pages/EltweTole';
import TehnikiHyzmat from './Pages/TehnikiHyzmat';
import Teswirler from './Pages/Teswirler';
import NaglelikBild from './Pages/NaglelikBild';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Kepillik from './Pages/Kepillik';
import All from './Pages/All';
function App() {
  return (
    <div>
      <Header />
      <div className='flex md:flex-row flex-col container mx-auto'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/all' element={<All />} />
          <Route path='/about' element={<About />} />
          <Route path='/guarantee' element={<Kepillik />} />
          <Route path="/service" element={<TehnikiHyzmat />} />
          <Route path="/delivery-and-payment" element={<EltweTole />} />
          <Route path="/ratings" element={<Teswirler />} />
          <Route path='/' element={<NaglelikBild />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
