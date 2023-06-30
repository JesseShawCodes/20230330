import React, { useState } from 'react';
import { useGetArtistsQuery } from "../services/jsonServerApi";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useNavigate, useLocation } from "react-router-dom"

/*
RTK Query Tutorial
https://dev.to/raaynaldo/rtk-query-tutorial-crud-51hl
*/

export default function Albums() {
    const navigate = useNavigate()
    const location = useLocation()
    const [artist, setArtist] = useState()
    
    var skipParam = true
    var artistOnLoad = artist
    if (location.search) {
        artistOnLoad = location.search
        skipParam = false
    }
    const [skip, setSkip] = React.useState(skipParam)
    const { 
        data: musicQuery = [],
        isLoading,
        isError,
        error,
    } = useGetArtistsQuery(artist, {skip});
    const [searchTerm, setSearchTerm] = React.useState("")

    const handleChange = event => {
        console.log(location)
        navigate(`${location.pathname}?q=${event.target.value}`)
        if (event.target.value.length > 0) {
            setSearchTerm(event.target.value)
            setArtist(event.target.value)
            setSkip(false)
        }
        else {
            setSearchTerm("")
            setArtist("")
            setSkip(true)
        }
    };

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        console.log({error})
    }

    return (
        <div className='w-90 mx-auto'>
            <input
                type="text"
                placeholder='Search'
                value={searchTerm}
                onChange={handleChange}
            />
            {
                isError ? `${<div>Error</div>}` : ""
            }
            {
                isLoading ? `${<div>Loading</div>}` : ""
            }
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
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
                            <a href={"artist/" + artist.id} className='btn btn-primary' id={artist.id} >Choose this artist</a>
                        </div>
                        )) : "_No Data Available"
                    }
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}