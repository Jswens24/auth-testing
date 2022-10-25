import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AuthPage from './components/layout/AuthPage';
import UserHomePage from './components/layout/UserHomePage';
import UserPostForm from './components/userPosts/UserPostForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<AuthPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/userHomePage/:id' element={<UserHomePage />} />
        <Route path='/newEntry/' element={<UserPostForm />} />
      </Routes>
    </div>
  );
}

export default App;
