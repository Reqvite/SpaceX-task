import {useState} from 'react'

import { Slider } from "@/components/Molecules";
import ArrowDown from "@/shared/assets/icons/ArrowDown.svg?react";
import { heroImgs } from "@/shared/data/heroImgs";
import { useIsPage } from '@/shared/hooks/useIsPage';
import { heroImg } from '@/shared/types/types';

import { Anchor, BottomText, Box, Flex, LowerText, RelativeBox, StyledSection, Title, UpperText } from "./Banner.styled"

type HeroProps = {
    h?: number;
    title: string;
    desc?: string;
    bottomText?: string;
    withSlider?: boolean;
 }
export const Banner = ({ withSlider, title, desc, bottomText, h }: HeroProps) => {
    const isFavorites = useIsPage('favorites')

    const [photoSrc, setPhotoSrc] = useState<string>(isFavorites ? heroImgs[2].src : heroImgs[0].src);

    const onChangeSlide = (_: number, slider: heroImg) => {
        setPhotoSrc(slider.src)
    }
    return (
        <StyledSection src={photoSrc} h={h}>
            <RelativeBox>
                <Title><UpperText>{title}</UpperText>{desc && <LowerText>{desc}</LowerText>}</Title>
                {withSlider && <Box>
                    <Slider<heroImg> onChange={onChangeSlide} slides={heroImgs} />
                </Box>}
            </RelativeBox>
            {bottomText && <Flex><Anchor href="#list"><BottomText>{bottomText}</BottomText><ArrowDown/></Anchor></Flex>}
        </StyledSection>
    )
}

