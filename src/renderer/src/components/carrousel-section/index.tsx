import { Carousel, CarouselContent, CarouselItem } from '../carousel'
import { GameCard } from '../game-card'
import { sectionStyle } from './styles'

export const CarrouselSection = (): JSX.Element => {
  return (
    <section className={sectionStyle}>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <GameCard />
          </CarouselItem>
          <CarouselItem>
            <GameCard />
          </CarouselItem>
          <CarouselItem>
            <GameCard />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  )
}
