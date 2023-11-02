import React, { useEffect } from 'react'
import './Navbar.css'
import odl_dark_logo from '../../images/odl_dark_logo.png'
import odl_light_logo from '../../images/odl_light_logo.png'
import { Link } from 'react-router-dom'

const Navbar = ({ theme, toggleTheme, rotation }) => {
  useEffect(() => {
    document.body.className = theme
  }, [theme])
  const textColor = theme === 'dark' ? 'text-white' : 'text-black'

  return (
    <div className=" container mx-auto navbar bg-base-100 justify-between py-5 sm:px-4 md:px-0 lg:px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72"
            >
              <li>
                <Link to="/about" className={textColor}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/governance" className={textColor}>
                  Governance
                </Link>
              </li>
              <li>
                <Link to="/user-stories" className={textColor}>
                  User Stories
                </Link>
              </li>
              <li tabIndex={0}>
                <details className="">
                  <summary className={textColor}>Solutions</summary>
                  <ul className="p-2 w-64">
                    <li>
                      <Link to="/platform-overview" className={textColor}>
                        Platform Overview
                      </Link>
                    </li>
                    <li>
                      <Link to="/cloud-nvf" className={textColor}>
                        Cloud and NFV
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/automated-service-delivery"
                        className={textColor}
                      >
                        Automated Delivery System
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/network-resource-optimization"
                        className={textColor}
                      >
                        Network Resource Optimization
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/get-started" className={textColor}>
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Link to="/">
            {theme === 'dark-theme' ? (
              <img
                src={odl_light_logo}
                alt="ODL Dark Logo"
                style={{ width: 200 }}
              />
            ) : (
              <img
                src={odl_dark_logo}
                alt="ODL Light Logo"
                style={{ width: 200 }}
              />
            )}
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden xl:flex ml-56">
        <ul className="menu menu-horizontal">
          <li>
            <Link to="/about" className={textColor}>
              About
            </Link>
          </li>
          <li>
            <Link to="/governance" className={textColor}>
              Governance
            </Link>
          </li>
          <li>
            <Link to="/user-stories" className={textColor}>
              User Stories
            </Link>
          </li>
          <li tabIndex={0}>
            <details className="">
              <summary className={textColor}>Solutions</summary>
              <ul className="p-2 w-72 z-20 text-xs">
                <li>
                  <Link to="/platform-overview" className={textColor}>
                    Platform Overview
                  </Link>
                </li>
                <li>
                  <Link to="/cloud-nvf" className={textColor}>
                    Cloud and NFV
                  </Link>
                </li>
                <li>
                  <Link to="/automated-service-delivery" className={textColor}>
                    Automated Delivery System
                  </Link>
                </li>
                <li>
                  <Link
                    to="/network-resource-optimization"
                    className={textColor}
                  >
                    Network Resource Optimization
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/get-started" className={textColor}>
              Get Started
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-center ">
        <button className="md:mr-4 xl:mr-0">
          <svg
            style={{
              width: 30,
              fill: theme === 'dark-theme' ? '#b4c3c3' : 'black',
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 0.7s ease',
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={toggleTheme}
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Navbar
