import React, { useState, useEffect } from 'react';

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
import Axios from 'axios';

const Skills = () => {
    const [ skill, setSkill ] = useState([]);

    useEffect(() => {
        Axios
            .get(`https://my-portfolio-luis.herokuapp.com/api/skills`)
            .then(res => {
                // console.log(res.data);
                setSkill(res.data)
            })
            .catch(err => console.log('error fetching skills', err))
    }, []);

    return(
        <div id="skills" className="skills">
            <h3>Skills</h3>

            <div className="ind-skills">
                {skill.map(item => (
                    <div className="my-skills" key={item.id}>
                        <img 
                            src={item.img_url}
                            alt={item.skills_name}
                            />
                        <h3>{item.skills_name}</h3>
                    </div>
                ))}
            
                
                

            </div>
        </div> 
    )

}

export default Skills;