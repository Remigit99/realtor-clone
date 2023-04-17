
import React from 'react'

const SignIn = () => {
    return (
        <section>
            <div className="container signin__container">
                <h1>Sign In</h1>

                <div className="signin__main">
                    <div className="signin__left">
                        <img src="https://ap.rdcpix.com/8727c07401b5424e0a23340ffa7e8555l-m3276659621od-w480_h360.webp" alt="keys" />
                    </div>

                    <div className="signin__right">
                        <form >
                            <input type="email" name="email" id="email" placeholder='Email address' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn