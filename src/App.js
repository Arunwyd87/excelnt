import logo from './logo.svg';
import './App.css';
import LandingPage from './components/user/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashboard/home';
import About from './components/common/About';
import { Provider } from 'react-redux';
import Appstore from './utils/Appstore';
import Cart from './components/dashboard/cart';
import UploadPage from './components/uploads/upload';
import Login from './components/user/Login';
function App() {
  return (
    <Provider store={Appstore}>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<LandingPage/>} />
      <Route exact path="/home" element={<LandingPage/>} />
           <Route exact path="/dashboard" element={<Dashboard/>} />
           <Route exact path="/About" element={<About/>} />
           <Route exact path="/Cart" element={<Cart/>} />
           <Route exact path="/upload" element={<UploadPage/>} />
           <Route exact path="/login" element={<Login/>} />
      
    </Routes>
  </BrowserRouter>
  </Provider>
  );
}

export default App;
