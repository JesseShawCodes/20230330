const MusicList = ({ list_items }) => {
    return (
        <>
        {list_items.map(article => (
            <div  key={article.id} className="list-container">
                <h3>{article.name}</h3>
                {
                    <div>
                        {
                            article.genres.length > 0 ? `Genres: ${article.genres}` : "no"
                        }
                    </div>
                }
            </div>
        ))}
        </>
    )
}

export default MusicList;