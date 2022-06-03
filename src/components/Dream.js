import React from 'react';


function Dream({ dream }) {
    const { id, date, title, category, entry, tags } = dream;
    const tagSpace = `${tags} `
    return (
        <div className='dream'>
            <h4>Dreamt on {date}</h4>
            <h3>{title}</h3>
            <h5>{category}</h5>
            <p>{entry}</p>
            <p>
                <strong>Tags: {tagSpace}</strong>
            </p>
        </div>
    )
}

export default Dream;