import React from "react";
import "./style.css";
import Headshot from "../assets/rosa-le-crop.png"

function AboutPage (){
    return (
        <section className="left">
            <h1 className="H1">Hi there. It's nice to meet you! I'm Dr. Rosa!</h1>
            <img className="headshot" src={Headshot} alt="Headshot of Rosa"></img>
            <p>You read that right... yes, I'm a dentist!</p>
            <p>I recently embarked on journey through the rigorous courseload that is the UC San Diego Extension Full Stack Flex Bootcamp in hopes of starting my career as a web developer.</p>
            <p>Through the journey through HTML + CSS + vanilla JavaScript, MySQL, and now through Express, MongoDB, ReactJS, I learned that still I have much to learn... and I now have a soild foundation to build upon. </p>
            <p>It is my hope that one day, I can combine my knowledge of the dental/healthcare field with my contiuously growing knowledge of web development, to help not only other dentists, but improve the lives of patients.</p>
        </section>
    )
};

export default AboutPage;