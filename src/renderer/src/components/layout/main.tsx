import { styled } from '@/styled-system/jsx'

export const Main = styled('main', {
  base: {
    display: 'flex',
    flexDir: 'column',
    minHeight: '100vh',
    maxHeight: '100vh',
    maxWidth: '100vw',
    backgroundColor: 'background',
    position: 'relative',
    padding: '36px 16px 16px 16px',

    color: 'text'
  }
})
