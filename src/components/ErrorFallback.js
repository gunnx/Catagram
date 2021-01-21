import styled from 'styled-components'
import InfoPanel from './InfoPanel'
import RobotCat from './Icons/RobotCat'

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`

const ErrorFallback = () => {
  return (
    <Container role='alertdialog'>
      <InfoPanel
        heading='Error occurred'
        description='Something unexpected happened, please try refreshing'
        icon={<RobotCat width={200} height={200} />}
      />
    </Container>
  )
}

export default ErrorFallback
