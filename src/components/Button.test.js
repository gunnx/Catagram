import { render, screen } from '@testing-library/react'

import Button from './Button'
import Theme from '../theme/Theme'

describe('Button', () => {
  it('renders Button component', () => {
    const text = 'Press me'
    render(<Theme><Button>{text}</Button></Theme>)

    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
