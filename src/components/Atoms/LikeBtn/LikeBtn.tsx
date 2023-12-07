import { theme } from "@/global";
import Heart from "@/shared/assets/icons/Heart.svg?react";

import { Button } from "../Button/Button";

export const LikeBtn = () => {
    return (
        <Button width={53} bg={theme.colors.grayColor}><Heart/></Button>
    )
}

