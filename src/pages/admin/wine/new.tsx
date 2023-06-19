import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout'
import WineForm from '@/components/WineForm';
import { getSession, useSession } from 'next-auth/react';


export default function NewWine() {
  const { data: session } = useSession();

  return (
    <AdminLayout>
        <div className='max-w-contentContainer'>
          <div className='flex justify-center items-center'>
            <h2 className='text-yellow-950 mb-5 text-xl font-bold'>New Wine</h2>
          </div>
           <WineForm/>
        </div>
    </AdminLayout>
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