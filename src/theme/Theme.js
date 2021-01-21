import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

const lightTheme = {
  colors: {
    body: 'rgb(250, 250, 250)',
    text: 'rgba(0,0,0,.8)',
    icon: '#000',
    shadow: 'rgba(200,200,200,0.8)',
    divider: '#eee',
    button: {
      background: 'rgba(0, 149, 246, 1)',
      disabled: 'rgba(0, 149, 246, 0.3)',
      text: '#fff'
    },
    input: {
      background: '#fff'
    },
    header: {
      background: '#FFFFFF',
      text: '#000000'
    },
    message: {
      background: '#f8f8f9',
      border: '#000'
    },
    progress: {
      background: '#e0e0de',
      fill: '#ef6c00'
    }
  }
}

const darkTheme = {
  colors: {
    body: '#363636',
    text: '#EEFFFF',
    icon: '#fff',
    shadow: 'rgba(80,80,80,0.8)',
    divider: '#eee',
    button: {
      background: 'rgba(0,149,246, 1)',
      disabled: 'rgba(0, 149, 246, 0.3)',
      text: '#eee'
    },
    input: {
      background: '#fff'
    },
    header: {
      background: '#807d7d',
      text: '#ffffff'
    },
    message: {
      background: '#333',
      border: '#ddd'
    },
    progress: {
      background: '#e0e0de',
      fill: '#ef6c00'
    }
  }
}

const Theme = (props) => {
  const { mode = 'light', children } = props
  const theme = mode === 'light' ? lightTheme : darkTheme
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

Theme.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']),
  children: PropTypes.node
}

export default Theme
