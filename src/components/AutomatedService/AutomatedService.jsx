import React from 'react'
import banner_dark from '../../images/ODL_Dark_Banner.png'
import search_light from '../../images/search_light.png'
import search_dark from '../../images/search_dark.png'
import maze_light from '../../images/maze_light.png'
import maze_dark from '../../images/maze_dark.png'
import odl_light from '../../images/odl_light.png'
import odl_dark from '../../images/odl_dark.png'
import quote_light from '../../images/quote_light.png'
import quote_dark from '../../images/quote_dark.png'

const AutomatedService = ({ theme }) => {
  return (
    <div>
      <div className="banner">
        <h1 className="banner-text">Automated Service Delivery</h1>
        <img className="banner-image" src={banner_dark} alt="" />
      </div>
      <div className="container mx-auto">
        <div className="box sm:px-8 lg:px-10 xl:px-5 xxl:px-0">
          <div className="row pt-16 flex">
            <div className="column content-image pt-2">
              {theme === 'dark-theme' ? (
                <img
                  src={search_dark}
                  alt="Search Logo"
                  style={{ width: 300 }}
                />
              ) : (
                <img
                  src={search_light}
                  alt="Search Logo"
                  style={{ width: 300 }}
                />
              )}
            </div>
            <div className="column sm:pl-0 lg:pl-12 ">
              <h2 className="sm:text-3xl lg:text-4xl pb-3">Overview</h2>
              <div className="overview-text text-justify sm:text-sm xl:text-base">
                <p className="pb-3">
                  Telecom and over-the-top (OTT) content providers as well as
                  mainstream enterprises are under increasing competitive
                  pressure to deliver new services ever more quickly, in more
                  locations. Customer expectations, set by online consumer
                  experiences, necessitate a growing need to overhaul
                  operational and business models to avoid being left behind.
                </p>
                <p className="pb-3">
                  Conventional service delivery methods involving extensive
                  manual processes, disjoint configuration, provisioning,
                  service assurance systems, and hardware-centricity
                  significantly limit the speed for new service delivery and
                  innovation. Consequently, it has never been more important for
                  operators and enterprise IT groups to embrace the imminent
                  transformation catalyzed by SDN and NFV.
                </p>
                <p>
                  Open source SDN enables the vendor-independent and
                  hardware-independent network infrastructure essential towards
                  overhauling the service delivery lifecycle. Automation of
                  physical and virtual elements is essential to achieve
                  time-to-market advantages.
                </p>
              </div>
            </div>
          </div>
          <div className="row sm:pt-10 md:pt-8 lg:pt-16 flex">
            <div className="column content-image pt-2">
              {theme === 'dark-theme' ? (
                <img src={maze_dark} alt="Maze Logo" style={{ width: 300 }} />
              ) : (
                <img src={maze_light} alt="Maze Logo" style={{ width: 300 }} />
              )}
            </div>
            <div className="column sm:pl-0 lg:pl-12">
              <h2 className="sm:text-3xl lg:text-4xl pb-3">Challenges</h2>
              <div className="text-justify sm:text-sm xl:text-base">
                <p className="pb-1">
                  Most large organizations have large investments in existing
                  hardware from multiple vendors, customized back-end systems
                  that are expensive to radically change, well-established
                  processes along with specially trained operations staff, and a
                  culture that will take time to change. Yet a more flexible
                  approach to deploying and managing network services is
                  necessary–without forklifting their entire operations and
                  retraining their entire staff.
                </p>
              </div>
            </div>
          </div>
          <div className="row sm:pt-10 md:pt-8 lg:pt-16 flex">
            <div className="column content-image pt-2">
              {theme === 'dark-theme' ? (
                <img src={odl_dark} alt="odl Logo" style={{ width: 150 }} />
              ) : (
                <img src={odl_light} alt="odl Logo" style={{ width: 150 }} />
              )}
            </div>
            <div className="column sm:pl-0 lg:pl-12">
              <h2 className="sm:text-3xl lg:text-4xl pb-3">
                Why Opendaylight?
              </h2>
              <div className="text-justify sm:text-sm xl:text-base">
                <p className="pb-3">
                  OpenDaylight, through its broad commercial ecosystem, offers a
                  flexible and open SDN platform to enable automated service
                  delivery, including:
                </p>
                <ul className="list-disc pl-4 pb-3">
                  <li>
                    Model-Driven Service Abstraction Layer (MD-SAL), which
                    leverages industry standard YANG models to map network
                    applications to the underlying devices to readily support
                    hardware and technologies entrenched in the existing
                    network.
                  </li>
                  <li>
                    Modular southbound (i.e., Controller to Device) plug-ins
                    with extensive support for standard network management
                    interfaces, OpenFlow, and proprietary interfaces and
                    devices.
                  </li>
                  <li>
                    Intent-based Northbound (i.e., Network Application to
                    Controller) interfaces exposing SDN capabilities to diverse
                    network applications, while abstracting the underlying
                    infrastructure details.
                  </li>
                  <li>
                    Network virtualization along with flexible policy mechanisms
                    to achieve multi-tenancy in a multi-service environment.
                  </li>
                  <li>
                    Broad industry acceptance, including the largest open source
                    community for any controller
                  </li>
                </ul>
                <p>
                  By enabling IT organizations to mix and match network
                  applications and devices, OpenDaylight provides a powerful
                  platform to automate and operationalize intelligent service
                  delivery within existing environments.
                </p>
              </div>
            </div>
          </div>
          <div className="row sm:py-10 md:py-8 lg:py-16  flex">
            <div className="column content-image pt-2">
              {theme === 'dark-theme' ? (
                <img src={quote_dark} alt="quote Logo" style={{ width: 100 }} />
              ) : (
                <img
                  src={quote_light}
                  alt="quote Logo"
                  style={{ width: 100 }}
                />
              )}
            </div>
            <div className="column sm:pl-0 lg:pl-12">
              <h2 className="sm:text-3xl lg:text-4xl pb-3">Examples</h2>
              <div className="text-justify sm:text-sm xl:text-base">
                <p className="pb-1">
                  Major global operators have deployed OpenDaylight to automate
                  service delivery to improve agility, increase new revenues,
                  and reduce their operational costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AutomatedService
