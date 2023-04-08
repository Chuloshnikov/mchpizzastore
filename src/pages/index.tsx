import Head from 'next/head';
import { Inter } from 'next/font/google';
import Banner from '../components/Banner';
import PizzaList from '@/components/PizzaList';
import { Product } from '../../type';


interface Props {
  productData: Product
}

const inter = Inter({ subsets: ['latin'] })

export default function Home({ productData }: Props) {
  return (
    <>
      <Head>
        <title>MCH Pizza</title>
        <meta name="description" content="The best pizza in this corner of the Earch" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <div className='max-w-container mx-auto'>
            <Banner/>
            <PizzaList productData={productData}/>
          </div>
      </main>
    </>
  )
}

//------------------------------ DATA FETCHING--------------------------------------//

export const getServerSideProps = async () => {
  const productData = await (
      await fetch("http://localhost:3000/api/productdata")
      ).json();
      return {
        props: { productData },
      }
    };
