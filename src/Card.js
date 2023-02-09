import React from 'react';

export default function Card(props) {
    return (


        <div className='container' >

        <img className='round'src="https://www.meme-arsenal.com/memes/636db1bb55bfc5db54edc673e1f396bb.jpg"alt=""/>

        <h4>Moiz WebDev</h4> 
        <h5>PAKISTAN</h5> 
        <p>Frontend Developer</p>

        <div className='buttons'>
        <button class='main-btn'> Massage </button> 
        <button class='main-btn secondary'>Following</button> 
        </div> 
        <div className='skills' >
        <h5>Skills</h5> 
        <hr/>
        <ul >
        <li>HTML</li> 
        <li>CSS</li> 
        <li>JavaScript</li> 
        <li > React</li> 
        <li>NodeJS</li> 
        </ul> 
        </div>



        </div>




    );

}
