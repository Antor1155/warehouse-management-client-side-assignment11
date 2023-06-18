import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage/Home/Homepage';
import NotFound from './pages/shared/NotFound/NotFound';
import MyNav from './pages/shared/MyNav/MyNav';
import Footer from './pages/shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './pages/Blog/Blog';
import React, { useRef, useState, useEffect } from 'react';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import AddItem from './pages/AddItem/AddItem';
import Inventory from './pages/Inventory/Inventory';
import MyItems from './pages/MyItems/MyItems';
import Login from './pages/LoginRegister/Login/Login';
import Register from './pages/LoginRegister/Register/Register';
import Loading from './pages/shared/Loading/Loading';
import RequireAuth from './utilities/RequireAuth';
import banner1 from "./Images/Background/skybackground.jpg";
import banner2 from "./Images/Background/backgroundOptional.png"

function App() {
  // conditional rendering of footer and header in other pages than 404 pages, all kinds
  const [notFoundPage, setNotFoundPage] = useState(false);

  let location = useLocation();
  let appref = useRef();

  useEffect(() => {
    if (location.pathname.endsWith("/") || location.pathname.endsWith("/home")) {
      appref.current.style.background = "black"
    } else if(location.pathname.endsWith("/blogs")){
        appref.current.style.backgroundImage = `url(${banner1})`
    }else {
      appref.current.style.backgroundImage = `url(${banner2})`;
      appref.current.style.backgroundPosition = `center`;

    }

  }, [location])

  return (
    <div className="App" ref={appref}>
      <MyNav></MyNav>

      <Routes>
        <Route path="/" element={<Homepage ></Homepage>}></Route>
        <Route path="/home" element={<Homepage setNotFoundPage={setNotFoundPage}></Homepage>}></Route>
        <Route path='/blogs' element={<Blog setNotFoundPage={setNotFoundPage}></Blog>}> </Route>

        {/* protected routes  */}
        <Route path="/manageInventory" element={<RequireAuth>
          <ManageInventory setNotFoundPage={setNotFoundPage}></ManageInventory> </RequireAuth>}>
        </Route>

        <Route path="/additems" element={<RequireAuth>
          <AddItem setNotFoundPage={setNotFoundPage}></AddItem></RequireAuth>}>
        </Route>

        <Route path="/inventory/:id" element={<RequireAuth>
          <Inventory setNotFoundPage={setNotFoundPage}></Inventory></RequireAuth>}>
        </Route>

        <Route path="/myitems" element={<RequireAuth>
          <MyItems setNotFoundPage={setNotFoundPage}></MyItems></RequireAuth>}>
        </Route>

        <Route path="/login" element={<Login setNotFoundPage={setNotFoundPage}></Login>}> </Route>
        <Route path="/register" element={<Register setNotFoundPage={setNotFoundPage}></Register>}> </Route>

        <Route path='/loading' element={<Loading></Loading>}> </Route>

        <Route path="*" element={<NotFound setNotFoundPage={setNotFoundPage}></NotFound>}></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
