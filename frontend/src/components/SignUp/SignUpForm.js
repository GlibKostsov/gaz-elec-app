import { useState } from 'react'
import Input from '../UI/Input'
import http from '../../services/service'

const SignUpForm = () => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const formIsValid = true

  const submitHandler = (e) => {
    e.preventDefault()

    if (formIsValid) {
      //Send a http request
    }
  }

  return (
    <div>
      <h1>Sign Up For Free</h1>
      <form onSubmit={submitHandler}>
        <Input
          id='first-name'
          label='First Name'
          type='text'
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
        />
        <Input
          id='last-name'
          label='Last Name'
          type='text'
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value)
          }}
        />
        <Input
          id='email'
          label='Email Address'
          type='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <Input
          id='password'
          label='Set A Password'
          type='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <Input
          id='password-repeat'
          label='Repeat A Password'
          type='password'
          value={passwordRepeat}
          onChange={(e) => {
            setPasswordRepeat(e.target.value)
          }}
        />
        <div>forgot password?</div>
        <button>GET STARTED</button>
      </form>
    </div>
  )
}

export default SignUpForm
