import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
// import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about_img'/>
            {/* <img src={play_icon} alt="" className='play_icon'/> */}
        </div>
        <div className="about-right">
            <h3>OUR WEBSITE</h3>
            <h2>Nurturing Tommorrow's Leaders Today</h2>
            <p>Our web application is designed to help college students effortlessly track and manage their attendance. With an intuitive interface, students can log their daily attendance, monitor their attendance percentage, and receive timely alerts to ensure they meet the required criteria. Stay on top of your academic commitments with ease!</p>
            <p>The app goes beyond basic tracking by offering subject-wise attendance monitoring, reminders for missed classes, and automated reports for better academic planning. Whether you're aiming to maintain a perfect attendance record or avoid falling short, our tool provides the insights and tools you need to succeed.</p>
            <p>We understand the challenges of balancing academics and personal life, which is why our application is built to simplify attendance management. By visualizing your progress and setting customizable alerts, you can focus on what truly matters—excelling in your studies and achieving your goals.</p>
        </div>
      
    </div>
  )
}

export default About
