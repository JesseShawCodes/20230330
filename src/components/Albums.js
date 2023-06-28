import React, { useState } from 'react';
import { useGetAlbumsQuery } from "../services/jsonServerApi";

export default function Albums() {
    const [page,setPage] = useState(1)
    const { 
        data: albums = [],
        isLoading,
        isError,
        error,
    } = useGetAlbumsQuery("deftones");

    if (isLoading) {
        return <div>loading...</div>
    }
    if (isError) {
        console.log( {error} );
        return <div>Error...{error.status}</div>
    }
    return (
        <div>
            <ul>
                {albums?.map((album) => (
                    <li key={album.id}>
                        {album.id} - {album.title}
                    </li>
                ))

                }
            </ul>
        </div>
    )
}