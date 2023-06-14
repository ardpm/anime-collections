import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_ANIME } from "../graphql/queries";


function AnimeList() {
    const {error, loading, data} = useQuery(GET_ALL_ANIME)

    if(loading) return <div> Loading... </div>
    if (error) return <div>{JSON.stringify(error)}</div> 

    return ( 
    <div>
        AnimeList 
    </div> );
}

export default AnimeList;