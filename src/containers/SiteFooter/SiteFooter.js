import styled from 'styled-components'

const Footer = styled.footer`
  color: #8e8e8e;
  font-size: 0.8rem;
  padding: 2rem 0;
  text-align: center;
`

const SiteFooter = () => {
  const year = new Date().getFullYear()
  return <Footer>&copy; {year} Catagram Ltd.</Footer>
}

export default SiteFooter
