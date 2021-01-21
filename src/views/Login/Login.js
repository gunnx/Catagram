import PropTypes from 'prop-types'
import { useCallback, useState } from 'react'
import { Redirect } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Button from '../../components/Button'
import Heading from '../../components/Heading'
import { UserAccounts } from '../../config'

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`

const CompanyHeading = styled(Heading)`
  font-family: billabongregular, sans-serif;
  font-size: 5rem;
  line-height: 1;
`

const shake = keyframes`
  0% {transform: translateX(0);}
  6.5% {transform: translateX(-6px) rotateY(-9deg);}
  18.5% {transform: translateX(5px) rotateY(7deg);}
  31.5% {transform: translateX(-3px) rotateY(-5deg);}
  43.5% {transform: translateX(2px) rotateY(3deg);}
  50% {transform: translateX(0);}
`

const LoginBox = styled.div`
  align-items: center;
  border: 1px solid rgb(219,219,219);
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
  width: 500px;
  animation: ${props => props.isError ? shake : 'none'};
  animation-duration: 1s 
`

const Label = styled.label`
  margin-bottom: 1rem;
  position: relative;
`

const InputTitle = styled.span`
  color: ${props => props.theme.colors.text};
  display: block;
  font-size: 0.8rem;
`

const Input = styled.input`
  background-color: ${props => props.theme.colors.input.background};
  border: 1px solid #ccc;
  font-size: 1.3rem;
  padding: 0.3rem;
`

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const FormError = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0.5rem 0;
  text-align: center;
`

const Login = (props) => {
  const { setUser } = props
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [auth, setAuth] = useState(false)
  const [error, setError] = useState('')

  const login = useCallback(() => {
    const account = UserAccounts.find(acc => acc.username === username)

    if (account?.username === username && account?.password === password) {
      setUser(username)
      setAuth(true)
      setError('')
    } else {
      setError('Username/password not recognised')
    }
  }, [username, password])

  if (auth) {
    return <Redirect to='/' />
  }

  return (
    <Container>
      <LoginBox isError={error}>
        <CompanyHeading size={1}>Catagram</CompanyHeading>
        <Form id='loginForm' method='POST'>
          <Label>
            <InputTitle>Username</InputTitle>
            <Input
              id='username'
              type='text' onChange={(event) => setUsername(event.target.value)} value={username} onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  login()
                }
              }}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'login-error' : undefined}
            />
          </Label>
          <Label>
            <InputTitle>Password</InputTitle>
            <Input
              id='password' type='password' onChange={(event) => setPassword(event.target.value)} value={password} onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  login()
                }
              }}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'login-error' : undefined}
            />
          </Label>
          <Button
            type='button' onClick={login}
          >Log in
          </Button>
          <FormError id='login-error' role={error ? 'alert' : undefined}> {error} </FormError>
        </Form>
      </LoginBox>
    </Container>
  )
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired
}

export default Login
