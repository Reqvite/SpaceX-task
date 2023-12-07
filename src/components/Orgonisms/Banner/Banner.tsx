import {useState} from 'react'

import { Slider } from "@/components/Molecules";
import ArrowDown from "@/shared/assets/icons/ArrowDown.svg?react";
import { heroImgs } from "@/shared/data/heroImgs";
import { heroImg } from '@/shared/types/types';

import { BottomText, Box, Flex, LowerText, RelativeBox, StyledSection, Title, UpperText } from "./Banner.styled"

type HeroProps = {
    title: string;
    desc?: string;
    bottomText?: string;
 }
export const Banner = ({ title, desc, bottomText }: HeroProps) => {
    const [photoSrc, setPhotoSrc] = useState<string>(heroImgs[0].src);

    const onChangeSlide = (_: number, slider: heroImg) => {
        setPhotoSrc(slider.src)
    }
    return (
        <StyledSection src={photoSrc}>
            <RelativeBox>
                <Title><UpperText>{title}</UpperText>{desc && <LowerText>{desc}</LowerText>}</Title>
                <Box>
                    <Slider<heroImg> onChange={onChangeSlide} slides={heroImgs} />
                </Box>
            </RelativeBox>
            {bottomText && <Flex><BottomText>{bottomText}</BottomText><ArrowDown/></Flex>}
        </StyledSection>
    )
}

