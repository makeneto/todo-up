import moment from 'moment'
import styled from 'styled-components'

const FooterStyled = styled.footer`
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
    padding: 1.2rem 0;

    & a {
        color: black;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`

export default function Footer() {
    const now = moment()
    const year = now.year()

    return (
        <FooterStyled>
            © {year}, <a href='https://makenedev.vercel.app' target='_self'> makenedev</a>
        </FooterStyled>
    )
}
