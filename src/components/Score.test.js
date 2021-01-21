import { render, screen } from '@testing-library/react'

import Score from './Score'
import Theme from '../theme/Theme'

describe('Score', () => {
  it('renders Score component', () => {
    const val = 34
    render(<Theme><Score value={val} /> </Theme>)

    expect(screen.getByText(val)).toBeInTheDocument()
  })
})
