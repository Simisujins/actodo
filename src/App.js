import Header from "./components/Header";
import Card from "./components/card";
import TodoContainer from "./components/TodoContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing"
import { useState } from "react";

function App() 
{
  const [uname, setuname] = useState([
    {
      username: "simi",
      password: "1234"
    },
    {
      username : "john",
      password :"123"
    }

  ])


  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login uname={uname} setuname={setuname}></Login>}></Route>
        <Route path={'/signup'} element={<Signup uname={uname} setuname={setuname}></Signup>}></Route>
        <Route path={'/landing'} element={<Landing></Landing>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}
export default App;
