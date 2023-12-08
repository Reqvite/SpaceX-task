
import { AppLink } from '@/components/Atoms'
import { navbarLinkType } from '@/shared/types/types'

import { StyledNav, StyledNavUl } from './Navigation.styled'

type NavigationProps = {
    links: navbarLinkType[]
}

export const Navigation = ({ links }: NavigationProps) => {
    return (
        <StyledNav >
            <StyledNavUl>
                {links.map((link, idx) =>
                    <li key={idx}>
                        <AppLink to={link.href}>
                            {link.title}
                        </AppLink>
                    </li>)}
            </StyledNavUl>
        </StyledNav>
    )
}

