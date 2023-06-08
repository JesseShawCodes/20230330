import axios from "axios";

import { useState, useEffect } from "react";

import useUser from "../hooks/useUser";

import List from "../components/ArticlesList"

const MusicListPage = () => {
    const [musicList, setMusicList] = useState();
    const { user, isLoading } = useUser();

    useEffect(() => {

        const loadMusicList = async () => {
            const token = user && await user.getIdToken();
            const headers = token ? { authtoken: token } : {};
            const response = await axios.get(`/api/articles`, {
                headers,
            });
            const musicList = response;

            setMusicList(musicList.data);
            music_list(musicList.data)
        }
        if (isLoading) {
            loadMusicList();
        }
    }, [])

    function music_list(list) {
        if (!list) {
            return <h1>Loading...</h1>
        }
        else {
            return <List list_items={list} />
        }
    }
    return (
        <div className="container">
            <h1>Music Page</h1>
            <div>
                {
                    user ?
                        setMusicList ? music_list(musicList) : <h3>Loading...</h3>
                        :
                        <p>You must be logged in to view this page</p>
                }
            </div>

        </div>
    )
}

export default MusicListPage;
