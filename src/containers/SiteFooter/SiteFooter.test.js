import { render, screen } from '@testing-library/react'
import SiteFooter from './SiteFooter'

describe('SiteFooter', () => {
  it('renders SiteFooter component', () => {
    const mockDate = new Date('2020-01-01')
    const origDate = global.Date

    global.Date = jest.fn().mockImplementation(() => mockDate)
    render(<SiteFooter />)

    expect(screen.getByText(/2020 Catagram Ltd/)).toBeInTheDocument()
    global.Date = origDate
  })
})
