import AdminEventsList from "@/components/admin/AdminEventsList";
import { getSession, useSession } from 'next-auth/react';


const Events = () => {
    const { data: session } = useSession();
    
  return (
    <div>
       <AdminEventsList/>
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

export default Events;