import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Home from './components/Home/Home';
import NotFound from './components/Shared/NotFound';

function App() {
  return (
    <div className="App text-secondary">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
