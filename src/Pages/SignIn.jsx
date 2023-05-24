import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'
import './Signin.css'
import GoogleOauth from '../components/GoogleOauth'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { toast } from 'react-toastify'

const SignIn = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const { email, password } = formData;

    const inputChange = (e) => {
        setFormData(prev => ({
            ...prev, [e.target.id]: e.target.value
        }))

        // setFormData({})
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredentials.user;
            // console.log(user);
            if (user) {
                navigate("/")
            }


        } catch (error) {
            toast.error("Sign In Error")
        }

    }

    return (
        <div>
            <div className="container signin__container">
                <h1>Sign In</h1>

                <div className="signin__main">
                    <div className="signin__left">
                        <img src="https://ap.rdcpix.com/8727c07401b5424e0a23340ffa7e8555l-m3276659621od-w480_h360.webp" alt="keys" />
                    </div>

                    <div className="signin__right">
                        <form onSubmit={handleSubmit}>
                            <input type="email" name="email" id="email" placeholder='Email address' value={email} onChange={inputChange} />
                            <div className="pass__group">
                                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder='Password' value={password} onChange={inputChange}

                                />

                                {/* <div className="eye">

                                    {
                                        showPassword ?
                                            <AiFillEye onClick={() => setShowPassword(prev => !prev)} className="eyefill" /> : <AiFillEyeInvisible onClick={() => setShowPassword(prev => !prev)} className="eyefill" />
                                    }

                                </div> */}

                            </div>

                            <button type="submit" className='btn-s'> SIGN IN</button>

                            <div className="reg__fpass">
                                <p>
                                    <span>Don't have an account?</span>
                                    <Link to="/sign-up">Register</Link>
                                </p>

                                <Link to="/forgot-password"> Forget Password </Link>
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

export default SignIn