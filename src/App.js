import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Home/Homepage';
import NotFound from './pages/shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/home" element={<Homepage></Homepage>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
