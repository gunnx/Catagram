import { render, screen } from '@testing-library/react'
import SiteHeader from './SiteHeader'
import userEvent from '@testing-library/user-event'
import TestProviders from '../../mocks/TestProviders'

describe('SiteHeader', () => {
  it('renders SiteHeader component', () => {
    render(
      <TestProviders hasTheme hasRouter>
        <SiteHeader toggleTheme={() => null} />
      </TestProviders>

    )

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByText(/catagram/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/home/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/upload image/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/toggle dark mode/i)).toBeInTheDocument()
  })

  it('renders logout button if user exists', () => {
    render(
      <TestProviders hasRouter hasTheme>
        <SiteHeader toggleTheme={() => null} user='bob' />
      </TestProviders>
    )

    expect(screen.getByText(/logout/i)).toBeInTheDocument()
  })

  it('calls logout function when logout button clicked', () => {
    const logout = jest.fn()

    render(
      <TestProviders hasRouter hasTheme>
        <SiteHeader toggleTheme={() => null} logout={logout} user='bob' />
      </TestProviders>
    )

    userEvent.click(screen.getByText(/logout/i))
    expect(logout).toHaveBeenCalled()
  })

  it('calls toggle theme when theme change button clicked', () => {
    const toggle = jest.fn()

    render(
      <TestProviders hasRouter hasTheme>
        <SiteHeader toggleTheme={toggle} user='bob' />
      </TestProviders>
    )

    userEvent.click(screen.getByLabelText(/toggle dark mode/i))
    expect(toggle).toHaveBeenCalled()
  })

  it('renders toggle light mode button if theme is set to dark', () => {
    render(
      <TestProviders hasRouter hasTheme>
        <SiteHeader toggleTheme={() => null} themeMode='dark' user='bob' />
      </TestProviders>
    )

    expect(screen.getByLabelText(/toggle light mode/i))
  })
})
