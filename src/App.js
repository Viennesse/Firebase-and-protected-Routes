import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home'
import ProtectedRoute from "./ProtectedRoute";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {
  return (
  
    <UserAuthContextProvider>
      <BrowserRouter>
        <div className="App">
        <Routes>
          <Route path='/home'  element={<ProtectedRoute><Home /></ProtectedRoute>}>
          </Route>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </UserAuthContextProvider>
  );
}

export default App;
