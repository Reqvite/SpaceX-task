import { ReactNode } from 'react'
import { ThemeProvider } from '../ThemeProvider/ThemeProvider'

type AppProvidersProps = {
    children: ReactNode
}
export const AppProviders = ({children}: AppProvidersProps) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

