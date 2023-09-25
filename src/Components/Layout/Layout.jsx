import { NavLink } from "react-router-dom";
import logo from '../../../public/images/Logo.png'

const Layout = () => {
  
        const links = <>
        <li><NavLink to='/'  className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-red-600 font-medium underline" : ""
      } >Home</NavLink></li>
        <li><NavLink to='/donation'  className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-red-600 font-medium underline" : ""
      } >Donation</NavLink></li>
        <li><NavLink to='/statistics'  className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-red-600 font-medium underline" : ""
      } >Statistics</NavLink></li>
        
        </>
    return (
        <div className=" sticky mt-5 container mx-auto">

        <div className="navbar  bg-transparent z-50 flex justify-between ">
              <div className="navbar-start gap-24 md:gap-[350px] lg:gap-0  ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="flex flex-col gap-6 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                          {links}
                        </ul>
                    </div>
                    <img src={logo} alt="" />
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-12 px-1">
                {links}
                </ul>
              </div>
        </div>

    </div>
    );
};

export default Layout;