import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Home from './components/Home/Home';
import NotFound from './components/Shared/NotFound';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';

function App() {
  return (
    <div className="App text-secondary">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
