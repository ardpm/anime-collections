import { gql } from "@apollo/client";

interface Anime {
    id: number
    coverImage: {
        large: string
    }
    title: {
        romaji: string
    }
}

interface PageInfo {
    hasNextPage: boolean
}

export interface AnimeListData {
    Page: {
        pageInfo: PageInfo
        media: Anime[]
    }
}

export interface AnimeListVars {
    page: number
    perPage: number
}

export const GET_ALL_ANIME = gql`
    query Query($page: Int, $perPage: Int){
        Page(page: $page, perPage: $perPage){
            pageInfo {
                hasNextPage
            }
            media {
                id
                title {
                    english
                    native
                    romaji
                }
                description
                coverImage {
                    large
                }
                bannerImage
                volumes
                episodes
            }
        }
    }
`