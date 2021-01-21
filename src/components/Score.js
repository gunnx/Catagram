import PropTypes from 'prop-types'
import styled from 'styled-components'

const Label = styled.span`
  align-items: center;
  background: ${props => props.theme.colors.body};
  color: ${props => props.theme.colors.text};
  border-radius: ${props => (props.size / 2 + 1)}px;
  border: 1px solid ${props => props.theme.colors.icon};
  display: flex;
  height: ${props => props.size}px;
  justify-content: center;
  width: ${props => props.size}px;
`

const Score = (props) => {
  const { size, value } = props
  return (
    <Label size={size}>{value}</Label>
  )
}

Score.propTypes = {
  value: PropTypes.number,
  size: PropTypes.number
}

Score.defaultProps = {
  size: 30
}

export default Score
