/** @jsxImportSource @emotion/react */
import { useQuery } from '@apollo/client'
import { ANIME_DETAIL, AnimeDetailData, AnimeDetailVars } from '../graphql/queries'
import { useParams } from 'react-router-dom'
import { Interweave } from 'interweave'
import DetailCard, { DetailInfo } from '../components/DetailCard'
import { css } from '@emotion/react'
import AnimeHeader from '../components/AnimeHeader'

export default function AnimeDetailPage() {
    const params = useParams()
    const animeId = params && params.id!
    const {
        data,
        error,
        loading,
    } = useQuery<AnimeDetailData, AnimeDetailVars>(ANIME_DETAIL, { variables: { id: +animeId } })

    if (loading) return <div>Loading ...</div>
    
    if (error) return <div>{JSON.stringify(error)}</div>

    return data ? (
        <div css={css({ paddingBottom: '5rem' })}>
            <AnimeHeader bannerImage={data.Media.bannerImage} title={data.Media.title} score={data.Media.averageScore} />
            <div css={css({
                marginTop: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            })}>
                <DetailCard title='Details'>
                    <DetailInfo label='Genres'>{data.Media.genres.join(', ')}</DetailInfo>
                    <DetailInfo label='Season'>{data.Media.season}</DetailInfo>
                    <DetailInfo label='Year'>{data.Media.seasonYear}</DetailInfo>
                    <DetailInfo label='Episodes'>{data.Media.episodes}</DetailInfo>
                </DetailCard>
                <DetailCard title='Descriptions'>
                    <Interweave css={css({
                        br: {
                            display: 'block',
                            content: `""`,
                            marginTop: '0.75rem'
                        }
                    })} content={data.Media.description} />
                </DetailCard>
            </div>
        </div>
    ) : <></>
}