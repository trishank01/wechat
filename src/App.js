import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContext } from './context/authContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)
  return (
    <div className="">
      {/* <Home/> */}
      <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route index path='login' element={<Login/>}/>
        <Route index path='register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      <Register/>
    </div>
  );
}

export default App;
