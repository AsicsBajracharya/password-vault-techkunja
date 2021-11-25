import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    //check if the username exist
    const response = await axios.get(`http://localhost:3000/data?username=${username}`)

    //if username doesnot exist prevent login show error
    if (response.data && !response.data.length) {
      setError("username does not exist")
      return
    }

    //if username exist then check for password
    const passwordFromServer = response.data[0].password

    //if not matched show error
    if (passwordFromServer !== password) {
      setError("password dont match")
      return
    }

    //if password match redirect todashboard
    history.push(`/dashboard/${username}`)
  }

  return (
    <div className="card">
      <div className="card-body">
        <form action="">
          {error}
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div>
            <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" class="form-control" id="email" placeholder="Email" />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="text" class="form-control" id="email" placeholder="Email" />
          </div>
          <div className="button-containern d-flex justify-content-between">
            <button onClick={handleSubmit} className="btn btn-secondary">
              Login
            </button>
            <p>
              No account yet, <Link to="/signup">Signup</Link> instead
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
