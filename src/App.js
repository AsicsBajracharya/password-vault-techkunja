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
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/signup" exact>
                <SignUp />
              </Route>

              <Route path="/dashboard/:username" exact>
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
