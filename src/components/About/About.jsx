import React from 'react';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import aboutVector from './../../assets/about_vector.png';
import aboutAnime from './../../assets/about1_anime.gif';
import './About.css';
const About = () => {
    return(
      
        <div className='section-container'>
            <Header 
             heading="About Me."
             details="Student | ML Enthusiast | Motivated to learn, grow and excel in work environments through continuous learning."
             />

        <div className='about-main'>
            <div className='about-main-left'>
                <p className='about-details'>
                    Hi , I'm Rithika Raj K . I'm a third year Computer Science & Engineering student at Government College Of Engineering Kannur. 
                    I'm a girl who is passionate to code and develop. My passion for STEM education has motivated me to chose a career in 
                    technology field . When I was a sophomore at College I started developing interest in ML and I'm currently working as a ML 
                    project intern at an Agri-tech startup. I believe that Perseverance , Hard-work and Determination are the main ingredients 
                    for success and the motive behind my journey so far. Many more to accomplish , working hard for that.  
                </p>
            </div>
            <div className='about-main-right'>
                 <img 
                     src={aboutAnime} 
                     alt='animation' 
                     className='about-anime' 
                 />
            </div>
        </div>
            <FooterLink
               phrase="Check out my "
               link="projects!"
               toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className="vector-frame">
                 <img src={aboutVector} className="about-vector" alt="about" />
            </div>
        </div>


    );
};

export default About;