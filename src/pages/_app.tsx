import Layout from '../components/Layout';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import  { store } from '../../redux/store';
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps }, }: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Provider>
    
  ) 
}
