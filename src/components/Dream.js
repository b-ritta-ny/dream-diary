import React from 'react';


function Dream({ dream }) {
    const { id, date, title, category, entry, tags } = dream;
    // const tagList = `${tags} `
    const tagString = tags.join(', ');
    return (
        <div className='dream'>
            <h4>Dreamt on {date}</h4>
            <h3>{title}</h3>
            <h5>{category}</h5>
            <p>{entry}</p>
            <p>
                <strong>Tags: {tagString}</strong>
            </p>
        </div>
    )
}

export default Dream;