import React from 'react';
import gitblack from '../img/GitHub-Mark-64px.png';
import gitwhite from '../img/GitHub-Mark-Light-64px.png';
import linkedIn from '../img/LI-In-Bug.png';


const LinkedInlink = 'https://www.linkedin.com/in/luis-pepen-17bb3b196/';
const github = 'https://github.com/azatecas';


const About = ({isDark}) => {

    return (
        <section id="about" className="about">
            <div className="about-img">
                <img src="https://avatars1.githubusercontent.com/u/29685279?s=400&u=91c9a8b35d8ff294b6c7ede51ed6f009666b9987&v=4"
                alt="profile_headshot_of_luis_pepen"
                />
            </div>
            <div className="about-text">
                <div className="about-text-cont">
                    <h3>About Me</h3>
                    <p>
                    Hello, my name is Luis Pepen and I'm a Full-Stack Web Developer. I'm currently living in Plattsburgh, NY and I'm fluent in both Spanish and English. I love traveling and creating solutions using web technologies. I strongly believe that to be a sucessful developer one must constantly self improve, have multiple approaches to each problem, and stay up to date with the current technologies. Feel free to take a look at my projects and you can always contact me directly below or through LinkedIn.
                    </p>
                </div>

                <div className="social-links">
                    <div className="social-links-div">
                        <h1><a href={github} target="a_blank">Github</a> </h1>
                        { !isDark ? <img src={gitblack} alt="gitbug"/> : <img src={gitwhite} alt="gitbug"/>}
                                           
                    </div>
                    <div className="social-links-div">
                        <h1><a href={LinkedInlink} target="a_blank">LinkedIn</a> </h1>
                        <img src={linkedIn} alt="linkedin"/>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About;