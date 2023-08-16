import { ReactElement } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props{
   children: ReactElement,
}


const Layout = ({children}: Props) => {
  return (
    <div
    className="flex flex-col justify-between h-screen"
    >
      <Navbar/>
        <div>
          {children}
        </div>
      <Footer/>
    </div>
  )
}

export default Layout;