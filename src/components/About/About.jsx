import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import Title from '../Title/Title'

const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} className='about-img' alt="" />
            <img src={play_icon} className='play-icon' alt="" />
        </div>
        <div className="about-right">
            <Title subtitle='ABOUT UNIVERSITY' title="Nurturing Tomorrow's Leaders Today"/>
            <p className='about-text'>Embark on a tranformative educational journey with our university's competitive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills and experiences needed to excel in dynamic field of education.</p>
            <p className='about-text'>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools , and communities</p>
            <p className='about-text'>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
    </div>
)
}

export default About