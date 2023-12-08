import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { ApolloProvider } from '../ApolloProvider/ApolloProvider';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider'


type AppProvidersProps = {
    children: ReactNode
}
export const AppProviders = ({children}: AppProvidersProps) => {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <ApolloProvider>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </ApolloProvider>
            </RecoilRoot>
        </BrowserRouter>
    )
}

