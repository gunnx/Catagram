import styled from 'styled-components'

const StyledButton = styled.button`
  appearance: none;
  background: ${props => props.disabled ? props.theme.colors.button.disabled : props.theme.colors.button.background};
  border-radius: 4px;
  border: 0;
  display: block;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-overflow: ellipsis;
  user-select: none;
  width: auto;
`

const Label = styled.span`
  color: ${props => props.theme.colors.button.text};
`

const Button = (props) => {
  const { children, ...rest } = props

  return (
    <StyledButton {...rest}>
      <Label>{children}</Label>
    </StyledButton>
  )
}

export default Button
