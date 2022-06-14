import React from 'react'
import Loginformik from '../../components/pure/forms/loginFormik'
import { useHistory} from 'react-router-dom'

const LoginPage = () => {
  const history = useHistory()
  const navigateTo = (path) => {
    history.push(path)
  }
  return (
    <div>
        <h1>LoginPage</h1>
        <Loginformik></Loginformik>
        <button onClick={() => navigateTo('/register')}>
          go to register
        </button>
    </div>
  )
}

export default LoginPage