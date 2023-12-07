import {Logo } from "@/components/Atoms";
import { Navigation, NavigationButtons } from "@/components/Molecules";
import { navbarLinks } from "@/shared/data/navbarLinks";

import { StyledHeader } from "./Navbar.styled";

// Example usage of the StyledHeader component
export const Navbar = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Navigation links={navbarLinks} />
            <NavigationButtons/>
        </StyledHeader>
    );
};
