import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
import { useState, useEffect } from "react";
import axios from 'axios';

import CommentsList from "./CommentsList";
import AddCommentForm from "../components/AddCommentForm";

import useUser from "../hooks/useUser";

const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []})



    const { articleId } = useParams();

    const { user, isLoading }= useUser();
    
    const article = articles.find(article => article.name === articleId)
    useEffect(() => {
        const loadArticleInfo = async () => {
            const response = await axios.get(`/api/articles/${articleId}`);
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo)
        }

        loadArticleInfo()

    }, [articleId])

    const addUpvote = async () => {
        const response = await axios.put(`/api/articles/${articleId}/upvote`);

        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);

    }

    if (!article) {
        return <NotFoundPage />
    }

    // This is loading multiple times. Why?
    function CheckComments(comments) {
        console.log("CHECK COMMENTS")
        if (!comments.comments) {
            return <h1>No Comment</h1>
        }
        else {
            return <CommentsList comments={articleInfo.comments} />
        }
    }

    return (
        <>
        <h1>{articleInfo.title}</h1>
        <div className="upvotes_section">
            { 
                user 
                ? <><button onClick={addUpvote}>Upvote</button><p>This article has {articleInfo.upvotes} upvotes</p></>
                : <button>Log in to upvote</button>
            }
           
        </div>
        <p>{articleInfo.content}</p>
        {
            user
            ? <><AddCommentForm articleName={{articleId}} onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}/><CheckComments comments={articleInfo.comments} /></>
            : <button>Log in to add a comment</button>
        }
        
        </>
    );
}

export default ArticlePage;