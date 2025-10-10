
import {Outlet} from "react-router";
import {Footer} from "@/Footer.tsx";
import {Header} from "@/components/Header.tsx";


<<<<<<< HEAD


function Layout() {

  return (
      <div className=" flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">

          <Header/>
          <main className='flex-1 container mx-auto px-6 pt-24'>
              <Outlet/>
          </main>
          <Footer/>

      </div>

=======
function Layout() {

  return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
         <Header/>
          <main className='flex-1 container mx-auto px-6 pt-24'>

              <Outlet/>
          </main>
          <Footer/>
      </div>
>>>>>>> fa44b3a7a0c3a5e4d7ad0881da17935bc906ae66
  )
}

export default Layout
