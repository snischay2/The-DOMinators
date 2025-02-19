import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import { Link } from 'react-router-dom'


const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
            <Link to='/Schedule'><img src={program_icon_1} alt="" /> </Link>
              <p>Schedule</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
            <Link to='/attendance'><img src={program_icon_2} alt="" /> </Link>
              <p>Attendance</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
              <Link to='/materials'><img src={program_icon_3} alt="" /></Link>
              <p>Materials</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
