import React from "react";
import "./style.css";

function ResumePage (){

    const downloadFile = () => {
        window.location.href = "https://drive.google.com/file/d/1eROFBMSMIqEYPcPISVzpTbK6Vr3AFNhs/view?usp=sharing"
      }

    return (
        <section className="resume">

            <h1 className="H1">Check out my resume!</h1>
            <button className="resumeBtn" onClick={downloadFile} target="_blank">View and download Rosa's Resume</button>
            <div>
                <h2>Skills</h2>
                <ul>
                    <li>Front-end technologies: HTML, CSS, JavaScript, React</li>
                    <li>Back-end technologies: JavaScript, jQuery, Node.js, Express, MySQL, MongoDB</li>
                    <li>Database design and analysis</li>
                    <li>GraphQL</li>
                    <li>DevOps: Git</li>
                    <li>JSON, RESTful APIs</li>
                    <li>Local storage, session storage</li>
                </ul>
            </div>
        </section>
    )
};

export default ResumePage;