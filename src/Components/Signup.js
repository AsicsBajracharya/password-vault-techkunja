import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useImmerReducer } from "use-immer"
function SignUp() {
  const intitialState = {
    username: {
      value: "",
      hasErrors: false,
      message: "",
      checkCount: 0,
    },
    password: {
      value: "",
      hasErrors: false,
      message: "",
      checkCount: 0,
    },
    submitCount: 0,
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "emailImmediately":
        draft.username.value = action.value
        return
      case "usernameAfterDelay":
        draft.username.checkCount++
        return
      case "passwordImmediately":
        draft.password.value = action.value
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, intitialState)

  async function handleSubmit(e) {
    e.preventDefault()
    // console.log("email", password)
    // try {
    //   const response = await axios.post("http://localhost:3000/data", { email: `${email}`, password: `${password}` })
    //   console.log(response.data)
    // } catch (e) {
    //   console.log(e, "there was an error")
    // }
  }

  return (
    <div className="card">
      <div className="card-body">
        <form action="">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">@</div>
            </div>
            <input onChange={(e) => dispatch({ type: "emailImmediately", value: e.target.value })} type="text" className="form-control" id="email" placeholder="Email" />
            {state.username.hasErrors && <p className="text-danger">{state.username.message}</p>}
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">@</div>
            </div>
            <input onChange={(e) => dispatch({ type: "passwordImmediately", value: e.target.value })} type="text" className="form-control" id="password" placeholder="Password" />
            <div className="input-group-append">
              <div className="input-group-text">@</div>
            </div>
            {state.username.hasErrors && <p className="text-danger">{state.username.message}</p>}
          </div>

          <div className="button-containern d-flex justify-content-between">
            <button onClick={handleSubmit} className="btn btn-danger">
              Create Account
            </button>
            <Link to="/login" className="btn btn-secondary">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
