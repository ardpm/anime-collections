import React from "react";
import { useQuery } from "@apollo/client";
import { AnimeListData, AnimeListVars, GET_ALL_ANIME } from "../graphql/queries";
import { css } from "@emotion/react";
import { media } from "../styles/Constant";
import { useState } from "react";
import { useNavigate } from "react-router";
import AnimeCard from "../components/AnimeCard";
import Pagination from "../components/Pagination";

const AnimeListPageStyle = css({
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '5rem',
    '.pagination': {
        marginTop: '1.5rem'
    }
})

const AnimeListStyle = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '1rem',
    [media[1]]: {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    },
    [media[2]]: {
        gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
    },
})


function AnimeList() {
    const [page, setPage] = useState<number>(1)
    const { error, loading, data } = useQuery<AnimeListData, AnimeListVars>(GET_ALL_ANIME, {
        variables: {
            page,
            perPage: 10
        }
    })
    console.log({ error, loading, data })

    const navigate = useNavigate()
    const isNext = data?.Page.pageInfo.hasNextPage

    if (loading) return <div> Loading... </div>
    if (error) return <div>{JSON.stringify(error)}</div>

    const nextPage = () => {
        let newPage = page + 1
        if (isNext) {
            setPage(newPage)
        }
    }

    const prevPage = () => {
        let newPage = page - 1
        if (page < 1) {
            return newPage = 1
        }
        setPage(newPage)
    }

    return (
        <div id='animeList' css={AnimeListPageStyle}>
            <div css={AnimeListStyle}>
                {data?.Page.media.map((anime) => {
                    const { title: { romaji },
                        coverImage: { large },
                        seasonYear,
                        id } = anime
                    const year = seasonYear ? seasonYear.toString() : ''

                    return <AnimeCard
                        key={id}
                        imageUrl={large}
                        title={`${romaji} (${year})`}
                        onClick={() => navigate(`/animes/${id}`)}
                    />
                })}
            </div>
            <Pagination page={page} showPrev={page > 1} showNext={!!isNext} onPrev={prevPage} onNext={nextPage} />
        </div>
    )
}

export default AnimeList;