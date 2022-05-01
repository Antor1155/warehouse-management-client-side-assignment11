import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Home/Homepage';
import NotFound from './pages/shared/NotFound/NotFound';
import MyNav from './pages/shared/MyNav/MyNav';
import Footer from './pages/shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/home" element={<Homepage></Homepage>}></Route>



        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
