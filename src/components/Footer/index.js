import React from "react";

function Footer() {
    const icons = [
        {
            name: "fa-brands fa-github",
            link: "https://github.com/rkle408"
        },
        {
            name: "fa-brands fa-linkedin",
            link: "https://www.linkedin.com/in/rosakle/"
        },
        {
            name: "fa-brands fa-twitter",
            link: "https://twitter.com/roseeeypoo"
        }
    ]

    return (
        <footer>
            <div style={{fontSize: "25px", backgroundColor: "#353535", padding: "30px", display: "flex", flexDirection: "row", justifyContent: "center", gap: "30px"}}>
                {icons.map(icon => {
                    return <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer" style={{color: "#d9d9d9"}}><i className={icon.name}></i></a> 
                })}
            </div>
        </footer>
    )
}

export default Footer;