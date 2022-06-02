import React, { useState } from 'react';

function Tags({ formState, newTagList, setNewTagList, setFormState }) {
    const [tags, setTags] = useState([]);

    const addTag = (e) => {
        if (e.key === "Enter" && e.target.value !== "") {
            e.preventDefault();
            setTags([...tags, e.target.value]);
            setNewTagList([...tags, e.target.value]);
            // const newTagString = [newTagList].toString();
            setFormState({
                ...formState,
                [e.target.id]: [...newTagList]
            })
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
            <input id="tags" placeholder="tags (press enter to add)" onKeyDown={addTag} />
            {tags.map((tag, index) => {
                return (
                    <div key={index} className="tag" value={tags}>
                        {tag} <span onClick={() => handleRemoveTag(tag)}>x</span>
                    </div>
                );
            })}
        </div>
    )
}

export default Tags;