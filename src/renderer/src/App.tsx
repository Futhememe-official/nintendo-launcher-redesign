import { CarrouselSection } from './components/carrousel-section'
import { Header } from './components/header'
import { Main } from './components/layout/main'
import { css, cx } from '@/styled-system/css'

const dragRegion = css({
  display: 'flex',
  position: 'absolute',
  top: 0,
  left: 0,
  w: '100%',
  height: '36px'
})

function App(): JSX.Element {
  return (
    <Main>
      <div className={cx(dragRegion, 'region-drag')} />
      <Header />
      <CarrouselSection />
    </Main>
  )
}

export default App
