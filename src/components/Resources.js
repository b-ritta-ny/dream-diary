import React from 'react';

function Resources() {
    return <div className='resourcespage' style={{
        backgroundImage: `url('https://i.pinimg.com/564x/9d/04/72/9d04726a8fadccca024110b19049aef9.jpg')`,
        backgroundSize: '100%',
        width: '1400px',
        height: '650px'
    }}>
        <div>
            <img className='logo' src='https://i.imgur.com/ueaH3qP.png'/>
        </div>
        <div>
            <h2 className='headtext'>RESOURCES</h2>
            <h3 className='subtext'>for the curious and the experienced</h3>
        </div>
    </div>
}

export default Resources;