import { render, screen } from '@testing-library/react'

import Loader from './Loader'

describe('Loader', () => {
  it('renders Loader component', () => {
    render(<Loader message='Loading' />)

    expect(screen.getByLabelText('Loading')).toBeInTheDocument()
  })
})
