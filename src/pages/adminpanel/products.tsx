import AdminLayout from '@/components/AdminLayout';
import React from 'react';
import { useSession, getSession, signIn, signOut } from "next-auth/react";

export default function Products() {

    const {data: session } = useSession();

  return (
    <>
        <AdminLayout>
            products
        </AdminLayout>
    </>
  )
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
  
    if(!session) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
  
    return {
      props: { session }
    } 
  }