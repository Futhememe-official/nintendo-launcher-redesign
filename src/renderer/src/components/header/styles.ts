import { css } from '@/styled-system/css'

export const headerStyle = css({
  display: 'flex',
  flexDir: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  fontWeight: 'medium',
  fontSize: '14px'
})

export const systemIcons = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
})

export const wifiIcon = css({
  display: 'flex',
  mt: '-8px'
})

export const wifiOff = css({
  display: 'flex',
  mt: '-2px',
  mr: '4px',
  ml: '4px'
})

export const batteryRow = css({
  display: 'flex',
  alignItems: 'center',
  gap: '4px'
})
