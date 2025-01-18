import { Carousel, CarouselContent, CarouselItem } from '../carousel'
import { GameCard } from '../game-card'
import { sectionStyle } from './styles'

export const CarrouselSection = (): JSX.Element => {
  return (
    <section className={sectionStyle}>
      <Carousel opts={{ dragFree: true }}>
        <CarouselContent>
          <CarouselItem>
            <GameCard title="Mario Kart 8 Deluxe" />
          </CarouselItem>
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
