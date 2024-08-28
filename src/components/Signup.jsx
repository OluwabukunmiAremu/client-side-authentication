import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'

const Signup = () => {
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //passing Data to our server side 
  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3000/auth/signup', {
          username, 
          email,
          password,
        }).then(response => {
          console.log('sign up successful')
          console.log(response.data)
        }).catch(err => { 
          console.log('error during signup')  
          console.log(err)
        })
  };

  return (
        <div className='sign-up-container'>
          <form className='sign-up-form' onSubmit={handleSubmit}>
        
            <h2>Sign Up</h2>
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />

            <label htmlFor="email">Email:</label>
            <input type="email" autoComplete='off'  placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password:</label>
            <input type="password" placeholder='*******' onChange={(e) => setPassword(e.target.value)} />

            <button type='submit'>Sign up</button>

          </form>

        </div>
  )
}

export default Signup