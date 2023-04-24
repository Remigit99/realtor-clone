

import { useState } from 'react'
import './Signin.css'
import GoogleOauth from '../components/GoogleOauth'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: " ",
        password: " "
    })

    const { name, email, password } = formData;

    const inputChange = (e) => {
        setFormData(prev => ({
            ...prev, [e.target.id]: e.target.value
        }))
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <section>
            <div className="container signin__container">
                <h1>Sign In</h1>

                <div className="signin__main">
                    <div className="signin__left">
                        <img src="https://ap.rdcpix.com/8727c07401b5424e0a23340ffa7e8555l-m3276659621od-w480_h360.webp" alt="keys" />
                    </div>

                    <div className="signin__right">
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" id="name" placeholder='Full Name address' value={name} onChange={inputChange} />

                            <input type="email" name="email" id="email" placeholder='Email address' value={email} onChange={inputChange} />

                            <div className="pass__group">
                                <input type={showPassword ? "text" : "password"}
                                    name="password" id="password" placeholder='Password' value={password} onChange={inputChange} />
                                {/* Eyefill__icon */}
                            </div>

                            <button type="submit"> SIGN UP</button>

                            <div className="reg__fpass">
                                <p>
                                    <span>Have an account?</span>
                                    <Link to="/sign-in">Sign In</Link>
                                </p>

                                <Link to="/forget-password" />
                            </div>

                            <div className="divide">
                                <p>OR</p>
                            </div>

                            <GoogleOauth />

                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp;