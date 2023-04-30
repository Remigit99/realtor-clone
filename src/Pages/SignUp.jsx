
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'
import './Signin.css'
import GoogleOauth from '../components/GoogleOauth'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../firebase"
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from "../firebase"


const SignUp = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })


    const { name, email, password } = formData;

    const inputChange = (e) => {
        setFormData(prev => ({
            ...prev, [e.target.id]: e.target.value
        }))

    }

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            updateProfile(auth.currentUser, { displayName: name })
            const user = userCredential.user;
            const formDataCopy = { ...formData }
            delete formDataCopy.password
            formDataCopy.timestamp = serverTimestamp()
            await setDoc(doc(db, "users", user.uid), formDataCopy)
            toast.success("That was successful")
            navigate("/")

        } catch (error) {
            // console.log(error)
            toast.error("That went wrong")
        }
    }

    return (
        <div>
            <div className="container signin__container">
                <h1>Sign Up</h1>

                <div className="signin__main">
                    <div className="signin__left">
                        <img src="https://ap.rdcpix.com/8727c07401b5424e0a23340ffa7e8555l-m3276659621od-w480_h360.webp" alt="keys" />
                    </div>

                    <div className="signin__right">
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" id="name" placeholder='Full Name' value={name} onChange={inputChange} />
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

                            <button type="submit" className='btn-s'> SIGN UP</button>

                            <div className="reg__fpass">
                                <p>
                                    <span>Have an account?</span>
                                    <Link to="/sign-in">Sign In</Link>
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

export default SignUp;