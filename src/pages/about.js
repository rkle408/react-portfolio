import React from "react";
import "./style.css";

function AboutPage (){
    return (
        <section className="paragraph">
            <h1 className="H1">Hi there. It's nice to meet you! I'm Rosa!</h1>
            <img src="../rosa-le.png" alt="Headshot of Rosa"></img>
            <p>My first experience with coding was customizing a MySpace page. I remember seeing someone else's page had features that none of the rest of our pages had, so I sent her a message, and asked how she was able to select those features. She sent me a message back, "you can't select, you need to code. you can start here," and she sent me a website that had HTML code, which may as well have been a foreign language. The rest was up to me to do my own research... Next thing you know, I had photos in the "Bio" section (unheard of!), and music playing (no, sorry, you can't pause it... yes, it's only one song on repeat.)</p>
            <p>As I have journeyed through the rigorous course load that is UCSD Extension Full Stack Flex Bootcamp, I learned that I have much to learn... but I now have a soild foundation to build upon. </p>
        </section>
    )
};

export default AboutPage;