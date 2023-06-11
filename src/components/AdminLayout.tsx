import React from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react";
import { MdDashboard }from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaClipboardList, FaSignOutAlt } from "react-icons/fa";

const AdminLayout = ({ children }) => {
  return (
    <div className='max-w-contentContainer mx-auto flex flex-col'>
        <div className='flex flex-col max-w-[300px] mx-auto'>
            <nav>
                <ul className='flex items-center justify-center gap-2 bg-yellow-400 mt-[5%] py-5 px-10'>
                    <li>
                        <Link href="/admin">
                            <MdDashboard/>
                        </Link>
                    </li>
                    <li>
                        <Link href="/adminpanel/products">
                            <FaClipboardList/>
                        </Link>
                    </li>
                    <li>
                        <Link href="/adminpanel/orders">
                            <AiOutlineUnorderedList/>
                        </Link>
                        </li>
                    <li>
                        <FaSignOutAlt onClick={() => signOut()}/>
                    </li>
                </ul>
            </nav>
        </div>
        <div className='bg-white flex-grow p-4'>
                {children}
        </div>
    </div>
  )
}

export default AdminLayout;