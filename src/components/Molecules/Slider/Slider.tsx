import { useState } from 'react';

import { Dot, DotsContainer, } from './Slider.styled';


type SliderProps<T extends { id: number | string }> = {
  onChange: (idx: number, slide: T) => void;
    slides: T[];
    dotcolor?: string;
      slidesPerRow: number;
};

export const Slider = <T extends { id: number | string }>({ slides, onChange, dotcolor, }: SliderProps<T>) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleDotClick = (index:number, slide: T) => {
        setCurrentSlide(index);
        onChange(index, slide)
    };

    return (
        <DotsContainer>
            {slides.map((slide, index) => (
                <Dot dotcolor={dotcolor} key={index} active={index === currentSlide} onClick={() => handleDotClick(index, slide)} />
            ))}
        </DotsContainer>
    );
};
