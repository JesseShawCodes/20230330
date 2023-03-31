import articles from "./article-content";
import List from "../components/ArticlesList";

const ArticleListPage = () => {
    return (
        <div className="container">
            <h1>Articles</h1>
            <List list_items={articles}/>
        </div>
    )
}

export default ArticleListPage;