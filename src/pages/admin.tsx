import React, { useState } from 'react';
import { useSession, signIn } from "next-auth/react";
import AdminLayout from '@/components/AdminLayout';
import AdminDashboard from '@/components/AdminDashboard';

const Admin = () => {
  const [username, setUserName] = useState<String>();
  const [password, setPassword] = useState<String>();
  
  const {data: session } = useSession();
  console.log(session);


  const handleSubmit = (e) => {
    e.preventDefault()
    signIn('credentials', { username, password});
}
    
  if (!session) {
    return (
      <div className='flex h-[500px] items-center'>
      <div className='flex flex-col items-center text-center w-full'>
          <div className='border p-5 shadow-containerShadow'>
              <h2 className='text-yellow-950 text-bold text-2xl mb-2'>Admin Panel</h2>
              <form onSubmit={handleSubmit} className='flex flex-col gap-2'>  
              <input 
              onChange={e => setUserName(e.target.value)}
              value={username}
              type="text"
              name="username" 
              placeholder='Enter your username...'
              required
              />
              <input
              onChange={e => setPassword(e.target.value)}
              value={password}
              type="password" 
              name="password"
              placeholder='Enter your password...'
              required
              />
              <button 
                  type="submit"
                  className='bg-yellow-400 text-white p-1 px-2 text-base font-semibold
                      hover:bg-yellow-500 duration-300
                      '>
                      Login
              </button>
              </form>
          </div>
      </div>
  </div>
    )
  }

  return (
    <div className='bg-white flex max-w-contentContainer mx-auto'>
        <AdminLayout>
            <AdminDashboard/>
        </AdminLayout>
    </div>
  )
}

export default Admin;