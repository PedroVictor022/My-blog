import { ChakraProvider } from '@chakra-ui/react'
import { PrismicProvider } from '@prismicio/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createRoot } from 'react-dom/client'
import { client } from './components/services/prismic'
import theme from './styles/theme'

const container = document.getElementById('root');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
  </ChakraProvider>
)
