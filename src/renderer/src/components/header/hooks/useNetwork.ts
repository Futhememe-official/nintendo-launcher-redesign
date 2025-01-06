import { useSyncExternalStore } from 'react'
import { NetworkType } from '../types'

function subscribe(callback: () => void) {
  // @ts-ignore connection exists
  navigator?.connection?.addEventListener('change', callback)
  window.addEventListener('online', callback)
  window.addEventListener('offline', callback)
  return (): void => {
    // @ts-ignore connection exists
    navigator?.connection?.removeEventListener('change', callback)
    window.removeEventListener('online', callback)
    window.removeEventListener('offline', callback)
  }
}

function getSnapshot(): NetworkType {
  const isOnline = window.navigator.onLine

  if (!isOnline) {
    return 'offline'
  }

  // @ts-ignore connection exists
  return navigator?.connection?.effectiveType
}

export const useNetwork = (): NetworkType => {
  const network = useSyncExternalStore(subscribe, getSnapshot)

  return network
}
