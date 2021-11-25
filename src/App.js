import React, { useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import SignUp from "./Components/Signup"
import Login from "./Components/Login"
import Dashboard from "./Components/Dashboard"
//components
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="card">
          <div className="card-header text-center">
            <h3>login Vault</h3>
          </div>
          <div className="card-body">
            <Switch>
              <Route path="/" exact component={SignUp} />
              <Route path="/login" exact element={<Login />} />
              <Route path="dashboard/:username" exact element={<Dashboard />} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
