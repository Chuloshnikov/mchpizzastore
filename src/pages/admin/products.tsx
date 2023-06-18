import AdminProductsList from "../../components/admin/AdminProductsList";
import { getSession, useSession } from 'next-auth/react';


const Products = () => {
    const { data: session } = useSession();

    return (
        <div>
            <AdminProductsList/>
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

export default Products;