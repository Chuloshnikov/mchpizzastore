import AdminWineList from "../../components/admin/AdminWineList";
import { getSession, useSession } from 'next-auth/react';


const Wine = () => {
    const { data: session } = useSession();

    return (
        <div>
            <AdminWineList/>
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

export default Wine;
