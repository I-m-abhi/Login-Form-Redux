import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import About from './components/About';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedLogReg from './components/ProtectedLogReg';

function App() {
  return (
   <>
   <BrowserRouter>
     <Routes>
     <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>

        <Route element={<ProtectedLogReg />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
     </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
