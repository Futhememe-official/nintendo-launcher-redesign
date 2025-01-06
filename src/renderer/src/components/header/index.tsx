import { Battery, WifiHigh, WifiLow, WifiOff, WifiZero } from 'lucide-react'

import { batteryRow, headerStyle, systemIcons, wifiIcon, wifiOff } from './styles'
import { useSyncExternalStore } from 'react'
import { NetworkType } from './types'

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

export const Header = (): JSX.Element => {
  const network = useSyncExternalStore(subscribe, getSnapshot)

  return (
    <header className={headerStyle}>
      <div>primeiro</div>
      <div className={systemIcons}>
        <p>12:34</p>
        {network === '4g' && <WifiHigh className={wifiIcon} />}
        {network === '3g' && <WifiLow className={wifiIcon} />}
        {network === '2g' && <WifiZero className={wifiIcon} />}
        {network === 'offline' && <WifiOff className={wifiOff} size={16} />}
        <div className={batteryRow}>
          <p>34%</p>
          <Battery />
        </div>
      </div>
    </header>
  )
}
