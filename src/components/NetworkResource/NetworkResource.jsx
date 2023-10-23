import React from 'react'
import './NetworkResource.css'
import banner_dark from '../../images/ODL_Dark_Banner.png'
import search_light from '../../images/search_light.png'
import search_dark from '../../images/search_dark.png'
import maze_light from '../../images/maze_light.png'
import maze_dark from '../../images/maze_dark.png'
import odl_light from '../../images/odl_light.png'
import odl_dark from '../../images/odl_dark.png'
import quote_light from '../../images/quote_light.png'
import quote_dark from '../../images/quote_dark.png'
import cm_usecase_1 from '../../images/cm_usecase_1.png'
import ericsson_sdn from '../../images/ericsson_sdn.png'

const NetworkResource = ({ theme }) => {
  return (
    <div>
      <div className="banner">
        <h1 className="banner-text">Network Resources Optimization</h1>
        <img className="banner-image" src={banner_dark} alt="" />
      </div>
      <div className="container mx-auto">
        <div className="box sm:px-8 lg:px-10 xl:px-5 xxl:px-0">
          <div className="row sm:pt-10 lg:pt-16 flex">
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
            <div className="column sm:pl-0 lg:pl-12">
              <h2 className="sm:text-3xl lg:text-4xl pb-3">Overview</h2>
              <div className="overview-text text-justify sm:text-sm xl:text-base">
                <p className="pb-3">
                  Network infrastructure is being significantly challenged by a
                  strong traffic growth driven by mobile computing, streaming
                  video and audio, and the advent of cloud-based services.
                  Simply adding more hardware and increasing the teams that
                  manage it is often not an option. Enterprises and service
                  providers are under pressure from investors to do more with
                  less and, as a result, network operators have never been more
                  motivated to ensure the highest ROI from their network
                  investments.
                </p>
                <p className="pb-3">
                  Large Enterprises and service providers are turning to SDN to
                  improve the efficiency of their infrastructure and operations.
                  By centralizing control, and offering unprecedented
                  intelligence and openness, SDN can provide network operators
                  with the tools to optimize their infrastructure like never
                  before.
                </p>
              </div>
            </div>
          </div>
          <div className="row sm:pt-10 md:pt-8 lg:pt-16 flex">
            <div className="column content-image pt-2">
              {theme === 'dark-theme' ? (
                <img src={maze_dark} alt="Maze Logo" style={{ width: 310 }} />
              ) : (
                <img src={maze_light} alt="Maze Logo" style={{ width: 310 }} />
              )}
            </div>
            <div className="column sm:pl-0 lg:pl-12">
              <h2 className="sm:text-3xl lg:text-4xl pb-3">Challenges</h2>
              <div className="text-justify sm:text-sm xl:text-base">
                <p className="pb-3">
                  Improving and ultimately optimizing network performance
                  remains an ever-present challenge for networking. No matter
                  what the technology, where it is deployed and by whom, the
                  first rule of networking is that it is always about economics.
                </p>
                <p className="pb-3">
                  As line rates exponentially increase, both network
                  inefficiencies and the need for network optimization are
                  magnified. While bandwidth and latency are high priorities,
                  operators and their users also seek to optimize cost, network
                  resiliency and other QoS metrics across heterogeneous network
                  technologies and equipment. Network optimization proves to be
                  particularly important for the most expensive bandwidth,
                  including the WAN (for enterprise and cloud providers),
                  submarine networks, and transport networks (for carriers).
                </p>
                <p className="pb-3">
                  Few operators have the luxury to be able to start from
                  scratch. They have invested significant amounts of money in
                  their existing infrastructure and therefore need to evolve and
                  manage this over time while leveraging massive investments in
                  their networks. Viable Network Resource Optimization
                  solutions, therefore, need to allow operators to obtain more
                  out of their existing installation while adding new
                  innovations as they become available.
                </p>
                <p className="pb-3">
                  Strong Network Resource Optimization solutions should provide:
                </p>
                <ul className="list-disc pl-8 pb-3">
                  <li>
                    Ability to optimize on a range of parameters (bandwidth,
                    latency, cost, availability, etc.)
                  </li>
                  <li>
                    Ability to execute a range of optimization algorithms.
                  </li>
                  <li>
                    Robust topology and network state, including multi-layer
                    topology (for carrier networks).
                  </li>
                  <li>Support for diverse technologies and applications</li>
                  <li>
                    Policy enforcement & ability operate over multi-vendor
                    infrastructure including non-SDN-enabled hardware.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row sm:pt-10 md:pt-8 lg:pt-16 flex">
            <div className="column content-image pt-2">
              {theme === 'dark-theme' ? (
                <img src={odl_dark} alt="odl Logo" style={{ width: 380 }} />
              ) : (
                <img src={odl_light} alt="odl Logo" style={{ width: 380 }} />
              )}
            </div>
            <div className="column sm:pl-0 lg:pl-12">
              <h2 className="sm:text-3xl lg:text-4xl pb-3">
                Why Opendaylight?
              </h2>
              <div className="text-justify sm:text-sm xl:text-base">
                <p className="pb-3">
                  By maintaining network topology and configuration along with
                  fault and performance state, OpenDaylight provides a rich set
                  of basic and extended network services for Network Resource
                  Optimization (NRO). Large enterprise can benefit from NRO
                  algorithms that exploit OpenDaylight’s logically centralized
                  network state, analytics, and policy to achieve traffic
                  engineering across heterogeneous infrastructure. Carriers are
                  implementing multi-layer control for converged packet-optical
                  networks based on OpenDaylight that optimize bandwidth
                  utilization, protection bandwidth, and service placement in a
                  dynamic services environment.
                </p>
                <p className="pb-3">
                  OpenDaylight enables operators to realize the potential for
                  software-defined networks by providing an open SDN platform
                  with:
                </p>
                <ul className="list-disc pl-8 pb-3">
                  <li>
                    Model-Driven Service Abstraction Layer (MD-SAL) that
                    leverages industry standard YANG models to map network
                    applications to the underlying devices to readily support.
                    modular, plug-in southbound interface approach (i.e.,
                    Controller to Device) with extensive support for standard
                    network management interfaces (e.g. BGP, PCEP), OpenFlow,
                    and proprietary interfaces and devices.
                  </li>
                  <li>
                    Intent-based Northbound (i.e., Network Application to
                    Controller) interfaces exposing SDN capabilities to diverse
                    network applications, while abstracting the underlying
                    infrastructure details.
                  </li>
                  <li>
                    Readily supports proprietary and extended network services,
                    including path computation, resource management, analytics
                    for both virtual and physical domains.
                  </li>
                  <li>Multiple built-in mechanisms for policy enforcement.</li>
                  <li>
                    Broad industry acceptance, including the largest community
                    for any controller.
                  </li>
                  <li>
                    By enabling operators to mix and match network applications
                    and devices, OpenDaylight provides a powerful platform to
                    automate and operationalize intelligent service delivery,
                    while enabling operators to migrate to SDN at their own
                    pace.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row sm:pb-10 lg:py-16 flex">
            <div className="column content-image pt-2">
              {theme === 'dark-theme' ? (
                <img src={quote_dark} alt="quote Logo" style={{ width: 220 }} />
              ) : (
                <img
                  src={quote_light}
                  alt="quote Logo"
                  style={{ width: 220 }}
                />
              )}
            </div>
            <div className="column sm:pl-0 lg:pl-12">
              <h2 className="sm:text-3xl lg:text-4xl sm:py-5 lg:py-10">
                Examples | End Users
              </h2>
              <div className="">
                <div className="nro-boxes mx-auto flex mb-8 justify-between">
                  <div className="column lg:w-1/2 text-justify sm:text-sm xl:text-base align-middle">
                    <div className="column pb-6">
                      <h3 className="font-semibold sm:mb-3 lg:mb-0">
                        Tencent Data Center Interconnect (DCI)
                      </h3>
                      <p>
                        As a leading provider of Internet services in China,
                        Tencent operates in a highly competitive consumer space
                        where minimizing costs is critical, especially for the
                        WAN. Tencent developed an OpenDaylight-based controller
                        to optimize bandwidth utilization while improving
                        service delivery among its vast data centers.
                      </p>
                    </div>
                    <div className="column sm:mb-3 lg:mb-0">
                      <h3 className="text-2xl font-semibold pb-2">
                        China Mobile Novonet
                      </h3>
                      <p>
                        China Mobile is among the largest service providers in
                        the world. NovoNet represents the company’s network
                        vision for 2020 based on SDN and NFV. One key use case
                        is Traffic Optimization, encompassing
                        “self-provision(ing), self-management, smart traffic
                        scheduling, and real-time awareness.”
                      </p>
                    </div>
                  </div>
                  <div className="column lg:w-1/2 flex justify-center align-middle">
                    <img
                      src={cm_usecase_1}
                      className="usecase-image"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
                <div className="nro-boxes mx-auto flex mb-8 lg:justify-between xl:justify-between">
                  <div className="column lg:w-1/2 text-clip sm:text-sm xl:text-base align-middle">
                    <div className="column pb-6">
                      <h3 className="pb-6 text-clip font-semibold">
                        Multi-Layer Transport Controller Solutions
                      </h3>
                      <p className="text-justify">
                        One of the key SDN use cases for the telecommunications
                        industry is Transport-SDN, which is focused on
                        controlling the packet-optical infrastructure for Metro
                        and long-haul connectivity. A number of major OEMs have
                        developed Transport SDN controllers based on
                        OpenDaylight to control the multi-layer infrastructure.
                      </p>
                    </div>
                    <div className="column sm:mb-3 lg:mb-0">
                      <h3 className="text-2xl font-semibold pb-2">
                        Ericsson SDN Controller
                      </h3>
                      <p className="text-justify">
                        Ericsson’s Transport SDN product offers an end to end
                        abstracted view of network resources and topology,
                        optimizing resource allocation and network engineering
                        across the IP and Optical layers.”
                      </p>
                    </div>
                  </div>
                  <div className="column lg:w-1/2 ericsson-image flex justify-start align-middle">
                    <img src={ericsson_sdn} alt="" srcset="" />
                  </div>
                </div>
                <div className="nro-boxes mx-auto flex">
                  <div className="column text-justify sm:text-sm xl:text-base align-middle">
                    <div className="column pb-6">
                      <h3 className="pb-6 font-semibold">
                        Fujitsu Virtuora® NC Network Control and Management
                        Platform
                      </h3>
                      <p>
                        Built on an open-source platform, Virtuora NC provides a
                        framework for a collection of applications and
                        interfaces that enables the control and management
                        center of the virtual network.
                      </p>
                    </div>
                    <div className="column">
                      <h3 className="text-2xl font-semibold pb-2">
                        HPE ContextNet
                      </h3>
                      <p>
                        HPE ContexNet is an OpenDaylight-based carrier-grade
                        distributed SDN fabric that leverages proven
                        virtualization and grid-computing technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NetworkResource
