import React from 'react';
import Dream from './Dream';


function DreamsContainer({ dreams }) {

    return (
        <div className="dreams-container">
            {dreams.map((dream) => (
                <div key={dream.id}>
                    <Dream dream={dream} />
                </div>
            ))};
        </div>
    )
}

export default DreamsContainer;