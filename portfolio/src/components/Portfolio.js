import React, { useState, useEffect } from 'react';
import porfolioimg from '../img/portfolio1.png';
import Axios from 'axios';

const Portfolio = () => {

    const [ projects, setProjects ] = useState([]);
    
    useEffect(() => {
        Axios
            .get(`https://my-portfolio-luis.herokuapp.com/api/projects`)
            .then(res => {
                console.log(res.data);
                setProjects(res.data);
            })
            .catch(err => console.log('error fetching projects', err))
    }, []);


    return (
        <div id ='#projects' className='portfolio'>
            <h3>Projects</h3>
            
            <div className="portfolio-cont" >
            {projects.map(item => (                    
                <div className="my-project" key={item.id}>
                    <img src={item.img_url} alt={`${item.project_title} project`} />
                    <div>
                        <h4>{item.project_title}</h4>
                        <p>{item.project_desc}</p>
                    </div>
                </div>                    
            ))}
            </div>
        </div>
    )
}

export default Portfolio;