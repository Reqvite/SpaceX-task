import { Button, LikeBtn } from '@/components/Atoms';
import { useFavorites } from '@/shared/hooks/useFavorites';
import { favoriteType } from '@/shared/types/types';

import { Box, CardContainer, CardContent, CardDescription, CardImage, CardTitle } from './Card.styled';

type CardProps = {
    id: number | string;
    src: string;
    name: string;
    description: string;
    onSecondaryButtonClick: (item: favoriteType) => void;
 }
export const Card = ({ id, name, src, description, onSecondaryButtonClick }: CardProps) => {
    const { favorites } = useFavorites()
    const isFavorite = favorites.some((favorite: favoriteType) => favorite.id === id)
    return (
        <CardContainer>
            <CardImage src={src} alt="Tour Image" />
            <CardContent>
                <CardTitle>{name}</CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
                <Box>
                    <Button width={278}>
                Buy
                    </Button>
                    <LikeBtn onClick={() => onSecondaryButtonClick({ id, name, src, description })} isFavorite={isFavorite} />
                </Box>
            </CardContent>
        </CardContainer>
    )
}

