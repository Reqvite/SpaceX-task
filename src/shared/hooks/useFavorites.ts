import { useRecoilState } from 'recoil'

import { favoritesState } from '@/atoms/addToFavorites';
import { favoriteType } from '@/shared/types/types';

export const useFavorites = () => {
    const [favorites, setFavorites] = useRecoilState(favoritesState);
    const onFavoriteButtonClick = (newFavorite: favoriteType) => {

        const isLiked = favorites.find((favorite: favoriteType) => favorite.id === newFavorite.id);

        if (isLiked) {
            const updatedLikedCards = favorites.filter((favorite: favoriteType)  => favorite.id !== newFavorite.id);
            setFavorites(updatedLikedCards);
        } else {
            setFavorites([...favorites, newFavorite]);
        }
    }; 

    const clearFavorites = () => {
        setFavorites([])
    }

    return {favorites, onFavoriteButtonClick, clearFavorites}
}