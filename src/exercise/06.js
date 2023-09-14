// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef, useState} from "react";

function UsernameForm({onSubmitUsername}) {
  const inputRef = useRef(null);
  const inputEmailRef = React.useRef(null);
  const [userName, setUserName] = useState('john');
  const [emailError, setEmailError] = React.useState(null);

  const handleInputChange = (event) => {
    const {value} = event.target;
    setUserName(value.toLowerCase()); // convert upperCase to lowerCase on the fly
  }

  const handleEmailInputChange = (event) => {
    const value = event.target.value;
    console.log(value)
    const isValid = value.includes('@') || !value;
    setEmailError(isValid ? null :'Email must contain an @');
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.elements.userName.value) // userName - is a name/id attribute
    const email = inputEmailRef.current.value;
    onSubmitUsername(`User name: ${userName}, email: ${email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input
          ref={inputRef}
          value={userName}
          onChange={handleInputChange}
          type="text"
          name="userName"
          id='userName'
        />
      </div>

      <div>
        <label htmlFor="userName">Email:</label>
        <input
          ref={inputEmailRef}
          onChange={handleEmailInputChange}
          defaultValue="john@doe.com"
          type="text"
          name="email"
          id='email'
        />
        {emailError && <span role='alert' style={{color: 'coral'}}>{emailError}</span> }
      </div>
      <button type="submit" disabled={!!emailError}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
