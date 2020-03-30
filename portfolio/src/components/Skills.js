import React from 'react';
import html5 from '../img/html5.svg';
import css3 from '../img/css.svg';
import sass from '../img/sass.svg';
import less from '../img/less.svg';
import javascript from '../img/JavaScript.svg';
import reactjs from '../img/reactjs.svg';
import reduximg from '../img/redux.svg';
import nodeimg from '../img/nodejs.svg';
import sqlite from '../img/sqlite.svg';
import postgres from '../img/postgresql.svg';

const Skills = () => {
    return(

        <div id="skills" className="skills">
            <h3>Skills</h3>

            <div className="ind-skills">
                <div className="my-skills">
                    <img src={html5}
                        alt="HTML5"
                        />
                    <h3>HTML5</h3>
                </div>
                <div className="my-skills">
                    <img src={css3}
                        alt="css3"
                        />
                    <h3>CSS</h3>
                </div>
                <div className="my-skills">
                <img src={sass}
                        alt="sass"
                        />
                    <h3>SASS</h3> 
                </div>
                <div className="my-skills">
                    <img src={less}
                        alt="less"
                        />
                    <h3>LESS</h3>
                </div>
                <div className="my-skills"> 
                    <img src={javascript}
                        alt="javascript"
                        />
                    <h3>JavaScript</h3> 
                </div>
                <div className="my-skills">
                <img src={reactjs}
                        alt="react"
                        style={{width: '950px'}}

                        />
                    <h3>React.JS:</h3> 
                </div>
                <div className="my-skills">
                <img src={reduximg}
                        alt="redux"
                        />
                    <h3>Redux</h3>
                </div>
                <div className="my-skills">
                <img src={nodeimg}
                        alt="node"
                        />
                    <h3>Node.js</h3>
                </div>
                <div className="my-skills">
                <img src={sqlite}
                        alt="sqlite"
                        />
                    <h3>SQLite3</h3>
                </div>
                <div className="my-skills">
                <img src={postgres}
                        alt="postgres"
                        />
                    <h3>PostgreSQL</h3>
                </div>

            </div>
        </div> 
    )

}

export default Skills;