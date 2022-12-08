import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import "./style.css";
import textEditor from "../assets/text-editor.png"
import social from "../assets/social-network.png"
import dibs from "../assets/dibs-homepage.png";
import gifBoard from "../assets/gif-board-screenshot2.png";
import workDay from "../assets/work-day-scheduler-screenshot.png";
import passwordGen from "../assets/password-generator-screenshot.png";
import happyPanda from "../assets/happypanda.png";
import smileLine from "../assets/smileline.png";

function PortfolioPage (){
    return (
        <section className="portfolio">
            <h1 className="H1">Rosa's Portfolio</h1>
        
        <section>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Project "Smile Line"</Accordion.Header>
                    <Accordion.Body>
                        As dental patients, there are many questions we have, and just not enough time while we're at the dental office. Here is a resource to help guide you!
                        <br/><br/>We utilized React, Node, Bootstrap.
                        <br/><br/>
                        <a href="https://smile-line.vercel.app/" target="_blank" rel="noreferrer"><img className="portfolioPics" src={smileLine} alt="Screenshot - Dental terms page of Smile Line" /></a><br/><br/>
                        <a className="githubRepo" href="https://github.com/rkle408/smile-line" target="_blank" rel="noreferrer">SmileLine GitHub Repo</a>
                        </Accordion.Body>
            </Accordion.Item><br/>

            <Accordion.Item eventKey="1" className="border">
                <Accordion.Header>Project "Happy Panda"</Accordion.Header>
                    <Accordion.Body>
                        With the recent world events, it's been difficult for children to navigate life and social emotional learning. This app is the start of a tool to help young kids I idenify and rectify negative feelings.
                        <br/><br/>
                        We utilized MongoDB/Mongoose, Express, React, Node, GraphQL, JSON Web Tokens (JWT), bcrypt, Bulma, and Howler.
                        <br/><br/>
                        <figure>
                            <a href="https://safe-peak-97961.herokuapp.com/" target="_blank" rel="noreferrer"><img className="portfolioPics" src={happyPanda} alt="Screenshot - homepage of Happy Panda" /></a>
                        </figure><br/>
                        <a className="githubRepo" href="https://github.com/rkle408/happy-panda" target="_blank" rel="noreferrer">Happy Panda GitHub Repo</a>
                    </Accordion.Body>
            </Accordion.Item><br/>

            <Accordion.Item eventKey="2" className="border">
                <Accordion.Header>Project "dibs"</Accordion.Header>
                <Accordion.Body>
                    We developed an application that allows you to post things you want to give away, and get items, all for free! We utilized Node, Bootstrap framework, along with jQuery.
                    <br/><br/>
                    <figure>
                        <a href="https://intense-brook-23504.herokuapp.com/" target="_blank" rel="noreferrer"><img className="portfolioPics" src={dibs} alt="Screenshot - homepage of our marketplace" /></a>
                    </figure><br/>
                    <a className="githubRepo" href="https://github.com/rkle408/dibs" target="_blank" rel="noreferrer">Dibs GitHub Repo</a>
                </Accordion.Body>
            </Accordion.Item><br/>

            <Accordion.Item eventKey="3" className="border">
                <Accordion.Header >Project "gif-board"</Accordion.Header>
                <Accordion.Body>
                    In my first project working with a team, together, we developed an application that required the use of two APIs. We decided to bring a little joy to your day by making a random word generator (or you could select your own word!) that also generates an associated gif! Warning: it may not be completely kid-friendly! We utilized the Bulma framework, along with jQuery.
                    <br/><br/>
                    <figure id="gif-board-img">
                    <a href="https://rkle408.github.io/gif-board/" target="_blank" rel="noreferrer"><img className="portfolioPics" src={gifBoard} alt="Screenshot of home page of random word and gif generator application" /></a>
                    </figure><br/>
                    <a className="githubRepo" href="https://github.com/rkle408/gif-board" target="_blank" rel="noreferrer">Gif Board GitHub Repo</a>
                </Accordion.Body>
            </Accordion.Item><br/>

            <Accordion.Item eventKey="4" className="border">
                <Accordion.Header>Project "text-editor"</Accordion.Header>
                <Accordion.Body>
                    Do you need a Progressive Web App to edit your text? Well, look no further, we have just what you're looking for here! This will also highlight your code depending on the syntax type!
                    <br/><br/>
                    <figure>
                        <a href="https://fast-fortress-26712.herokuapp.com/" target="_blank" rel="noreferrer"><img className="portfolioPics" src={textEditor} alt="Screenshot - of text editor" /></a>
                    </figure><br/>
                    <a className="githubRepo" href="https://github.com/rkle408/text-editor" target="_blank" rel="noreferrer">Text Editor GitHub Repo</a>
                </Accordion.Body>
            </Accordion.Item><br/>

            <Accordion.Item eventKey="5" className="border">
                    <Accordion.Header>Project "social-network"</Accordion.Header>
                <Accordion.Body>
                    I have utilized Node, Express, and Mongoose to create a back-end for a social network, where you can implement CRUD to users, friend lists, posts, and replies.
                    <br/><br/>
                    <figure>
                        <a href="https://drive.google.com/file/d/12Hlu7Vr1VGJL4caXN7dLxcMC8EyeDa0K/view" target="_blank" rel="noreferrer"><img className="portfolioPics" src={social} alt="Screenshot - homepage of our marketplace" /></a>
                    </figure><br/>
                    <a className="githubRepo" href="https://github.com/rkle408/social-network" target="_blank" rel="noreferrer">Social Network GitHub Repo</a>
                </Accordion.Body>
            </Accordion.Item><br/>

            <Accordion.Item eventKey="6" className="border">
                <Accordion.Header>Project "work-day-scheduler"</Accordion.Header>
                <Accordion.Body class="message-body">
                    Utilizing JavaScript and jQuery, I developed an interactive one-day work scheduler that invokes local storage to keep your reminders.
                    <figure id="work-day-scheduler-img">
                            <a href="https://rkle408.github.io/work-day-scheduler/" target="_blank" rel="noreferrer"><img className="portfolioPics" src={workDay} alt="Screenshot of work day scheduler/planner application" /></a>
                    </figure><br/>
                    <a className="githubRepo" href="https://github.com/rkle408/work-day-scheduler" target="_blank" rel="noreferrer">Work Day Scheduler GitHub Repo</a>
                </Accordion.Body>
            </Accordion.Item><br/>

            <Accordion.Item eventKey="7" className="border">
                    <Accordion.Header>Project "password-generator"</Accordion.Header>

                <Accordion.Body>
                    <p>Do you use the same password for everything? Well, fear not, I've built the perfect application for you to generate a random (... and probably easily-forgettable password! Just tell us what your preferences are!</p>
                    <figure id="password-generator-img">
                    <a href="https://rkle408.github.io/password-generator/" target="_blank" rel="noreferrer"><img className="portfolioPics" src={passwordGen} alt="Screenshot of random password generator"/></a>
                    </figure>
                    <a className="githubRepo" href="https://github.com/rkle408/password-generator" target="_blank" rel="noreferrer">Password Generator GitHub Repo</a>
                </Accordion.Body>
            </Accordion.Item><br/>
            </Accordion>
            </section>
        </section>
    )
};

export default PortfolioPage;