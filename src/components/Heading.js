import PropTyes from 'prop-types'
import styled from 'styled-components'

export const FONT_SIZES = {
  1: '2.5rem',
  2: '2rem',
  3: '1.8rem',
  4: '1.3rem',
  5: '1rem'
}

const StyledHeading = styled.h1`
  font-family: Arial,sans-serif;
  font-size: ${props => FONT_SIZES[props.size]};
  margin: 1rem 0;
  padding: 0;
`

const Heading = (props) => {
  const { as, size, ...rest } = props
  return (
    <StyledHeading
      as={as}
      size={size}
      {...rest}
    />
  )
}

Heading.propTypes = {
  as: PropTyes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  size: PropTyes.oneOf([1, 2, 3, 4, 5])
}

Heading.defaultProps = {
  size: 1
}

export default Heading
