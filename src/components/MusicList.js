
import { Link } from "react-router-dom";

const MusicList = ({ list_items }) => {
    return (
        <>
        {list_items.map(article => (
            <div  key={article.id} className="list-container">
                <h3>{article.title}</h3>
                <p>{article.content.substring(0, 150)} ...</p>
            </div>
        ))}
        </>
    )
}

export default MusicList;