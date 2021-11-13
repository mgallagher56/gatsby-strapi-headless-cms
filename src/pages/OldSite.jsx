import React, { Component } from 'react';
import '../assets/oldSite.css';
import Layout from "../components/layout";
import video from '../assets/images/video.mp4'
import githubImg from '../assets/images/GitHub.png';
import linkedInImg from '../assets/images/linkedin.png';
import { getWindow } from 'ssr-window';
const window = getWindow();

export default class oldSite extends Component {

    render() {
        return (
            <Layout>
                <div id='oldSite'>
                    <div id='oldNav'>
                        <img className={'burger'} src='img/burger.svg' alt={''}></img>
                        <ul className={'menu'}>
                            <li><a href={'/'}><h1 className={"logo"}>MGR</h1></a></li>
                            <li className={'nav-link about'}><a href={'/'}>New Site</a></li>
                            <li className={'nav-link'}><a href={'#portfolio'}>Portfolio</a></li>
                            <li className={'nav-link'}><a target="_blank" rel="noreferrer" href={'img/Marc%20Gallagher-Reid%20-%20CV%20.pdf'}>My CV</a></li>
                            <li className={'nav-link'}><a href={'#contact'}>Contact</a></li>
                            <li className={'oldSocial linkedIn'}><a href={'https://www.linkedin.com/in/marcgallagherreid/'}><img alt="linkedIn" src={linkedInImg}></img></a></li>
                            <li className={'oldSocial gitHub'}><a href={'https://github.com/mgallagher56'}><img alt="gitHub" src={githubImg}></img></a></li>
                        </ul>
                        <h1 className={"logoSmall"}>MGR</h1><h1 className={"logoSmall"}>MGR</h1>
                    </div>

                    <div className={'burgerMenu'}>
                        <ul className={'burgerMenu'}>
                            <li className={'burgerItem'}><a href={'#portfolio'}>Portfolio</a></li>
                            <li className={'burgerItem'}><a href={window.location.href}>New Site</a></li>
                            <li className={'burgerItem'}><a target="_blank" rel="noreferrer" href={'../assets/images/Marc%20Gallagher-Reid%20-%20CV.pdf'}>My CV</a></li>
                            <li className={'burgerItem'}><a href={'#contact'}>Contact</a></li>
                        </ul>
                    </div>

                    <div className={'header'}>
                        <div className={"innerHeader"}>
                            <h1 className={"headerText headerText1"}>Marc Gallagher-Reid</h1>
                            <h2 className={"headerText headerText2"}>Full Stack Developer</h2>
                            <h3 className={"headerText headerText3"}>Mayden Academy Graduat</h3>

                            <div className={"video"}>
                                <video autoPlay loop muted>
                                    <source src={video} type="video/mp4"></source>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>


                    <div className={'portfolio'}>
                        <a href={window.location.href} name='portfolio'>
                            <h1 className={"title"}>Portfolio</h1>
                        </a>

                        <div className={'overlay'}>
                            <div className={'portfolioBox project1'}>
                                <h1>My Portfolio</h1>
                                <a href={window.location.href}>
                                    <button className={'projectButton'} type='button'>View</button>
                                </a>
                                <a href={'http://bit.ly/mgrDev'}>
                                    <button className={'projectButton'} type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>


                        <div className={'overlay'}>
                            <div className={'portfolioBox project2'}>
                                <h1>PHP Collection App</h1>
                                <a href={'http://bit.ly/mgrCollection'}>
                                    <button className={'projectButton'} type='button'>View</button>
                                </a>
                                <a href={'http://bit.ly/mgrCollectonGitHub'}>
                                    <button className={'projectButton'} type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div className={'overlay'}>
                            <div className={'portfolioBox project3'}>
                                <h1>JS Pairs Game</h1>
                                <a href={'http://bit.ly/mgrPairsGame'}>
                                    <button className={'projectButton'} type='button'>View</button>
                                </a>
                                <a href={'http://bit.ly/mgrPairsGameGitHub'}>
                                    <button className={'projectButton'} type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div className={'overlay'}>
                            <div className={'portfolioBox project4'}>
                                <h1>Solar System</h1>
                                <a href={'http://bit.ly/mgrSolarSystem'}>
                                    <button className={'projectButton'} type='button'>View</button>
                                </a>
                                <a href={'http://bit.ly/mgrSolarSystemGitHub'}>
                                    <button className={'projectButton'} type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div className={'overlay'}>
                            <div className={'portfolioBox project5'}>
                                <h1>JS API Fetch</h1>
                                <a href={'http://bit.ly/mgrFetchApp'}>
                                    <button className={'projectButton'} type='button'>View</button>
                                </a>
                                <a href={'http://bit.ly/mgrGitHubFetchRepo'}>
                                    <button className={'projectButton'} type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div className={'overlay'}>
                            <div className={'portfolioBox project6'}>
                                <h1>JS Finance Calc</h1>
                                <a href={'http://bit.ly/mgrFinanceCalc'}>
                                    <button className={'projectButton'} type='button'>View</button>
                                </a>
                                <a href={'http://bit.ly/mgrFinanceCalcGitHub'}>
                                    <button className={'projectButton'} type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div className={'overlay'}>
                            <div className={'portfolioBox project7'}>
                                <h1>OOP Recipe App</h1>
                                <a href={'http://bit.ly/mgrGrub'}>
                                    <button className={'projectButton'} type='button'>View</button>
                                </a>
                                <a href={'http://bit.ly/mgrGrubGitHub'}>
                                    <button className={'projectButton'} type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div className={'overlay'}>
                            <div className={'portfolioBox project8'}>
                                <h1>PHP/JQUERY Ski</h1>
                                <a href={'http://bit.ly/mgrSkiSite'}>
                                    <button className={'projectButton'} type='button'>View</button>
                                </a>
                                <a href={'http://bit.ly/mgrSkiRepo'}>
                                    <button className={'projectButton'} type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div className={'overlay'}>
                            <div className={'portfolioBox project9'}>
                                <h1>MVC PHP ToDo App</h1>
                                <a target="_blank" rel="noreferrer" href={'https://youtu.be/VPtLjSFwok8'}>
                                    <button className={'projectButton'} type='button'>View</button>
                                </a>
                                <a href={'http://bit.ly/mgrToDoGithub'}>
                                    <button className={'projectButton'} type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div className={'overlay'}>
                            <div className={'portfolioBox project10'}>
                                <h1>Project 10</h1>
                                <a href={window.location.href}>
                                    <button className={'projectButton'} type='button'>View</button>
                                </a>
                                <a href={window.location.href}>
                                    <button className={'projectButton'} type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div className={'overlay'}>
                            <div className={'portfolioBox project11'}>
                                <h1>Project11</h1>
                                <a href={window.location.href}>
                                    <button className={'projectButton'} type='button'>View</button>
                                </a>
                                <a href={window.location.href}>
                                    <button className={'projectButton'} type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div className={'overlay'}>
                            <div className={'portfolioBox project12'}>
                                <h1>Project12</h1>
                                <a href={window.location.href}>
                                    <button className={'projectButton'} type='button'>View</button>
                                </a>
                                <a href={window.location.href}>
                                    <button className={'projectButton'} type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <section className={'aboutMe'}>
                        <a href={window.location.href} name='about'>
                            <h1>About Me</h1>
                        </a>
                        <div className={'profileImg'}></div>
                        <p>Hello World. I'm a recent graduate from Mayden Academy in Bath, after taking part in a 16 week course
                        (August-December 2019) to become a Full Stack Developer. I'm passionate about Agile software development, and
                        I'm proficient in HTML, CSS, PHP and JavaScript, including MVC design pattern with the Slim framework, NodeJS with Express, and React.</p>
                        <br />
                        <p>I also have a keen interest in how technology is developed, emerging technologies and PC hardware. Building my
                        first PC around 5 years ago opened the door to my interest in the technology industry as a whole, which, over
                        the years, has led me to this point of developing a career in the software industry. </p>
                    </section>

                    <section className={"contact"}>
                        <a name='contact' href={window.location.href}>
                            <h1 className={'footer'}>Contact</h1>
                        </a>
                        <ul>
                            <li className={"socialFooter"}>
                                <a href={'mailto:mgrdevuk@gmail.com?subject=Mail%20from%20MG%20Portfolio%20Site'}>
                                    <button className={'email'} type='button'>Email Me</button>
                                </a>
                            </li>

                            <li className={'socialFooter'}>
                                <a href={'https://github.com/mgallagher56'}>
                                    <img className={"socialImg"} src={githubImg} alt={''}></img>
                                </a>
                            </li>

                            <li className={'socialFooter'}>
                                <a href={'https://www.linkedin.com/in/marcgallagherreid/'}>
                                    <img className={"socialImg linkedIn"} src={linkedInImg} alt={''}></img>
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </Layout>
        );
    }
}
