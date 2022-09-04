import {Routes,Route} from "react-router-dom"
import Friends from "./Components/Friends"
import Login from "./Components/Login"
import Navbar from "./Components/Navbar"
import Register from "./Components/Register"
import Requests from "./Components/Requests"
import Home from "./Components/Home"
function App() {
  return (
   <div>
          <Navbar/>
          <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/requests" element={<Requests/>}></Route>
                <Route path="/friends" element={<Friends/>}></Route>
          </Routes>
   </div>
  );
}

export default App;
