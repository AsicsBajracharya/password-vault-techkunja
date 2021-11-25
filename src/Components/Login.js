import React, { useEffect } from "react"
import { Link } from "react-router-dom"
function Login() {
  return (
    <div className="card">
      <div className="card-body">
        <form action="">
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div>
            <input type="text" class="form-control" id="email" placeholder="Email" />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div>
            <input type="text" class="form-control" id="email" placeholder="Email" />
          </div>
          <div className="button-containern d-flex justify-content-between">
            <Link to="/login" className="btn btn-secondary">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
