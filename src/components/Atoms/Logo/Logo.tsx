import { Link } from "react-router-dom";

import LogoSvg  from "@/shared/assets/icons/logo.svg?react";

export const Logo = () => {
    return (
        <Link to={'/'}>
            <LogoSvg width={229} height={229}/>
        </Link>
    )
}

