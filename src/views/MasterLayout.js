import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import CenterView from '../components/CenterView'
import ErrorFallback from '../components/ErrorFallback'
import Home from './Home/Home'
import NoMatch from '../components/NoMatch'
import SiteFooter from '../containers/SiteFooter/SiteFooter'
import SiteHeader from '../containers/SiteHeader/SiteHeader'
import Upload from './Upload/Upload'

const SiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Main = styled.main`
  flex: 1;
  padding: 0.5rem;
  
  @media (min-width: 550px) {
    padding: 2rem;
  }
`

const MasterLayout = (props) => {
  const { theme, toggleTheme, logout, user } = props

  if (!user) {
    return <Redirect to='/login' />
  }

  return (
    <SiteContainer>
      <SiteHeader themeMode={theme} toggleTheme={toggleTheme} user={user} logout={logout} />
      <Main>
        <CenterView>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Switch>
              <Route exact path='/'>
                <Home user={user} />
              </Route>
              <Route exact path='/upload'>
                <Upload user={user} />
              </Route>
              <Route path='*'>
                <NoMatch />
              </Route>
            </Switch>
          </ErrorBoundary>
        </CenterView>
      </Main>
      <SiteFooter />
    </SiteContainer>
  )
}

MasterLayout.propTypes = {
  logout: PropTypes.func,
  theme: PropTypes.string,
  toggleTheme: PropTypes.func,
  user: PropTypes.string
}

export default MasterLayout
