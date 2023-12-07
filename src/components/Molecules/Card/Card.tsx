
import { Button, LikeBtn } from '@/components/Atoms';

import { Box, CardContainer, CardContent, CardDescription, CardImage, CardTitle } from './Card.styled';

type CardProps = {
    src: string;
    name: string;
    description: string;
 }
export const Card = ({name, src, description}: CardProps) => {
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
                    <LikeBtn/>
                </Box>
            </CardContent>
        </CardContainer>
    )
}

