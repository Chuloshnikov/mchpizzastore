import AdminOrdersList from '@/components/AdminOrdersList';
import { getSession, useSession } from 'next-auth/react';


const Orders = () => {
  const { data: session } = useSession();


  return (
        <div>
            <AdminOrdersList/>
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

export default Orders;