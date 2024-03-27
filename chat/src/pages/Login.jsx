import React from 'react'
import "/Users/smritidoneria/Desktop/chat_firebase/chat/src/styles.css"

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>chat</span>
            <span className='title'>Login</span>

            <form>
              
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
              
               
                <button>Sign in</button>
            </form>
            <p>You don't have a account? Register</p>
        </div>
    </div>
  )
}

export default Register