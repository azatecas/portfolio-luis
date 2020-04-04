import React from 'react';
import gitblack from '../img/GitHub-Mark-64px.png';
// import gitwhite from '../img/GitHub-Mark-Light-64px.png';
import linkedIn from '../img/LI-In-Bug.png';


const LinkedInlink = 'https://www.linkedin.com/in/luis-pepen-17bb3b196/';
const github = 'https://github.com/azatecas';


const About = () => {

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
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
                    </p>
                </div>

                <div className="social-links">
                    <div className="social-links-div">
                        <h1><a href={github} target="a_blank">Github</a> </h1>
                         <img src={gitblack} alt="gitbug"/>                    
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