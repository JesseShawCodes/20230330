import { useState } from "react"
import axios from "axios";

const AddCommentForm = ({articleName, onArticleUpdated }) => {
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const response = await axios.post(`/api/articles/${articleName.articleId}/comments`, {
            postedBy: name,
            text: commentText,
        });
        const updatedArticle = response.data;

        onArticleUpdated(updatedArticle);

        // Reset name and comment text back to empty string
        setName('')
        setCommentText('')

    }

    return (
        <div id="add_comment_form" className="form-group">
            <h3>Add a Comment</h3>
            <label>
                Name: <input 
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    className="form-control"
                    />
            </label>
            <label>
                Comment: <textarea 
                rows="4" cols="50" 
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                className="form-control"
                />
            </label>
            <button onClick={addComment}>Add Comment</button>
        </div>
    )
}

export default AddCommentForm