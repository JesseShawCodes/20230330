const MusicList = ({ list_items }) => {
    return (
        <>
        {list_items.map(article => (
            <div  key={article.id} className="list-container">
                <h3>{article.name}</h3>
                <p>Genres: {article.genres}</p>
            </div>
        ))}
        </>
    )
}

export default MusicList;