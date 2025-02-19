import React from 'react'
import axios from 'axios';

import { useState } from 'react'
import './Signup.css'
import back from '../../assets/back.jpg'

const Contact = () => {
    const [Values, setValues] = useState({name: '', phonenumber: '', emailid: '', anymessage: ''});
    const change = (e) => {
        const {name, value} = e.target;
        setValues({ ...Values, [name]: value});
    };
    const submit = async () => {
        if(Values.name === '' || Values.phonenumber === '' || Values.emailid === '' || Values.anymessage === ''){
            alert('All fields are mandatory');
        }else{
            await axios.post('http://https://the-dominators-5kpzyfw0f-snischay2s-projects.vercel.app/api/v1/post', Values).then((res) => {
                alert(res.data.message);

            });
            setValues({name: '', phonenumber: '', emailid: '', anymessage: ''});
        }
    };
  return (
    <div className='login-container'>
       <h2 class="form">Contact Us</h2>
     <form method="post" action="/submit_form" name="student_detail">
    
        <div class="detail1 box input-group">
            <label for="username1">Name</label>
            <div class="dea de">
                <input type="text" name="name" placeholder="Enter your name" value={Values.name} onChange={change}/>
            </div>
        </div>
    
        <div class="detail2 box input-group">
            <label for="phonenumber">Phone number</label>
            <div class="deb de">
                <input type="tel" placeholder="Enter your phone number" name="phonenumber" value={Values.phonenumber} onChange={change}/>
            </div>
        </div>
    
        <div class="detail3 box input-group">
            <label for="emailid">Email-Id</label>
            <div class="dec de">
                <input type="email" name="emailid" placeholder="Enter your college email-id" value={Values.emailid} onChange={change}/>
            </div>
        </div>
    
        <div class="detail4 box input-group">
            <label for="anymessage">Enter message</label>
            <div class="ded de">
                
                <input type='text' name="anymessage" placeholder="Enter your message" value={Values.anymessage} onChange={change}/>
            </div>
        </div>
    
        <div class="submit-box input-group button">
            <input type="button" id="submit" value="Submit" onClick={submit}/>
        </div>
    
     </form>
    </div>
  )
}

export default Contact
