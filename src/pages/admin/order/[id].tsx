import OrderCardPage from '@/components/admin/OrderCardPage';
import { useRouter } from 'next/router';
import { getSession, useSession } from 'next-auth/react';

const OrderCard = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const {id} = router.query;

  return (
    <div className='max-w-contentContainer mx-auto text-center'>
        <OrderCardPage id={id}/>
    </div>
  )
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
  
    if(!session) {
      return {
        redirect: {
          destination: '/admin',
          permanent: false
        }
      }
    }
  
    return {
      props: { session }
    } 
  }

export default OrderCard;