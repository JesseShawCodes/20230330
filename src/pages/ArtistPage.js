import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetArtistsQuery } from "../services/jsonServerApi";



const ArtistPage = () => {
    const { handle } = useParams()
    const {
        data: musicQuery = [],
        isLoading,
        isError,
        error
    } = useGetArtistsQuery(handle)

    const [artist, setArtist] = useState(handle)

    console.log(musicQuery)

    /*
    https://blog.logrocket.com/create-search-bar-react-from-scratch/
    */
   console.log(handle)
    return (
        <div className="container">
            <h1>Artist Page</h1>
            {
                isError ? <div>Error!</div> : ""
            }
            {
                isLoading ? <div>Loading...</div> : ""
            }
            <div><span>ID:</span> {handle}</div>
        </div>
    )
}

export default ArtistPage;
