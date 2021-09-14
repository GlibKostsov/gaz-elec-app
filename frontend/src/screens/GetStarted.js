import Modal from '../components/UI/Modal'
import SignUpForm from '../components/SignUp/SignUpForm'

const GetStarted = () => {
  return (
    <Modal>
      <div>
        <button>Sign Up</button>
        <button>Log In</button>
      </div>
      <SignUpForm />
    </Modal>
  )
}

export default GetStarted
