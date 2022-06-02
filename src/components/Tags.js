import React, { useState } from 'react';

function Tags({ formState, handleChange, selectedTags, newTagList, setNewTagList }) {
    const [tags, setTags] = useState([]);

    const addTag = (e) => {
        if (e.key === "Enter" && e.target.value !== "") {
            e.preventDefault();
            setTags([...tags, e.target.value]);
            setNewTagList([...tags, e.target.value]);
            selectedTags([...tags, e.target.value])
            e.target.value = "";
            console.log(formState)
        }

    };
    const handleRemoveTag = (removedTag) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        setTags(newTags);
    };
    return (
        <div className="tag-container">
            <input id="tags" placeholder="tags (press enter to add)" onKeyDown={addTag} onChange={handleChange} />
            {tags.map((tag, index) => {
                return (
                    <div key={index} className="tag" value={tags} >
                        {tag} <span onClick={() => handleRemoveTag(tag)}>x</span>
                    </div>
                );
            })}
        </div>
    )
}

export default Tags;