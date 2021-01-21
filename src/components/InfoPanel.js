import PropTypes from 'prop-types'
import styled from 'styled-components'
import Heading from './Heading'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Opacity = styled.div`
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
`

const InfoPanel = (props) => {
  const { opacity, heading, description, icon } = props

  return (
    <Container>
      {icon && <Opacity opacity={opacity}>{icon}</Opacity>}
      <Heading as='h2' size={2}>{heading}</Heading>
      {description && <Heading as='h3' size={3}>{description}</Heading>}
    </Container>
  )
}

InfoPanel.propTypes = {
  heading: PropTypes.string.isRequired,
  icon: PropTypes.element,
  opacity: PropTypes.number,
  description: PropTypes.string
}

InfoPanel.defaultProps = {
  opacity: 1
}

export default InfoPanel
