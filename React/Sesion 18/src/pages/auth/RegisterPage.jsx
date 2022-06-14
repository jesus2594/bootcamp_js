import React from 'react'
import { useHistory} from 'react-router-dom'

const RegisterPage = () => {
  const history = useHistory()
  const navigateTo = (path) => {
    history.push(path)
  }
  return (
    <div>
        <h1>RegisterPage</h1>
        <button onClick={() => navigateTo('/login')}>
          go to Login
        </button>
    </div>
  )
}

export default RegisterPage