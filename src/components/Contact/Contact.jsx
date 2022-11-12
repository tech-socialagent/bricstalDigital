import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="ContactWrap">
            <div className="row01">
                <h3>Contact</h3>
                <h1>We’re here to help you level up</h1>
            </div>
            <div className="row02">
                <div className="r2Text">
                    We're just one click away to help you take your brand or product from great to incredible. Fill in the form to share more details about your project. Or your favorite gum flavor. Either way, we’d love to talk.
                </div>
                <form className="form">
                        <label>What's your name</label>
                        <input type="text" />
                        <label>your email</label>
                        <input type="email" />
                        <label>What can we help you with?</label>
                        <input type="text" />
                        <button type='submit'>Send</button>
                </form>
            </div>
            <div className="row03"></div>
            <div className="row04"></div>
            <div className="row05"></div>
        </div>
    )
}

export default Contact