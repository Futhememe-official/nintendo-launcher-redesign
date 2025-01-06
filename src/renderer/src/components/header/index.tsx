import { Battery, WifiHigh } from 'lucide-react'
import { batteryRow, headerStyle, systemIcons, wifiIcon } from './styles'

export const Header = (): JSX.Element => {
  return (
    <header className={headerStyle}>
      <div>primeiro</div>
      <div className={systemIcons}>
        <p>12:34</p>
        <WifiHigh className={wifiIcon} />
        <div className={batteryRow}>
          <p>34%</p>
          <Battery />
        </div>
      </div>
    </header>
  )
}
