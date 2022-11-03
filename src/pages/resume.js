import React from "react";

function ResumePage (){

    const downloadFile = () => {
        window.location.href = "https://drive.google.com/file/d/1iGb2NVHFH9Hh0f7vhJjpgX_lCB50XB8W/view?usp=sharing"
      }

    return (
        <section>
            <h1>Check out my resume!</h1>
            <button onClick={downloadFile} target="_blank">Download Rosa's Resume</button>
            <div>
                <h2>Skills</h2>
                <ul>
                    <li>Front-end technologies: HTML, CSS, JavaScript, React</li>
                    <li>Back-end technologies: JavaScript, jQuery, Node.js, Express, MySQL, MongoDB</li>
                    <li>Database design and analysis</li>
                    <li>DevOps: Git</li>
                    <li>JSON, RESTful APIs </li>
                </ul>
            </div>
        </section>
    )
};

export default ResumePage;