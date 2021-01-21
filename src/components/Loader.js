import PropTypes from 'prop-types'
import styled from 'styled-components'
import Spinner from './Icons/Spinner'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Loader = (props) => {
  const { message } = props
  return <Container aria-label={message}><Spinner width={200} height={200} /></Container>
}

Loader.propTypes = {
  message: PropTypes.string.isRequired
}

export default Loader
