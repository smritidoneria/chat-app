import React from 'react'
import "/Users/smritidoneria/Desktop/chat_firebase/chat/src/styles.css"

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>chat</span>
            <span className='title'>Register</span>

            <form>
                <input type="text" placeholder='name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input className="fileContainer" type="file" id='file'/>
               
                <button>Sign up</button>
            </form>
            <p>You do have a account? Login</p>
        </div>
    </div>
  )
}

export default Register