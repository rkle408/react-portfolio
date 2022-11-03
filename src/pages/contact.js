import React, { useState } from "react";

function ContactPage (){
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (event) => {
        if (event.target.name === "email") {
        } else {
            if (event.target.name === "email") {
                setErrorMessage(`${event.target.name} is required!`)
            }
        }
    }

    return (
        <section>
            <h1>Contact Me!</h1>
            <form id="contact-form">
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" onBlur={handleChange}/>
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