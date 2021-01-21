import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Theme from '../theme/Theme'

const TestProviders = (props) => {
  const { children, history, hasRouter, hasTheme } = props

  if (hasRouter && hasTheme) {
    return (
      <Theme>
        <Router history={history}>{children}</Router>
      </Theme>
    )
  } else if (hasRouter) {
    return <Router history={history}>{children}</Router>
  } else if (hasTheme) {
    return <Theme>{children}</Theme>
  } else {
    return children
  }
}

TestProviders.defaultProps = {
  history: createMemoryHistory(),
  hasRouter: false,
  hasTheme: false
}

export default TestProviders
