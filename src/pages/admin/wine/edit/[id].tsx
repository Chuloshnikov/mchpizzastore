import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { useRouter } from 'next/router';
import axios from 'axios';
import WineForm from '../../../../components/WineForm';
import { getSession, useSession } from 'next-auth/react';

const EditWinePage = () => {
    const [wineInfo, setWineInfo] = useState(null);
    const { data: session } = useSession();
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
      if (!id) {
        return;
      }
      axios.get(`/api/winedata?id=${id}`).then(response => {
        setWineInfo(response.data);
      })
    }, [id])

  return (
    <AdminLayout>
        <h1 className='my-5 mx-auto text-2xl font-bold text-center'>Edit Wine</h1>
        {wineInfo && <WineForm {...wineInfo}/>}
        
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

export default EditWinePage;