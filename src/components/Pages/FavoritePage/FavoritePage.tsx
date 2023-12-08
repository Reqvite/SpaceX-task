
import { Container } from '@/components/Atoms';
import { Banner, CardsList } from '@/components/Orgonisms';
import { useFavorites } from '@/shared/hooks/useFavorites';

const FavoritePage = () => {
    const { favorites, onFavoriteButtonClick } = useFavorites()
    
    return (
        <>
            <Banner title='Favorites' h={440}/>
            <Container>
                <CardsList list={favorites}  onSecondaryButtonClick={onFavoriteButtonClick}/>
            </Container>
        </>
    );
};

export default FavoritePage;
