import { useState } from 'react';

import { Button } from '@/components/Atoms';
import { Card } from '@/components/Molecules';
import { theme } from '@/global';
import ArrLeft from "@/shared/assets/icons/Arrow-Left.svg?react"
import ArrRight from "@/shared/assets/icons/Arrow-right.svg?react"
import { useFavorites } from '@/shared/hooks/useFavorites';
import { useIsPage } from '@/shared/hooks/useIsPage';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { favoriteType } from '@/shared/types/types';

import { BoxRelative, ButtonsBox, CardList, CardListContainer, CardTitle, Dot, Dotlist, TopBox } from './CardList.styled';


type CardsListProps = {
    title?: string;
    list: favoriteType[]
    onSecondaryButtonClick: (item: favoriteType) => void;
}

export const CardsList = ({ list, title, onSecondaryButtonClick }: CardsListProps) => {
    const { clearFavorites } = useFavorites()
    const isFavoritesPage = useIsPage('favorites')
    const cardsPerPage = 3;
    const totalSlides = Math.ceil(list.length / cardsPerPage);
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.bigScreen})`);

  
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : totalSlides - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide < totalSlides - 1 ? prevSlide + 1 : 0));
    };

    const handleDotClick = (index: number) => {
        setCurrentSlide(index);
    };

    list.length
    return (
        <CardListContainer id="list">
            {!list.length && <CardTitle>You dont add any favorites to your list.</CardTitle>}
            {list.length !== 0 && <BoxRelative>
                <TopBox>
                    {title && <CardTitle>{title}</CardTitle>}
                    <ButtonsBox style={{marginLeft: 'auto'}}>
                        {isFavoritesPage
                            ? <Button onClick={clearFavorites} width={44} height={44} bg={theme.colors.grayColor} clear={true}>Clear all</Button>
                            :
                            <>
                                {!isMobile && <><Button onClick={handlePrev} width={44} height={44} bg={theme.colors.grayColor}><ArrLeft /></Button>
                                    <Button onClick={handleNext} width={44} height={44} bg={theme.colors.grayColor}><ArrRight /></Button></>}
                             
                            </>}
                    </ButtonsBox>
                </TopBox>
                <div style={{ overflow: 'hidden' }}>
                    <CardList translateX={`-${currentSlide * (100 / totalSlides)}%`} width={totalSlides * 100}>
                        {list.map((item) => (
                            <Card onSecondaryButtonClick={onSecondaryButtonClick} key={item.id} {...item} />
                        ))}
                    </CardList>
                </div>
                {!isMobile && <Dotlist>
                    {Array.from({ length: totalSlides }, (_, index) => (
                        <Dot
                            key={index}
                            onClick={() => handleDotClick(index)}
                            isActive={index === currentSlide}
                        />
                    ))}
                </Dotlist>}
            </BoxRelative>}
        </CardListContainer>
    );
};
