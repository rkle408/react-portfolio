import React from "react";
import "./style.css";

function ResumePage (){

    const downloadFile = () => {
        window.location.href = "https://drive.google.com/file/d/1iGb2NVHFH9Hh0f7vhJjpgX_lCB50XB8W/view?usp=sharing"
      }

    return (
        <section className="left">
            <h1 className="H1">Check out my resume!</h1>
            <button className="resumeBtn" onClick={downloadFile} target="_blank">Download Rosa's Resume</button>
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