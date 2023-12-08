import{ useState } from 'react';

import { Logo } from "@/components/Atoms";
import { Navigation, NavigationButtons } from "@/components/Molecules";
import { theme } from "@/global";
import { navbarLinks } from "@/shared/data/navbarLinks";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

import { BurgerIcon, BurgerMenu,StyledHeader } from "./Navbar.styled"; 

export const Navbar = () => {
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.tablet})`);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <StyledHeader>
            <Logo />
            {isMobile ? (
                <>
                    <BurgerIcon onClick={handleToggleMenu}>&#9776;</BurgerIcon>
                    {isMenuOpen && <BurgerMenu>
                        <Navigation links={navbarLinks} />
                        <NavigationButtons />
                    </BurgerMenu>}
                </>
            ) : (
                <>
                    <Navigation links={navbarLinks} />
                    <NavigationButtons />
                </>
            )}
        </StyledHeader>
    );
};