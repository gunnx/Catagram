import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

jest.mock('./config', () => ({
  UserAccounts: [{ username: 'user', password: 'password' }]
}))

describe('<App />', () => {
  it('Renders Login view when user not logged in', () => {
    render(<App />)
    expect(screen.getByText('Catagram')).toBeInTheDocument()
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  it('renders home view when logged in', async () => {
    render(<App />)

    userEvent.type(screen.getByLabelText(/username/i), 'user')
    userEvent.type(screen.getByLabelText(/password/i), 'password')
    userEvent.click(screen.getByText(/log in/i))

    await waitFor(() => {
      expect(screen.getByRole('main')).toBeInTheDocument()
    })
  })
})
