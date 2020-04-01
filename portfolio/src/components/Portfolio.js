import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Portfolio = () => {

    const [ projects, setProjects ] = useState([]);
    const [ details, setDetails ] = useState(false);
    const [ indProject, setIndProject ] = useState({
        img_url: '',
    })

    const toggleModal = (params) => {
        console.log('item', params)
        setIndProject(params);
        setDetails(!details);
    }
    
    useEffect(() => {
        Axios
            .get(`https://my-portfolio-luis.herokuapp.com/api/projects`)
            .then(res => {
                // console.log(res.data);
                setProjects(res.data);
            })
            .catch(err => console.log('error fetching projects', err))
    }, []);


    return (
        <div id ='#projects' className='portfolio'>
            <h3>Projects</h3>

            <div className="portfolio-cont" >
            {projects.map(item => (                    
                <div onClick={()=>{toggleModal(item)}} className="my-project" key={item.id}>
                    <img src={item.img_url} alt={`${item.project_title} project`} />
                    <div>
                        <h4>{item.project_title}</h4>
                    </div> 
                </div>                    
            ))}
            </div>
            
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
                            <p>
                                <b>Deployment:</b>
                                 <a href={indProject.project_url} target="a_blank"> Click Here</a>
                            </p> 
                            <p> 
                                <b>Github/Docs:</b> 
                                <a href={indProject.github_repo}> Click Here</a>
                                
                            </p>
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