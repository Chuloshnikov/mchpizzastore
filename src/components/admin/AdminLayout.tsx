import React from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react";
import { MdDashboard }from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { BsFillBalloonFill } from "react-icons/bs";
import { MdWineBar } from "react-icons/md";

const AdminLayout = ({ children } :any ) => {
  return (
    <div className='max-w-contentContainer mx-auto flex flex-col'>
        <div className='flex flex-col max-w-[300px] mx-auto'>
            <nav>
                <ul className='flex items-center justify-center gap-2 bg-yellow-400 text-yellow-950 mt-[5%] py-5 px-10'>
                    <li>
                        <Link href="/admin">
                            <MdDashboard className='hover:text-white duration-200'/>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/products">
                            <FaClipboardList className='hover:text-white duration-200'/>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/wine">
                            <MdWineBar className='hover:text-white w-5 h-5 duration-200'/>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/orders">
                            <AiOutlineUnorderedList className='hover:text-white duration-200'/>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/events">
                            <BsFillBalloonFill className='hover:text-white duration-200'/>
                        </Link>
                    </li>
                    <li>
                        <FaSignOutAlt onClick={() => signOut()} className='hover:text-white duration-200'/>
                    </li>
                </ul>
            </nav>
        </div>
        <div className='bg-white flex-grow p-4 mb-12'>
                {children}
        </div>
    </div>
  )
}

export default AdminLayout;