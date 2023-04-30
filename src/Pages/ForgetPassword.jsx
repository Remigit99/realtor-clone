

import { useState } from 'react'
import './Signin.css'
import GoogleOauth from '../components/GoogleOauth'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {

    const [formData, setFormData] = useState({
        email: " "
    })

    const { email } = formData;

    const inputChange = (e) => {
        setFormData(prev => ({
            ...prev, [e.target.id]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div>
            <div className="container signin__container">
                <h1>Forget Password</h1>

                <div className="signin__main">
                    <div className="signin__left">
                        <img src="https://ap.rdcpix.com/8727c07401b5424e0a23340ffa7e8555l-m3276659621od-w480_h360.webp" alt="keys" />
                    </div>

                    <div className="signin__right">
                        <form onSubmit={handleSubmit}>
                            <input type="email" name="email" id="email" placeholder='Email address' value={email} onChange={inputChange} />

                            <button type="submit" className='btn-s'> RESET PASSWORD</button>

                            <div className="reg__fpass">
                                <p>
                                    <span>Don't have an account?</span>
                                    <Link to="/sign-up">Register</Link>
                                </p>

                            </div>

                            <div className="or">
                                <p>OR</p>
                            </div>

                            <GoogleOauth />

                        </form>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword;