import {
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryWarning,
  WifiHigh,
  WifiLow,
  WifiOff,
  WifiZero
} from 'lucide-react'

import { batteryRow, headerStyle, systemIcons, wifiIcon, wifiOff } from './styles'
import { useNetwork } from './hooks/useNetwork'
import { useEffect, useMemo, useState } from 'react'

export const Header = (): JSX.Element => {
  const network = useNetwork()
  const [battery, setBattery] = useState<number>(0)
  const [isCharging, setIsCharging] = useState<boolean>(false)

  const wifiIcons = {
    '4g': <WifiHigh className={wifiIcon} />,
    '3g': <WifiLow className={wifiIcon} />,
    '2g': <WifiZero className={wifiIcon} />,
    offline: <WifiOff className={wifiOff} size={16} />
  }

  useEffect(() => {
    // @ts-ignore battery exists
    navigator.getBattery().then((battery) => {
      setBattery(battery.level)
      setIsCharging(battery.charging)

      battery.addEventListener('chargingchange', () => {
        setIsCharging(battery.charging)
      })

      battery.addEventListener('onlevelchange', () => {
        setBattery(battery.level)
      })
    })
  }, [])

  const batteryLevel = useMemo(() => {
    if (battery <= 0) {
      return Number(String(battery).split('.')[1])
    }

    return battery * 100
  }, [battery])

  return (
    <header className={headerStyle}>
      <div>primeiro</div>
      <div className={systemIcons}>
        <p>12:34</p>
        {wifiIcons[network]}
        <div className={batteryRow}>
          <p>{batteryLevel}%</p>
          {isCharging ? (
            <BatteryCharging />
          ) : (
            <>
              {batteryLevel < 10 && <BatteryWarning />}
              {batteryLevel < 25 && batteryLevel > 10 && <BatteryLow />}
              {batteryLevel < 75 && batteryLevel > 25 && <BatteryMedium />}
              {batteryLevel > 75 && <BatteryFull />}
            </>
          )}
        </div>
      </div>
    </header>
  )
}
