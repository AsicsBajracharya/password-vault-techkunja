import React, { useEffect, useState } from "react"
import { Link, withRouter } from "react-router-dom"
import axios from "axios"
import { useImmerReducer } from "use-immer"
function SignUp(props) {
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
        draft.username.hasErrors = false
        draft.username.value = action.value
        return
      case "checkUsername":
        draft.username.checkCount++
        return
      case "showError":
        draft.username.hasErrors = true
        draft.username.message = action.value
      case "passwordImmediately":
        draft.password.value = action.value
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, intitialState)

  useEffect(() => {
    if (state.username.checkCount) {
      async function checkEmail() {
        try {
          const response = await axios.get(`http://localhost:3000/data?username=${state.username.value}`)
          console.log(Boolean(response.data.length))
          if (response.data.length) {
            dispatch({ type: "showError", value: "username already taken" })
          } else {
            console.log("username does not exist")
            props.history.push(`/dashboard/${state.username.value}`)
          }
        } catch (e) {
          console.log(e, "there was an error")
        }
      }
      checkEmail()
    }
  }, [state.username.checkCount])

  async function handleSubmit(e) {
    e.preventDefault()
    console.log("button clicked")
    // console.log("email", password)
    // try {
    //   const response = await axios.post("http://localhost:3000/data", { email: `${email}`, password: `${password}` })
    //   console.log(response.data)
    // } catch (e) {
    //   console.log(e, "there was an error")
    // }
    console.log("checkcount submit", state.username.checkCount)
    dispatch({ type: "checkUsername" })
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
          </div>
          {state.username.hasErrors && <p className="text-danger">{state.username.message}</p>}
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">@</div>
            </div>
            <input onChange={(e) => dispatch({ type: "passwordImmediately", value: e.target.value })} type="text" className="form-control" id="password" placeholder="Password" />
            <div className="input-group-append">
              <div className="input-group-text">@</div>
            </div>
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

export default withRouter(SignUp)
