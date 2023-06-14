import { gql } from "@apollo/client";

export const GET_ALL_ANIME = gql`
    query Query($page: Int){
        Page(page: $page){
            media {
                title {
                    english
                    native
                }
                description
                coverImage {
                    medium
                }
                bannerImage
                volumes
                episodes
            }
        }
    }
`