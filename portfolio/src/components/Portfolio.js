import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Projects from './Projects';

const Portfolio = () => {

    const [ projects, setProjects ] = useState([]);
    const [ details, setDetails ] = useState(false);
    const [ indProject, setIndProject ] = useState({ })

    const [ loading, setLoading] = useState(true);

    const toggleModal = (params) => {

        setIndProject(params);
        setDetails(!details);
    }
    
    useEffect(() => {
        Axios
            .get(`https://my-portfolio-luis.herokuapp.com/api/projects`)
            .then(res => {
                // console.log(res.data);
                setProjects(res.data);
                setLoading(false);
            })
            .catch(err => console.log('error fetching projects', err))
    }, []);


    return (
        <div id='projects' className='portfolio'>
            <h3>Projects</h3>

            {!loading ? 
                <div className="portfolio-cont" >
                {projects.map(item => (                    
                        <Projects 
                            item={item} 
                            key={item.id}
                            toggleModal={toggleModal}
                        />                
                ))}
                </div>
                : <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            }

            
            
            {details ? 
                <div className="modal-bg">
                    <div className="modal">
                         <img 
                            src={indProject.img_url} 
                            alt={`${indProject.project_title} project`} 
                            />
                        <h4>{indProject.project_title}</h4>
                        <div className="modal-content">
                            <p>
                                <b>Description:</b> {indProject.project_desc}
                            </p>
                            <p>
                                <b>Tech Used:</b> {indProject.tech_used}
                            </p>
                                <div className="modal-btn">
                                <a href={indProject.project_url} target="a_blank">
                                    <button>
                                        Deployment
                                    </button>
                                </a>
                                <a href={indProject.github_repo}>
                                    <button>
                                         Github/Docs
                                    </button>
                                </a>
                                </div>
                                
                            
                        </div>
                        <div className="modal-close" onClick={()=>{toggleModal()}}>X</div>
                    </div>
                    
                </div>
                : null
                }
            
        </div>
    )
}

export default Portfolio;