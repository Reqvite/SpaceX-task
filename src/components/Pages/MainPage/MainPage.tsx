import { useQuery } from '@apollo/client'

import { Container } from '@/components/Atoms';
import { Banner } from '@/components/Orgonisms';
import { CardsList } from '@/components/Orgonisms/CardsList/CardsList';
import { heroImgs } from '@/shared/data/heroImgs';
import { GET_TOUR_LIST } from '@/shared/query/tourList';

const MainPage = () => {
    const { data, loading, error } = useQuery(GET_TOUR_LIST)
    const createDataWithPhoto = () => {
        const cardData = [];
        const totalCards = 9;
        for (let i = 0; i < totalCards; i++) {
            let imgIndex;
            if (i < 3) {
                imgIndex = i;
            } else if (i < 6) {
                const patternIndex = (i - 3) % 3;
                imgIndex = (patternIndex + 1) % 3;
            } else {
                const patternIndex = (i - 6) % 3;
                imgIndex = (patternIndex + 2) % 3;
            }
            const rocketIndex = i % data?.rockets.length;
            cardData.push({
                id: i + 1,
                src: heroImgs[imgIndex].src,
                alt: heroImgs[imgIndex].alt,
                rocket: data?.rockets[rocketIndex],
            });
        }
        return cardData;
    };

    const cardData = createDataWithPhoto();

    return (
        <>
            <Banner title='The space is waiting for' desc="You" bottomText='Explore tours'/>
            <Container>
                <CardsList list={cardData} title='Popular tours' />
            </Container>
        </>

    );
};

export default MainPage;
