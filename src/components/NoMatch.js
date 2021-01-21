import { useLocation } from 'react-router-dom'
import InfoPanel from './InfoPanel'
import RobotCat from './Icons/RobotCat'

const NoMatch = () => {
  const location = useLocation()
  return (
    <InfoPanel
      heading='Page not found'
      description={`Could not find ${location.pathname}`}
      icon={<RobotCat width={200} height={200} />}
    />
  )
}

export default NoMatch
