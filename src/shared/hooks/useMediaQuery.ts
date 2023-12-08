import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);

        const updateMatches = () => setMatches(mediaQueryList.matches);

        updateMatches();

        const mediaQueryListener = () => updateMatches();
        mediaQueryList.addEventListener('change', mediaQueryListener);

        return () => mediaQueryList.removeEventListener('change', mediaQueryListener);
    }, [query]);

    return matches;
}