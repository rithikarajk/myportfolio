import React from 'react';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import {projectsData} from './../../assets/projectsData';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
 return(

    <div className='section-container'>
        <Header heading="My Projects."
        />
        <div className="project-cards-container">
            {
                projectsData.map(({
                    projectName,
                    projectDescription,
                    imageUrl,
                    projectUrl, })=> {
                    return <ProjectCard
                      projectName={projectName}
                      projectDescription={projectDescription}
                      projectUrl={projectUrl}
                      imageUrl={imageUrl}
                      />
                })}
        </div>



        <FooterLink phrase="Check out " link="my skills!" toAdress="/skills"/>

    </div>
 );
};
export default Projects;