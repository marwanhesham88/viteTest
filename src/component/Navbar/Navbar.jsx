import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
     <nav className="fixed top-0 left-0 right-0 flex flex-wrap items-center justify-between px-2 py-3 bg-[#2c3e50] mb-3 z-50">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to={"/viteTest/"}
            >
              Start Framework 
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white rounded-3"
                  to={"/about"}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white rounded-3"
                  to={"/portfolio"}
                >
                  portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white rounded-3"
                  to={"/contact"}
                >
                 contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
