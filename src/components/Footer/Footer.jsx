import React from 'react'
import { Link } from 'react-router-dom'
import odl_light_logo from '../../images/odl_light_logo.png'
import odl_dark_logo from '../../images/odl_dark_logo.png'
import './Footer.css'

const Footer = ({ theme }) => {
  return (
    <div>
      <hr />
      <div className="container sm:px-10 xl:px-0 test mx-auto">
        <div className="footer">
          <div className="footer-content">
            <div className="pb-3">
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
            <p className="footer-text md:text-xs lg:text-base">
              OpenDaylight (ODL) is a modular open platform for customizing and
              automating networks of any size and scale. There’s no better way
              to help drive forward the field of networking than to join the
              OpenDaylight developer community.
            </p>
          </div>
          <div className="resources">
            <ul>
              <span>
                <p className="heading"> Resources</p>
              </span>
              <li>
                <Link to="/about" target="_blank" rel="noopener noreferrer">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/user-stories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <a
                  href="https://docs.opendaylight.org/en/latest/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentations
                </a>
              </li>
            </ul>
          </div>
          <div className="links">
            <ul>
              <span>
                <p className="heading">Links</p>
              </span>
              <li>
                <a
                  href="https://git.opendaylight.org/gerrit/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gerrit
                </a>
              </li>
              <li>
                {' '}
                <a
                  href="https://www.linkedin.com/company/lfnetworking/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <hr />
        <p className="sm:text-xs lg:text-base py-2">
          Copyright © 2023 OpenDaylight Project © 2023 The Linux Foundation®.
          All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
