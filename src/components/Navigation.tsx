import {Link} from "react-router";
import {FaUserPlus} from "react-icons/fa";

import {BiLogIn} from "react-icons/bi";

export const Navigation=()=>{
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 ">
            <div className=" flex items-center flex-shrink-0 text-white mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                </svg>
                <span className="font-semibold text-xl tracking-tight text-white">Green Shadow</span>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                    id="menu-button">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:ml-12" id="menu">
                <div className="text-sm lg:flex-grow">
                    <Link to="/">
                        <a href="#responsive-header"
                           className="block mt-4 lg:inline-block text-lg lg:mt-0 bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                            DashBoard
                        </a>
                    </Link>
                    <Link to="/field">
                        <a href="#responsive-header"
                           className="block mt-4 lg:inline-block text-lg lg:mt-0 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Field
                        </a>
                    </Link>
                    <Link to="/staff">
                        <a href="#responsive-header"
                           className="block mt-4 lg:inline-block text-lg lg:mt-0 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Staff
                        </a>
                    </Link>
                    <Link to="/vehicle">
                        <a href="#responsive-header"
                           className="block mt-4 lg:inline-block text-lg lg:mt-0 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Vehicle
                        </a>
                    </Link>

                </div>
                <div>
                    <a
                        href="#"
                        className="inline-flex items-center text-sm px-6 py-2 mr-3 leading-none border rounded-lg text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0 space-x-2">
                        <span>Sign Up</span>
                        <FaUserPlus size={18}/>
                    </a>
                </div>
                <div>
                    <a
                        href="#"
                        className="inline-flex rounded-lg items-center text-sm px-6 py-2 leading-none border text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0 space-x-2">
                        <span>Sign In</span>
                        <BiLogIn   size={18}/>
                    </a>
                </div>
            </div>
        </nav>

    )
};
