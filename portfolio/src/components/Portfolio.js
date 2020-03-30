import React from 'react';
import porfolioimg from '../img/portfolio1.png';

const Portfolio = () => {
    return (
        <div id ='#projects' className='portfolio'>
        <h3>Projects</h3>
        <div className="portfolio-cont">
            <div className="my-project">
                <img src={porfolioimg} alt='portfolio-project' />
                <div>
                    <h4>portfolio</h4>
                    <p>Laurem ipson Laurem ipson</p>
                </div>
            </div>

            <div className="my-project">
                <img src={porfolioimg} alt='portfolio-project' />
                <div>
                    <h4>portfolio</h4>
                    <p>Laurem ipson Laurem ipson</p>
                </div>
            </div>

            <div className="my-project">
                <img src={porfolioimg} alt='portfolio-project' />
                <div>
                    <h4>portfolio</h4>
                    <p>Laurem ipson Laurem ipson</p>
                </div>
            </div>
            <div className="my-project">
                <img src={porfolioimg} alt='portfolio-project' />
                <div>
                    <h4>portfolio</h4>
                    <p>Laurem ipson Laurem ipson</p>
                </div>
            </div>

            </div>
            
        </div>
    )
}

export default Portfolio;