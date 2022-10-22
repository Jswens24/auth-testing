import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AuthPage from './components/layout/AuthPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<AuthPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
