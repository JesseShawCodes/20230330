import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetArtistInfoQuery } from "../services/jsonServerApi";



const ArtistPage = () => {
    const { handle } = useParams()
    const {
        data: musicQuery = [],
        isLoading,
        isError,
        error
    } = useGetArtistInfoQuery(handle)

    const [artist, setArtist] = useState(handle)

    if (!musicQuery.data) {
        return <div>Loading...</div>
    }

    if (isError) {
        console.log({error});
        return <div>Error</div>
    }

    /*
    https://blog.logrocket.com/create-search-bar-react-from-scratch/
    */
   console.log(musicQuery)
   console.log(handle)
    return (
        <div className="container">
            {
                !musicQuery.length !== 0 ? 
                    <div>
                        <h1>
                            {musicQuery.data.name}
                        </h1>
                        <img src={musicQuery.data.images[0].url} />
                    </div>
                    : 
                    ""
            }

        </div>
    )
}

export default ArtistPage;
