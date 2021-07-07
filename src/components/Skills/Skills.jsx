import React from 'react';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import skillsVector from './../../assets/skills_vector.png';
import { skillList } from './../../assets/skillsData';
import './Skills.css';
import SkillCard from './SkillCard';

const Skills = () => {
 return (
  <div className='section-container'>
      <Header
      heading="My Skills."
      details="Passionate about coding,new technologies , I love exploring new frameworks . Here is the tech stack I've worked with!"
      />
      
      <div className='skill-card-container'>
                {skillList.map(({ skillName ,skillUrl }) => {
                    return (
                        <SkillCard skillName={skillName} skillUrl={skillUrl} />
                    );
                })}
      </div>
      <FooterLink phrase="Get in " link="touch." toAdress="/contact"
      />
      <div className="skills-vector-frame">
          <img src={skillsVector}
                alt='skills'
                className='skills-vector'
            />
      </div>
      </div>  
    


 );
};
export default Skills;