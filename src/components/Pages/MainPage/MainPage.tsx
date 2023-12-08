import { useQuery } from '@apollo/client'

import { Container } from '@/components/Atoms';
import { Banner, CardsList } from '@/components/Orgonisms';
import { heroImgs } from '@/shared/data/heroImgs';
import { useFavorites } from '@/shared/hooks/useFavorites';
import { GET_TOUR_LIST } from '@/shared/query/tourList';

import { useMainPage } from './useMainPage';

const MainPage = () => {
    const { data } = useQuery(GET_TOUR_LIST)
    const { cardData } = useMainPage(data, heroImgs)
    const {onFavoriteButtonClick} = useFavorites()

    return (
        <>
            <Banner withSlider title='The space is waiting for' desc="You" bottomText='Explore tours'/>
            <Container>
                <CardsList list={cardData} title='Popular tours' onSecondaryButtonClick={onFavoriteButtonClick}/>
            </Container>
        </>

    );
};

export default MainPage;
