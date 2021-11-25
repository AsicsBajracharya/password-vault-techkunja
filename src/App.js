import React, { useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./Components/Signup"
import Login from "./Components/Login"
//components
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="card">
          <div className="card-header text-center">
            <h3>Password Vault</h3>
          </div>
          <div className="card-body">
            <Routes>
              <Route path="/" exact element={<SignUp />} />
              <Route path="/login" exact element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
