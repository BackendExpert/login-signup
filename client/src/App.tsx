import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/LoginSignup/Login";
import SignUp from "./components/LoginSignup/SignUp";

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} ></Route>
          <Route path="/Signup" element={<SignUp />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}