import React, { useState } from "react"

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch("http://localhost:3000/reg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      const text = await res.text()
      alert("Registration result: " + text)
    } catch (err) {
      alert("Registration failed: " + err.message)
      console.error("Fetch error:", err)
    }
  }

  return (
    <div>
      <h2>Register User</h2>
      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name" onChange={handleChange} required /><br />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} required /><br />
        <input name="email" placeholder="Email" type="email" onChange={handleChange} required /><br />
        <input name="username" placeholder="Username" onChange={handleChange} required /><br />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} required /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
