import { heroImg, rocketsType } from "@/shared/types/types";

export const useMainPage = (data: rocketsType, heroImgs: heroImg[]) => {
    const createDataWithPhoto = () => {
        const cardData = [];
        const totalCards = data?.rockets.length;

        for (let i = 0; i < totalCards; i++) {
            let imgIndex;

            if (i < 3) {
                imgIndex = i;
            } else {
                const patternIndex = (i - 3) % 3;
                imgIndex = (patternIndex + 1) % 3;
            }

            const rocketIndex = i % data?.rockets.length;

            cardData.push({
                id: i + 1,
                src: heroImgs[imgIndex].src,
                alt: heroImgs[imgIndex].alt,
                description: data?.rockets[rocketIndex].description,
                name: data?.rockets[rocketIndex].name,
            });
        }

        return cardData;
    };

    const cardData = createDataWithPhoto();

    return { cardData };
};