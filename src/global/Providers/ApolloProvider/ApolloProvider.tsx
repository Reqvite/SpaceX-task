import { ApolloClient, ApolloProvider as AppoloClientProvider,InMemoryCache } from '@apollo/client';
import {ReactNode} from 'react'

type ApolloProviderProps = {
    children: ReactNode
}

const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    cache: new InMemoryCache(),
});

export const ApolloProvider = ({children}: ApolloProviderProps) => {
    return (
        <AppoloClientProvider client={client}>
            {children}
        </AppoloClientProvider>
    )
}

