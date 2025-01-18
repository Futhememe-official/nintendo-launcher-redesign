import { Carousel, CarouselContent, CarouselItem } from '../carousel'
import { GameCard } from '../game-card'
import { sectionStyle } from './styles'

import marioKartImg from '../../assets/games/mario-kart.avif'

const games = [{ title: 'Mario Kart 8 Deluxe', img: marioKartImg }]

export const CarrouselSection = (): JSX.Element => {
  return (
    <section className={sectionStyle}>
      <Carousel opts={{ dragFree: true }}>
        <CarouselContent>
          {games.map((game, index) => (
            <CarouselItem key={index}>
              <GameCard title={game.title} img={game.img} />
            </CarouselItem>
          ))}
          <CarouselItem>
            <GameCard title="Zelda Breath of the wild" />
          </CarouselItem>
          <CarouselItem>
            <GameCard title="Animal Crossing" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  )
}
