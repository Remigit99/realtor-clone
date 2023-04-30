
import { AiOutlineGoogle } from 'react-icons/ai'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, db } from '../firebase'
import { toast } from 'react-toastify'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'


const GoogleOauth = () => {
    const navigate = useNavigate();

    const handleGoogleAuth = async () => {

        try {
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            // console.log(user)

            // Check if a user exists in the db

            const docRef = doc(db, "users", user.uid)
            const docSnap = await getDoc(docRef)
            if (!docSnap.exists()) {
                await setDoc(docRef, { name: user.displayName, email: user.email, timestamp: serverTimestamp() })
            }

            navigate("/")

        } catch (error) {
            toast.error("Error with Google Authentication!")
        }


    }

    return (
        <button type='button' onClick={handleGoogleAuth} style={{
            padding: '0.6rem', background: 'rgb(204, 71, 71)', color: 'white', borderRadius: '8px', fontWeight: 'bolder', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', cursor: 'pointer'
        }}>
            <AiOutlineGoogle style={{ marginLeft: '1rem', padding: '1rem', borderRadius: '50%', background: 'white' }} />
            <span> CONTINUE WITH GOOGLE </span>
        </button>
    )
}

export default GoogleOauth;