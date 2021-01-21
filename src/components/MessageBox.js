import PropTypes from 'prop-types'
import styled from 'styled-components'
import HappyCat from './Icons/HappyCat'
import SadCat from './Icons/SadCat'

const Container = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.message.background};
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.message.border};
  display: flex;
  padding: 0 1rem;
  
  svg {
    margin-right: 1rem;
  }
`

const Icons = {
  positive: <HappyCat width={30} height={30} />,
  negative: <SadCat width={30} height={30} />
}

const MessageBox = (props) => {
  const { alert, children, icon, type, ...rest } = props

  const actionIcon = icon ? Icons[type] : null

  return (
    <Container role={alert ? 'alert' : undefined} {...rest}>
      {actionIcon}
      {children}
    </Container>
  )
}

MessageBox.propTypes = {
  alert: PropTypes.bool,
  type: PropTypes.oneOf(['positive', 'negative']).isRequired,
  icon: PropTypes.bool
}

MessageBox.defaultProps = {
  alert: false,
  icon: true
}

export default MessageBox
