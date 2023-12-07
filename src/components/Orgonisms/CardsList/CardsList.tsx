import { useState } from 'react';

import { Button } from '@/components/Atoms';
import { Card } from '@/components/Molecules';
import { theme } from '@/global';
import ArrLeft from "@/shared/assets/icons/Arrow-Left.svg?react"
import ArrRight from "@/shared/assets/icons/Arrow-right.svg?react"

import { BoxRelative, ButtonsBox, CardList, CardListContainer, CardTitle, Dot, Dotlist, TopBox } from './CardList.styled';


type CardsListProps = {
    title?: string;
    list: any[]
}

export const CardsList = ({ list, title }: CardsListProps) => {
    const cardsPerPage = 3;
    const totalSlides = Math.ceil(list.length / cardsPerPage);
  
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

    return (
        <CardListContainer>
            <BoxRelative>
                <TopBox>
                    {title && <CardTitle>{title}</CardTitle>}
                    <ButtonsBox>
                        <Button onClick={handlePrev}  width={44} height={44} bg={theme.colors.grayColor}><ArrLeft /></Button>
                        <Button  onClick={handleNext} width={44} height={44} bg={theme.colors.grayColor}><ArrRight/></Button>
                    </ButtonsBox>
                </TopBox>
                <div style={{ overflow: 'hidden' }}>
                    <CardList translateX={`-${currentSlide * (100 / totalSlides)}%`} width={totalSlides * 100}>
                        {list.map((item) => (
                            <Card key={item.id} {...item.rocket} src={item.src} />
                        ))}
                    </CardList>
                </div>
                <Dotlist>
                    {Array.from({ length: totalSlides }, (_, index) => (
                        <Dot
                            key={index}
                            onClick={() => handleDotClick(index)}
                            isActive={index === currentSlide}
                        />
                    ))}
                </Dotlist>
            </BoxRelative>
        </CardListContainer>
    );
};
