import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainRoom from './component/MainRoom';
import ChatRoom from './component/ChatRoom';

function App() {
  return (
    <div className="container-fluid text-dark d-flex align-items-center justify-content-center " style={{height:"100vh", backgroundColor:'black'}} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainRoom />} />
          <Route path='/chat/:rooName' element={<ChatRoom />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


