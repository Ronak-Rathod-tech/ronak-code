
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Cart from './component/Cart';
import Home from './component/Home';
import Error from './Error';
import Register from './component/Register';
import Login from './component/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </>

  );
};

export default App;
