import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { register } from '../../actions/userActions'
import Input from '../UI/Input'

const SignUpForm = () => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
      console.log(message)
    } else {
      dispatch(register(firstName, lastName, email, password))
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
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value)
          }}
        />
        <div>forgot password?</div>
        <button>GET STARTED</button>
      </form>
    </div>
  )
}

export default SignUpForm
