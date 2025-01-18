import { css } from '@/styled-system/css'

const contaienr = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  h: '300px',
  w: '300px',
  borderRadius: '4px',
  transition: '0.1s',
  position: 'relative',
  // boxShadow:
  //   "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)' ",
  boxShadow: '0 6px 6px hsl(0deg 0% 0% / 0.3)',

  cursor: 'pointer',

  '& > p': {
    opacity: 0
  },

  _hover: {
    scale: '1.07',
    borderWidth: '4px',
    borderColor: 'blue.100',
    '& > p': {
      opacity: 1
    }
  }
})

const gameTitle = css({
  display: 'flex',
  position: 'absolute',
  w: '300px',
  textAlign: 'center',

  fontSize: '20px',
  fontWeight: 'medium',

  color: 'blue.200',

  top: '-40px',
  left: '0'
})

const subtitle = css({
  display: 'flex',
  position: 'absolute',
  w: '300px',
  textAlign: 'center',

  fontSize: '14px',
  fontWeight: 'medium',

  color: 'blue.200',

  bottom: '-24px',
  left: '36%'
})

const image = css({
  width: '300px',
  h: '300px',
  borderRadius: '4px',
  objectFit: 'cover',

  _hover: {
    borderRadius: '0',
    width: 'calc(300px - 12px)',
    h: 'calc(300px - 12px)'
  }
})

interface IGameCard {
  title: string
  img?: string
}

export const GameCard = ({ title, img }: IGameCard): JSX.Element => {
  return (
    <div className={contaienr}>
      {img && <img src={img} className={image} />}
      <p className={gameTitle}>{title}</p>
      <p className={subtitle}>Clique aqui</p>
    </div>
  )
}
