import React, { useState } from 'react';
import { useGetArtistsQuery } from "../services/jsonServerApi";

/*
RTK Query Tutorial
https://dev.to/raaynaldo/rtk-query-tutorial-crud-51hl
*/

export default function Albums() {
    const [artist, setArtist] = useState(1)
    const { 
        data: musicQuery = [],
        isLoading,
        isError,
        error,
    } = useGetArtistsQuery("sampha");

    const [searchTerm, setSearchTerm] = React.useState("")
    const [searchResults, setSearchResults] = React.useState([])

    const handleChange = event => {
        console.log("handle change")
        setSearchTerm(event.target.value);
    };

    if (isLoading) {
        return <div>loading...</div>
    }
    if (isError) {
        console.log( {error} );
        return <div>Error...{error.status}</div>
    }
    console.log(musicQuery.artists.items.length )
    return (
        <div>
            <input
                type="text"
                placeholder='Search'
                value={searchTerm}
                onChange={handleChange}
            />
            <div>
                {musicQuery.artists.items.length > 0 ? musicQuery.artists.items?.map((artist) => (
                    <div key={artist.id}>
                        {artist.name}


                    </div>
                )) : " No Data Available"
                }
            </div>
        </div>
    )
}