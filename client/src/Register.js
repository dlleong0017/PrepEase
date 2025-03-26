import { useState } from 'react'

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch("http://localhost:3000/reg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const result = await response.text()
    alert(result)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="firstName" placeholder="First Name" onChange={handleChange} />
      <br />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} />
      <br />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} />
      <br />
      <input name="username" placeholder="Username" onChange={handleChange} />
      <br />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <br />
      <button type="submit">Register</button>
    </form>
  )
}

export default Register
