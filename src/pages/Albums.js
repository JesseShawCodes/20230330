import React, { useState } from 'react';
import { useGetArtistsQuery } from "../services/jsonServerApi";

/*
RTK Query Tutorial
https://dev.to/raaynaldo/rtk-query-tutorial-crud-51hl
*/

export default function Albums() {
    const [artist, setArtist] = useState()
    const { 
        data: musicQuery = [],
        isLoading,
        isError,
        error,
    } = useGetArtistsQuery(artist);

    const [searchTerm, setSearchTerm] = React.useState("")

    const handleChange = event => {
        if (event.target.value.length > 0) {
            setSearchTerm(event.target.value)
            setArtist(event.target.value)
        }
        else {
            console.log("SET ARTIST")
            setSearchTerm("")
            setArtist("")
        }
    };

    if (isLoading) {
        return <div>loading...</div>
    }

    if (isError) {
        console.log({error})
    }

    console.log(musicQuery.length)
    return (
        <div>
            <input
                type="text"
                placeholder='Search'
                value={searchTerm}
                onChange={handleChange}
            />
            <div>
            {
                isError ? `Error` : ""
            }
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {musicQuery.length != 0 ? musicQuery.artists.items?.map((artist) => (
                    <div key={artist.id} className="mt-4 card" style={{width: 400}}>
                        {
                            artist.images.length > 0 ? <img src={artist.images[0].url} alt="TEST IMAGE" className="card-img-top" />: ""
                        }
                        <div>
                            <h2 className='card-title'>
                                {artist.name}
                            </h2>
                        </div>
                        <div>
                            {
                                artist.genres.length > 0 ? `Genres: ${artist.genres}` : ""
                            }
                        </div>
                    </div>
                )) : "_No Data Available"
                }
            </div>
        </div>
    )
}