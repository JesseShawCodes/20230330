import React, { useState } from 'react';
import { useGetArtistsQuery } from "../services/jsonServerApi";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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

    return (
        <div>
            <input
                type="text"
                placeholder='Search'
                value={searchTerm}
                onChange={handleChange}
            />
            {
                isError ? `${<div>Error</div>}` : ""
            }
            <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 2, 900: 3}}>
                <Masonry>
                    {musicQuery.length !== 0 ? musicQuery.artists.items?.map((artist) => (
                        <div key={artist.id} className="mt-4 mx-4 card border-secondary">
                            {
                                artist.images.length > 0 ? <img src={artist.images[0].url} alt={artist.name + " Image"} />: ""
                            }
                            <div>
                                <h2 className=''>
                                    {artist.name}
                                </h2>
                            </div>
                            <div>
                                {
                                    artist.genres.length > 0 ? `${artist.genres}` : ""
                                }
                            </div>
                            <div>
                                <span>Followers:</span> {artist.followers.total.toLocaleString("en-US")}
                            </div>
                            <button className='btn btn-primary'>Choose this artist</button>
                        </div>
                        )) : "_No Data Available"
                    }
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}