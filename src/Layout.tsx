
import {Outlet} from "react-router";
import {Footer} from "@/Footer.tsx";
import {Header} from "@/components/Header.tsx";


function Layout() {

  return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
         <Header/>
          <main className='flex-1 container mx-auto px-6 pt-24'>

              <Outlet/>
          </main>
          <Footer/>
      </div>
  )
}

export default Layout
