import React from 'react';
import NavBar from './NavBar'

function Home(){

    return(
        <div id='Home' style={{
            backgroundImage: `url('https://media1.giphy.com/media/UYBDCJjwOd9Re/giphy.gif?cid=ecf05e47q5pwpdgylh9cmxclbkrrw0gvmpt5v7akvojo4yxz&rid=giphy.gif&ct=g')`,
            width: '1400px',
            height: '650px'
          }}>
            <div className='page-title'>Dream Diary</div>
            <div className='photodiv'>
                <img className='homephoto' src="https://i.imgur.com/8E7d1sO.png"/>
            </div>
        </div>

    )
}

export default Home;