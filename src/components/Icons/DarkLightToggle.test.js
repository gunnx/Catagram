import { render, screen } from '@testing-library/react'
import DarkLightToggle from './DarkLightToggle'

describe('DarkLightToggle', () => {
  it('set title tag inside svg', () => {
    render(<DarkLightToggle title='Hello World' />)

    expect(screen.getByTitle(/hello world/i)).toBeInTheDocument()
  })
})
