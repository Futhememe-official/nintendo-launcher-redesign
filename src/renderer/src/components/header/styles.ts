import { css } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import * as RadixAvatar from '@radix-ui/react-avatar'

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

export const Avatar = styled(RadixAvatar.Root, {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    width: '32px',
    height: '32px',
    borderRadius: '100%',
    backgroundColor: 'red.200',

    borderWidth: '2px',
    borderColor: 'foreground'
  }
})

// @ts-ignore base is defined
export const AvatarFallback = styled(RadixAvatar.AvatarFallback, {
  base: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    color: 'text',
    fontsize: '15px',
    lineHeight: '1',
    fontWeight: '500'
  }
})
