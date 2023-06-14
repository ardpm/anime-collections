/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { COLORS, media } from '../styles/Constant'

const animeCardStyle = css({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  padding: '0.5rem',
  backgroundColor: COLORS['dark-gray'],
//   borderRadius: '0.75rem',
  cursor: 'pointer',
  '&:hover,&:focus': {
    filter: 'brightness(0.8)'
  },
  width: '20rem',
  img: {
    objectFit: 'cover',
    borderRadius: '0.25rem',
    width: 150,
    height: 250,
    [media[1]]: {
      width: 200,
      height: 300
    }
  }
})

const titleStyle = css({
  marginTop: '1rem',
  height: '2rem',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  fontWeight: 'bold',
  width: 150,
  [media[1]]: {
    width: 200
  }
})

const yearStyle = css({
    color: COLORS.gray,
    fontSize: '0.8rem'
  })

interface AnimeCardProps {
  imageUrl: string
  title: string
  seasonYear?: number
  onClick?: () => void
}

export default function AnimeCard({imageUrl, title, seasonYear, onClick}: AnimeCardProps) {

  return (
    <div css={animeCardStyle} onClick={onClick}>
      {/* TODO: Add fallback image */}
      <img src={imageUrl} alt={`${title}`} />
      <div css={titleStyle}>{title}</div>
      {seasonYear && <div css={yearStyle}>{seasonYear}</div>}    
      </div>
  )
}