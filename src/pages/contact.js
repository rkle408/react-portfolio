import React, { useState } from "react";
import "./style.css";

function ContactPage (){
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errorMessage, setErrorMessage] = useState("");

    const { name, email, message } = formState;

    const validateEmail = (email) => {
        const re = /.+\@.+\..+/;
        return re.test(String(email).toLowerCase())
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errorMessage) {
            // alert("Submitting form");
            console.log("submit form", formState);
        }
    }

    const handleChange = (event) => {
        event.preventDefault();
        if (event.target.name === "email") {
            const isValid = validateEmail(event.target.value);
            if (!isValid) {
                setErrorMessage("Your email is invalid")
            } else {
                setErrorMessage("")
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required!`)
            } else {
                setErrorMessage("");
            }
            if(!errorMessage) {
                setFormState({...formState, [event.target.name]: event.target.value});
            }
        }
    }

    return (
        <section className="paragraph">
            <h1 className="H1">Contact Me!</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label><br/>
                    <input className="textbox" type="text" name="Name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label><br/>
                    <input className="textbox" type="email" name="Email" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message: </label><br/>
                    <textarea className="textbox" name="Message" rows="4" defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
};

export default ContactPage;