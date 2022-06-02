import React, { useState } from 'react';
import Tags from './Tags'


function NewDreamForm({ handleNewDream }) {
    const [newTagList, setNewTagList] = useState([]);
    const [formState, setFormState] = useState({
        date: '',
        title: '',
        category: '',
        entry: '',
        tags: ['',],
    })

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.id]: e.target.value,
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/dreams", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formState),
        })
            .then((r) => r.json())
            .then((newDream) => handleNewDream(newDream));
    }

    return (

        <form className="new-dream-form" onSubmit={handleSubmit}>
            <label>Date Dreamt:</label>
            <input type="date" id="date" name="date-dreamt" min="1900-01-01" max="3000-12-31" value={formState.date} onChange={handleChange}></input>
            <input type="text" id="title" placeholder="Title" value={formState.title} onChange={handleChange} />
            <select name="category" id="category" value={formState.category} onChange={handleChange}>
                <option>Category</option>
                <option value="general">general</option>
                <option value="happy">happy</option>
                <option value="sad">sad</option>
                <option value="funny">funny</option>
                <option value="weird">weird</option>
                <option value="scary">scary</option>
            </select>
            <textarea type="text" id="entry" placeholder="Write your dream here..." rows={10} value={formState.entry} onChange={handleChange} />
            <Tags formState={formState} newTagList={newTagList} setNewTagList={setNewTagList} setFormState={setFormState} />
            <input type="submit" value="Log your dream" />

        </form>
    )
}

export default NewDreamForm;