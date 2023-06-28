import React, { useState } from 'react';
import { useGetAlbumsQuery } from "../services/jsonServerApi";

export default function Albums() {
    const { 
        data: albums = [],
        isLoading,
        isError,
        error,
    } = useGetAlbumsQuery("weeknd");

    if (isLoading) {
        return <div>loading...</div>
    }
    if (isError) {
        console.log( {error} );
        return <div>Error...{error.status}</div>
    }
    console.log(albums)
    return (
        <div>
            <input></input>
            <ul>
                {albums.artists.items?.map((album) => (
                    <li key={album.id}>
                        {album.name}
                    </li>
                ))
                }
            </ul>
        </div>
    )
}