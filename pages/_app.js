import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

function MyApp({ Component, pageProps: { ...pageProps} }) {

  return (
      <ChakraProvider>
        <Head>
          <title>Dashboard</title>
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp;