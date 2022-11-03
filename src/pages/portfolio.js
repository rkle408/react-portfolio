import React from "react";
import "./style.css";

function PortfolioPage (){
    return (
        <section className="paragraph">
            <h1 className="H1">Rosa's Portfolio</h1>

            <article>
                <div id="gif-board">
                    <h2>Project "dibs"</h2>
                </div>
                <div class="message-body">
                    <p>As a group, we developed an application that allows you to post things you want to give away, and get items, all for free! We utilized Node, Bootstrap framework, along with jQuery.</p>
                    <figure id="gif-board-img">
                        <a href="https://intense-brook-23504.herokuapp.com/" target="_blank" rel="noreferrer"><img src="./assets/images/screencapture11.png" alt="Screenshot - homepage of our marketplace" /></a>
                    </figure>
                </div>
            </article>

            <article>
                <div class="message-header">
                          <h2>Project "work-day-scheduler"</h2>
                </div>
                <div class="message-body">
                    <p>Utilizing JavaScript and jQuery, I developed an interactive one-day work scheduler that invokes local storage to keep your reminders.</p>
                    <figure id="work-day-scheduler-img">
                            <a href="https://rkle408.github.io/work-day-scheduler/" target="_blank" rel="noreferrer"><img src="./assets/images/work-day-scheduler-screenshot.png" alt="Screenshot of work day scheduler/planner application" /></a>
                    </figure>
                </div>
            </article>

            <article>
                <div>
                    <h2>Project "password-generator"</h2>
                </div>
                <div>
                    <p>Do you use the same password for everything? Well, fear not, I've built the perfect application for you to generate a random (... and probably easily-forgettable password! Just tell us what your preferences are!</p>
                    <figure class="image is-5by3" id="password-generator-img">
                    <a href="https://rkle408.github.io/password-generator/" target="_blank" rel="noreferrer"><img src="./assets/images/password-generator-screenshot.png" alt="Screenshot of random password generator"/></a>
                    </figure>
                </div>
            </article>

        </section>
    )
};

export default PortfolioPage;