import React, {useState, useEffect }  from 'react';
import AdminLayout from './AdminLayout';
import axios from 'axios';
import Link from 'next/link';

const AdminEventsList = () => {
  return (
    <div>
        <AdminLayout>
            <div className='flex flex-col gap-3 h-screen mb-12'>
              <div className='flex items-center justify-center'>
                  <div className='flex flex-col items-center gap-3 max-w-[800px]'>
                      <h2 className='text-yellow-950 text-xl font-semibold'>Event management</h2>
                      <div>
                          <Link 
                          className='bg-yellow-400 text-white p-1 px-2 text-base font-semibold
                          hover:bg-yellow-500 duration-300'
                          href="/admin/event/new"
                          >
                              Add new event
                          </Link>
                      </div>
                  </div>
              </div>
            </div>
        </AdminLayout>
    </div>
  )
}

export default AdminEventsList