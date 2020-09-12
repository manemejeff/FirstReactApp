import React from 'react';

import './post-add-form.css'

const PostAddForm = () => {
    return(
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="What are you thinking about?"
                className="form-control new-post-label">

                </input>
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                        Add
                    </button>
        </form>
    )
}

export default PostAddForm;