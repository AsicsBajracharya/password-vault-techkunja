import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
function Dashboard() {
  const [searchKeyword, setSearchKeyword] = useState("")
  const [userId, setUserId] = useState("")
  const [userData, setUserData] = useState([])
  const [userDataToDisplay, setUserDataToDisplay] = useState([])
  const [newAppName, setNewAppName] = useState("")
  const [newAppPassword, setNewAppPassword] = useState("")

  const params = useParams()

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(`http://localhost:3000/data?username=${params.username}`)
        console.log(response.data)
        if (response && response.data.length) {
          setUserId(response.data[0].id)
        }
      } catch (e) {
        console.log(e, "there was an error")
      }
    }
    fetchUser()
  }, [])

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(`http://localhost:3000/userData?id=${userId}`)
        console.log(response.data)
        if (response && response.data.length) {
          setUserData(response.data[0].passwords)
          setUserDataToDisplay(response.data[0].passwords)
        }
      } catch (e) {
        console.log(e, "there was an error fetching user data")
      }
    }
    if (userId) {
      fetchUserData()
    }
  }, [userId])

  useEffect(() => {
    if (searchKeyword === "") {
      setUserDataToDisplay(userData)
    }
  }, [searchKeyword])

  function searchPassword() {
    const searchResults = userData?.filter((item) => item.name.includes(searchKeyword))
    setUserDataToDisplay(searchResults)
  }
  async function submitPassword(e) {
    e.preventDefault()
    const response = await axios.put(`http://localhost:3000/userData/${userId}/passwords`, { name: newAppName, password: newAppPassword })
    console.log(response.data)
  }

  return (
    <div className="container">
      <h3>Your dashboard </h3>
      <div className="card">
        <div className="card-header">add a password</div>
        <div className="card-body">
          <input onChange={(e) => setNewAppName(e.target.value)} type="text" className="form-input" />
          <input onChange={(e) => setNewAppPassword(e.target.value)} type="text" className="form-input" />
          <button onClick={submitPassword} className="btn btn-info">
            submit password
          </button>
        </div>
      </div>
      <div className="input-group">
        <div className="input-group-prepend">
          <div class="input-group-text" onClick={searchPassword}>
            @
          </div>
        </div>
        <input onChange={(e) => setSearchKeyword(e.target.value)} value={searchKeyword} type="text" placeholder="search username" className="form-input" />
      </div>

      <button className="btn btn-yellow">search</button>
      {userDataToDisplay?.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="d-flex">
              <div className="left">{item.name}</div>
              <div className="left">{item.password}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Dashboard

//find the id of the current user

//fetch data of the given user by their id

//
