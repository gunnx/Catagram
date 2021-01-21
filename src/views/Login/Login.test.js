import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import Login from './Login'
import TestProviders from '../../mocks/TestProviders'

jest.mock('../../config', () => ({
  UserAccounts: [{ username: 'user', password: 'password' }]
}))

describe('Login', () => {
  it('renders login form', async () => {
    const mockSetUser = jest.fn()
    render(
      <TestProviders hasTheme>
        <Login setUser={mockSetUser} />
      </TestProviders>
    )

    expect(screen.getByText(/Log in/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  it('calls setUser when successful login and redirects to `/`', () => {
    const mockSetUser = jest.fn()
    const history = createMemoryHistory({
      initialEntries: ['/login'],
      initialIndex: 0
    })

    render(
      <TestProviders history={history} hasRouter hasTheme>
        <Login setUser={mockSetUser} />
      </TestProviders>
    )

    userEvent.type(screen.getByLabelText(/username/i), 'user')
    userEvent.type(screen.getByLabelText(/password/i), 'password')

    userEvent.click(screen.getByText(/log in/i))

    expect(mockSetUser).toHaveBeenCalledWith('user')
    expect(history.location.pathname).toBe('/')
  })

  it('display error message when login details are incorrect', async () => {
    render(
      <TestProviders hasTheme><Login setUser={() => null} /></TestProviders>
    )

    userEvent.click(screen.getByText(/log in/i))
    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent('Username/password not recognised')
  })

  it('calls login when enter key press on username field', async () => {
    render(
      <TestProviders hasTheme><Login setUser={() => null} /></TestProviders>
    )

    userEvent.type(screen.getByLabelText(/username/i), 'user{enter}')
    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent('Username/password not recognised')
  })

  it('calls login when enter key press on password field', async () => {
    render(
      <TestProviders hasTheme><Login setUser={() => null} /></TestProviders>
    )

    userEvent.type(screen.getByLabelText(/password/i), 'password{enter}')
    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent('Username/password not recognised')
  })
})
