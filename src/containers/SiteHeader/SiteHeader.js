import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ArrowUp from '../../components/Icons/ArrowUp'
import Button from '../../components/Button'
import CenterView from '../../components/CenterView'
import DarkLightToggle from '../../components/Icons/DarkLightToggle'
import House from '../../components/Icons/House'
import IconButton from '../../components/IconButton'
import Logo from '../../components/Icons/Logo'

const FullBleed = styled.header`
  background-color: ${props => props.theme.colors.header.background};
  box-shadow: 1px 3px 3px ${props => props.theme.colors.shadow};
`

const AppLink = styled(Link)`
  color: #000;
  text-decoration: none;
`

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`

const AppLogo = styled.div`
  align-items: center;
  display: flex;
`

const CompanyName = styled.span`
  color: ${props => props.theme.colors.header.text};
  font-family: billabongregular, sans-serif;
  font-size: 2.5rem;
  margin: 1rem 0 0 0;
  padding: 0;

  @media (min-width: 411px) {
    font-size: 3rem;
  }
`

const CompanyLogo = styled(Logo)`
  transform: scale(0);
  transition: all 0.7s;
  width: 0;

  @media(min-width: 411px) {
    display: block;
    margin-right: 1rem;
    transform: scale(1);
    width: auto;
  }
`

const Nav = styled.nav`
  display: flex;
`

const NavItem = styled.div`
  &:not(:first-child) {
    margin-left: 1rem;
  }
`

const User = styled.div`
  font-size: 1rem;
  position: absolute;
  right: 5px;
  top: 5px;
  
  button {
    font-size: 0.8rem;
  }
`

const SiteHeader = (props) => {
  const { toggleTheme, themeMode = 'light', user, logout } = props

  const isDark = themeMode === 'dark'

  return (
    <FullBleed>
      <CenterView>
        {user && <User><Button onClick={logout}>Logout</Button></User>}
        <Header>
          <AppLink to='/'>
            <AppLogo>
              <CompanyLogo width={70} height={70} />
              <CompanyName>Catagram</CompanyName>
            </AppLogo>
          </AppLink>
          <Nav>
            <NavItem><Link to='/' aria-label='Home'><House width={30} height={30} /></Link></NavItem>
            <NavItem><Link to='/upload' aria-label='Upload image'><ArrowUp width={30} height={30} /></Link></NavItem>
            <NavItem><IconButton onClick={() => toggleTheme(!isDark)} aria-label={`Toggle ${isDark ? 'Light' : 'Dark'} mode`}><DarkLightToggle size={30} isDark={isDark} /></IconButton></NavItem>
          </Nav>
        </Header>
      </CenterView>
    </FullBleed>
  )
}

SiteHeader.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  themeMode: PropTypes.string
}

export default SiteHeader
