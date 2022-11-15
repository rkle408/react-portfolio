import React from "react";
import "./style.css";
import textEditor from "../assets/text-editor.png"
import social from "../assets/social-network.png"
import dibs from "../assets/dibs-homepage.png";
import gifBoard from "../assets/gif-board-screenshot2.png";
import workDay from "../assets/work-day-scheduler-screenshot.png";
import passwordGen from "../assets/password-generator-screenshot.png";
import happyPanda from "../assets/happypanda.png";

function PortfolioPage (){
    return (
        <section className="paragraph">
            <h1 className="H1">Rosa's Portfolio</h1>

            <article className="border">
                <div id="dibs">
                    <h2>Project "Happy Panda"</h2>
                </div>
                <div>
                    <p>With the recent world events, it's been difficult for children to navigate life and social emotional learning. This app is the start of a tool to help young kids I idenify and rectify negative feelings. We utilized MongoDB/Mongoose, Express, React, Node, GraphQL, JSON Web Tokens (JWT), bcrypt, Bulma, and Howler.</p>
                    <br/>
                    <figure>
                        <a href="https://safe-peak-97961.herokuapp.com/" target="_blank" rel="noreferrer"><img className="portfolioPics" src={happyPanda} alt="Screenshot - homepage of Happy Panda" /></a>
                    </figure>
                    <a className="githubRepo" href="https://github.com/rkle408/happy-panda" target="_blank" rel="noreferrer">Happy Panda GitHub Repo</a>
                </div>
            </article><br/>

            <article className="border">
                <div id="dibs">
                    <h2>Project "dibs"</h2>
                </div>
                <div>
                    <p>We developed an application that allows you to post things you want to give away, and get items, all for free! We utilized Node, Bootstrap framework, along with jQuery.</p>
                    <br/>
                    <figure>
                        <a href="https://intense-brook-23504.herokuapp.com/" target="_blank" rel="noreferrer"><img className="portfolioPics" src={dibs} alt="Screenshot - homepage of our marketplace" /></a>
                    </figure>
                    <a className="githubRepo" href="https://github.com/rkle408/dibs" target="_blank" rel="noreferrer">Dibs GitHub Repo</a>
                </div>
            </article><br/>

            <article className="border">
                <div class="message-header" id="gif-board">
                    <h2 >Project "gif-board"</h2>
                </div>
                <div>
                    <p>In my first project working with a team, together, we developed an application that required the use of two APIs. We decided to bring a little joy to your day by making a random word generator (or you could select your own word!) that also generates an associated gif! Warning: it may not be completely kid-friendly! We utilized the Bulma framework, along with jQuery.</p>
                    <br/>
                    <figure id="gif-board-img">
                    <a href="https://rkle408.github.io/gif-board/" target="_blank" rel="noreferrer"><img className="portfolioPics" src={gifBoard} alt="Screenshot of home page of random word and gif generator application" /></a>
                    </figure>
                    <a className="githubRepo" href="https://github.com/rkle408/gif-board" target="_blank" rel="noreferrer">Gif Board GitHub Repo</a>
                </div>
            </article><br/>

            <article className="border">
                <div id="text-editor">
                    <h2>Project "text-editor"</h2>
                </div>
                <div>
                    <p>Do you need a Progressive Web App to edit your text? Well, look no further, we have just what you're looking for here! This will also highlight your code depending on the syntax type!</p>
                    <br/>
                    <figure>
                        <a href="https://fast-fortress-26712.herokuapp.com/" target="_blank" rel="noreferrer"><img className="portfolioPics" src={textEditor} alt="Screenshot - of text editor" /></a>
                    </figure>
                    <a className="githubRepo" href="https://github.com/rkle408/text-editor" target="_blank" rel="noreferrer">Text Editor GitHub Repo</a>
                </div>
            </article><br/>

            <article className="border">
                <div id="social-network">
                    <h2>Project "social-network"</h2>
                </div>
                <div>
                    <p>I have utilized Node, Express, and Mongoose to create a back-end for a social network, where you can implement CRUD to users, friend lists, posts, and replies.</p>
                    <br/>
                    <figure>
                        <a href="https://drive.google.com/file/d/12Hlu7Vr1VGJL4caXN7dLxcMC8EyeDa0K/view" target="_blank" rel="noreferrer"><img className="portfolioPics" src={social} alt="Screenshot - homepage of our marketplace" /></a>
                    </figure>
                    <a className="githubRepo" href="https://github.com/rkle408/social-network" target="_blank" rel="noreferrer">Social Network GitHub Repo</a>
                </div>
            </article><br/>

            <article className="border">
                <div class="message-header">
                          <h2>Project "work-day-scheduler"</h2>
                </div>
                <div class="message-body">
                    <p>Utilizing JavaScript and jQuery, I developed an interactive one-day work scheduler that invokes local storage to keep your reminders.</p>
                    <figure id="work-day-scheduler-img">
                            <a href="https://rkle408.github.io/work-day-scheduler/" target="_blank" rel="noreferrer"><img className="portfolioPics" src={workDay} alt="Screenshot of work day scheduler/planner application" /></a>
                    </figure>
                    <a className="githubRepo" href="https://github.com/rkle408/work-day-scheduler" target="_blank" rel="noreferrer">Work Day Scheduler GitHub Repo</a>
                </div>
            </article><br/>

            <article className="border">
                <div>
                    <h2>Project "password-generator"</h2>
                </div>
                <div>
                    <p>Do you use the same password for everything? Well, fear not, I've built the perfect application for you to generate a random (... and probably easily-forgettable password! Just tell us what your preferences are!</p>
                    <figure id="password-generator-img">
                    <a href="https://rkle408.github.io/password-generator/" target="_blank" rel="noreferrer"><img className="portfolioPics" src={passwordGen} alt="Screenshot of random password generator"/></a>
                    </figure>
                    <a className="githubRepo" href="https://github.com/rkle408/password-generator" target="_blank" rel="noreferrer">Password Generator GitHub Repo</a>
                </div>
            </article><br/>

        </section>
    )
};

export default PortfolioPage;