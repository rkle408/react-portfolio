import React from "react";

function ResumePage (){

    const downloadFile = () => {
        window.location.href = "https://drive.google.com/file/d/1iGb2NVHFH9Hh0f7vhJjpgX_lCB50XB8W/view?usp=sharing"
      }

    return (
        <div>
             <button onClick={downloadFile} target="_blank">Download Resume</button>
        </div>
    )
};

export default ResumePage;