import { ReactNode } from 'react'
import { ThemeProvider as ThemeProviderStyled} from 'styled-components'
import { theme } from '../../styles/theme'

type ThemeProviderProps = {
    children: ReactNode
}
export const ThemeProvider = ({children}: ThemeProviderProps) => {
  return (
    <ThemeProviderStyled theme={theme}>
      {children}
    </ThemeProviderStyled>
  )
}

