import { useLocation } from "react-router-dom"

export const useIsPage = (page: string) => {
    const { pathname } = useLocation()
    return pathname.includes(page)
} 