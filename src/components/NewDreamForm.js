import React from 'react';


function NewDreamForm() {
    return (

        <form className="new-dream-form" >
            <label for="start">Date Dreamt:</label>
            <input type="date" id="date" name="trip-start"
                min="1900-01-01" max="3000-12-31"></input>
            <input type="text" id="title" placeholder="Title" />
            <select name="category" id="category">
                <option>category</option>
                <option value="general">general</option>
                <option value="happy">happy</option>
                <option value="sad">sad</option>
                <option value="funny">funny</option>
                <option value="weird">weird</option>
                <option value="scary">scary</option>
            </select>
            <textarea type="text" id="content" placeholder="Write your dream here..." rows={10} />
            <input list="tags" placeholder='tags' />
            <datalist id="tags">
                <option value="animals" />
                <option value="love" />
                <option value="wtf" />
                <option value="stressful" />
                <option value="nature" />
                <option value="evolution" />
                <option value="futuristic" />
                <option value="life and death" />
            </datalist>
            <input type="submit" value="Log your dream" />

        </form>
    )
}

export default NewDreamForm;