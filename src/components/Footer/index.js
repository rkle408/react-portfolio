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
            {icons.map(icon => {
                return <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a> 
            })}
        </footer>
    )
}

export default Footer;