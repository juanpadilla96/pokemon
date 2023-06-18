import './App.css';
import Home from './components/home/home.jsx';
import Landing from './components/landingpage/landingPage.jsx';
import { Route, Routes, useLocation } from 'react-router-dom';
import Form from './components/form/form';
import Detail from './components/detail/detail';
import NavBar from './components/navbar/NavBar';

function App() {

  const location = useLocation()

  return (
    <div className="App">

     {location.pathname!=='/' && <NavBar />} 
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/home" element={<Home />} />

      </Routes>


    </div>
  );
}

export default App;
