import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '../ApolloProvider/ApolloProvider';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider'


type AppProvidersProps = {
    children: ReactNode
}
export const AppProviders = ({children}: AppProvidersProps) => {
    return (
        <BrowserRouter>
            <ApolloProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </ApolloProvider>
        </BrowserRouter>
    )
}

