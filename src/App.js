import { useCallback, useState } from 'react'
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom'
import GlobalStyle from './theme/globalStyles'
import Login from './views/Login/Login'
import MasterLayout from './views/MasterLayout'
import Theme from './theme/Theme'
import useDarkMode from './hooks/useDarkMode'
import './assets/fonts/fonts.css'

const App = () => {
  const [theme, toggleTheme, isReady] = useDarkMode()
  const [user, setUser] = useState()

  const logout = useCallback(() => setUser(null))

  if (!isReady) return null

  return (
    <Theme mode={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path='/login'>
            <Login setUser={setUser} />
          </Route>
          <Route path='/'>
            <MasterLayout user={user} theme={theme} toggleTheme={toggleTheme} logout={logout} />
          </Route>
        </Switch>
      </Router>
    </Theme>
  )
}

export default App
