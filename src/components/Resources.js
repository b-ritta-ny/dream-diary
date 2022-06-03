import React from 'react';

function Resources() {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return <div className='resourcespage' style={{
        backgroundImage: `url('https://i.pinimg.com/564x/9d/04/72/9d04726a8fadccca024110b19049aef9.jpg')`,
        backgroundSize: '100%',
        width: '1400px',
        height: '650px'
    }}>
        <div id='logohead'>
            <img className='logo' src='https://i.imgur.com/ueaH3qP.png'/>
        </div>
        <div id='reshead'>
            <h1 className='headtext'>RESOURCES</h1>
            <h2 className='subtext'>for the curious and the experienced</h2>
        </div>
        <div className='resrow'>
        <div className='rdiv'>
            <h3 className='rtitle'>Decode Your Dreams: Transform Your Waking Life</h3>
            <a href="https://www.barnesandnoble.com/w/decode-your-dreams-ian-wallace/1139217536" target="_blank">
            <img className='rimg' src="https://i.imgur.com/iUmxe71.png"/>
            </a>
        </div>
        <div className='rdiv'>
            <h3 className='rtitle'>Dream Interpretation Dictionary</h3>
            <a href="https://www.dreammoods.com/" target="_blank">
            <img className='rimg' src="https://i.imgur.com/NnPdTBQ.png"/>
            </a>
        </div>
        <div className='rdiv'>
            <h3 className='rtitle'>The Lucid Dream Podcast</h3>
            <a href="https://lucidsage.com/the-podcast/" target="_blank">
            <img className='rimg' src="https://i.imgur.com/rV1VgBa.png"/>
            </a>
        </div>
        <div className='rdiv'>
        <h3 className='rtitle'>Three Dream Magic Rituals and Practices</h3>
        <a href="http://www.lunalunamagazine.com/dark/3-sleep-dream-magic-practices" target="_blank">
        <img className='rimg' src="https://i.imgur.com/nYIPzSj.png"/>
        </a>
        </div>
        </div>
    </div>
}

export default Resources;