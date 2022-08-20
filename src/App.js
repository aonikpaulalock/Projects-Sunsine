import './App.css';
import Header from './Pages/Home/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/Home/About';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
