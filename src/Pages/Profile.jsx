
import React, { useState } from 'react'
import './Signin.css'
import { auth } from '../firebase';
// import { auth } from '../firebase'

const Profile = () => {

    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email
    })

    const { name, email } = formData;

    return (

        <section id="profile">
            <h1>My Profile</h1>

            <div className="container profile__container">

                <form>
                    <input type="text" value={name} placeholder={name} disabled />

                    <input type="email" name="email" id="email" value={email} disabled />


                    <div className='edit__out'>
                        <p className='edit__name'>
                            Want to change your name? <span>Edit</span>
                        </p>

                        <p className='sign-out'>Sign Out</p>

                    </div>

                </form>

            </div>
        </section>
    )
}

export default Profile