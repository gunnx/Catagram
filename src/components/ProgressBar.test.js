import { render, screen } from '@testing-library/react'

import ProgressBar from './ProgressBar'
import Theme from '../theme/Theme'

describe('ProgressBar', () => {
  it('renders ProgressBar component', () => {
    render(<Theme><ProgressBar percent={50} /></Theme>)

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
    expect(screen.getByText('50%')).toBeInTheDocument()
  })
})
