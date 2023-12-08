import { Link } from "react-router-dom";

import { theme } from "@/global";
import Delete from "@/shared/assets/icons/Delete.svg?react";
import Heart from "@/shared/assets/icons/Heart.svg?react";
import { useIsPage } from "@/shared/hooks/useIsPage";

import { Button } from "../Button/Button";

type LikeBtnProps = {
    isLink?: boolean;
    href?: string;
    onClick?: () => void;
    isFavorite?: boolean;
 }
export const LikeBtn = ({ isLink, href = '', onClick, isFavorite }: LikeBtnProps) => {
    const isFavorites = useIsPage('favorites')
    if (isLink) {
        return <Link to={href}>
            <Button iconBtn width={53} bg={isFavorites ? theme.colors.purpleColor : theme.colors.grayColor}><Heart fill={isFavorites ? theme.colors.whiteColor : theme.colors.blackColor}/></Button>
        </Link>
    }
    return (
        <Button iconBtn onClick={onClick} width={53} bg={theme.colors.grayColor}>{isFavorite ? <Delete fill={theme.colors.blackColor} stroke={theme.colors.blackColor} /> : <Heart fill={theme.colors.blackColor} />}</Button>
    )
}

