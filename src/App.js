import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Home/Homepage';
import NotFound from './pages/shared/NotFound/NotFound';
import MyNav from './pages/shared/MyNav/MyNav';
import Footer from './pages/shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './pages/Blog/Blog';
import { useState } from 'react';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import AddItem from './pages/AddItem/AddItem';
import Inventory from './pages/Inventory/Inventory';
import MyItems from './pages/MyItems/MyItems';
import Login from './pages/LoginRegister/Login/Login';
import Register from './pages/LoginRegister/Register/Register';
import Loading from './pages/shared/Loading/Loading';


function App() {
  // conditional rendering of footer and header in other pages than 404 pages, all kinds
  const [notFoundPage, setNotFoundPage] = useState(false);

  return (
    <div className="App">
      {notFoundPage || <MyNav></MyNav>}

      <Routes>
        <Route path="/" element={<Homepage ></Homepage>}></Route>
        <Route path="/home" element={<Homepage setNotFoundPage={setNotFoundPage}></Homepage>}></Route>
        <Route path='/blogs' element={<Blog setNotFoundPage={setNotFoundPage}></Blog>}> </Route>
        <Route path="/manageInventory" element={<ManageInventory setNotFoundPage={setNotFoundPage}></ManageInventory>}> </Route>
        <Route path="/additems" element={<AddItem setNotFoundPage={setNotFoundPage}></AddItem>}> </Route>
        <Route path="/inventory/:id" element={<Inventory setNotFoundPage={setNotFoundPage}></Inventory>}> </Route>
        <Route path="/myitems" element={<MyItems setNotFoundPage={setNotFoundPage}></MyItems>}> </Route>
        <Route path="/login" element={<Login setNotFoundPage={setNotFoundPage}></Login>}> </Route>
        <Route path="/register" element={<Register setNotFoundPage={setNotFoundPage}></Register>}> </Route>

        <Route path='/loading'element={<Loading></Loading>}> </Route>

        <Route path="*" element={<NotFound setNotFoundPage={setNotFoundPage}></NotFound>}></Route>
      </Routes>

      {notFoundPage || <Footer></Footer>}

    </div>
  );
}

export default App;
