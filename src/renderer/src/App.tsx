import { Header } from './components/header'
import { Main } from './components/layout/main'
import { css } from '@/styled-system/css'

function App(): JSX.Element {
  return (
    <Main>
      <div
        className={css({
          display: 'flex',
          position: 'absolute',
          top: 0,
          left: 0,
          w: '100%',
          height: '36px'
        })}
      />
      <Header />
      <section></section>
    </Main>
  )
}

export default App
