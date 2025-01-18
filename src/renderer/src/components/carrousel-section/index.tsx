import { Carousel, CarouselContent, CarouselItem } from '../carousel'
import { GameCard } from '../game-card'
import { sectionStyle } from './styles'

import marioKartImg from '../../assets/games/mario-kart.avif'
import zeldaImg from '../../assets/games/zelda.avif'
import animalImg from '../../assets/games/animal.avif'

const games = [
  { title: 'Mario Kart 8 Deluxe', img: marioKartImg },
  { title: 'Zelda™: Breath of the Wild', img: zeldaImg },
  { title: 'Animal Crossing™: New Horizons', img: animalImg }
]

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
        </CarouselContent>
      </Carousel>
    </section>
  )
}
