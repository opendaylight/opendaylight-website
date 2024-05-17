import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'
import map_light from '../../images/map_light.png'
import map_dark from '../../images/map_dark.png'
import release from '../../images/release.png'
import commits from '../../images/commits.png'
import committers from '../../images/committers.png'
import yourkit from '../../images/yourkit.png'
import icon_1 from '../../images/Icon_1.png'
import icon_2 from '../../images/Icon_2.png'
import icon_3 from '../../images/Icon_3.png'
import icon_4 from '../../images/Icon_4.png'
import icon_5 from '../../images/Icon_5.png'
import icon_6 from '../../images/Icon_6.png'

const Homepage = ({ theme }) => {
  return (
    <div className="">
      {/* home-section */}
      <div className="home md:flex content-center sm:py-12 xl:pt-16 md:pb-20 xl:pb-36 lg:mb-4 sm:px-8 md:px-14 lg:px-12 xl:px-14 xxl:px-16 relative">
        <div className="container mx-auto home gap-4 grid md:grid-cols-2 lg:pb-4 xl:pb-0">
          <div className="home-text lg:pt-2 xl:pt-0 xxxl:pt-5  justify-center">
            <h1 className="home-title sm:text-3xl lg:text-4xl xl:text-6xl xxl:text-7xl uppercase">
              Automating <span>networks of any</span> size & scale.
            </h1>
            <p className="home-text font-normal sm:text-base md:text-sm lg:text-base xl:text-xl xxl:text-2xl text-justify py-6 lg:pr-4">
              The OpenDaylight project is an open source platform for Software
              Defined Networking (SDN) that uses open protocols to provide
              centralized, programmatic control and network device monitoring.
            </p>
            <Link to="/about">
              <button className="learn-button rounded-full">Learn More</button>
            </Link>
          </div>
          <div className="hidden md:block img-box mx-auto">
            {theme === 'dark-theme' ? (
              <img className="map" src={map_dark} alt="ODL Dark Logo" />
            ) : (
              <img className="map" src={map_light} alt="ODL Light Logo" />
            )}
          </div>
        </div>
        {/* stats-box */}
        <div className="container mx-auto stats justify-between flex md:py-8 xl:py-16 px-5 rounded-xl sm:hidden md:flex absolute">
          <div className="stats-box ">
            <img className="stats-icon" src={release} alt="" srcset="" />
            <h3 className="stats-text sm:text-sm lg:text-base xl:text-xl xxl:text-2xl">
              Release: 20 Calcium
            </h3>
          </div>
          <div className="stats-box">
            <img className="stats-icon" src={commits} alt="" srcset="" />
            <h3 className="stats-text sm:text-sm lg:text-base xl:text-xl xxl:text-2xl">
              Total Commits: 2,559
            </h3>
          </div>
          <div className="stats-box">
            <img className="stats-icon" src={committers} alt="" srcset="" />
            <h3 className="stats-text sm:text-sm lg:text-base xl:text-xl xxl:text-2xl">
              Committers: 25
            </h3>
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-8 md:px-0">
        {/* why opendaylight/functionality section */}
        <div className="function text-justify xl:my-4 xxl:my-12">
          <h3 className="function-text ">
            <center className="sm:my-10 md:mt-24 xl:my-28 sm:text-3xl xl:text-4xl">
              Why OpenDaylight?
            </center>
          </h3>
          <div className="grid sm:grid-rows-1 md:grid-rows-2 sm:py-10 xl:py-0 lg:px-10">
            <div className="functionality-row grid sm:grid-cols-1 md:grid-cols-3 sm:gap-16 md:gap-8 xl:gap-14 xxl:gap-16 mb-16 md:px-10 lg:px-0">
              <div className="flexibility">
                <div className="functionality-title">
                  <img
                    src={icon_1}
                    alt=""
                    className="functionality-image md:mb-5"
                  />
                  <h3>Flexibility</h3>
                </div>
                <p className="functionality-body sm:text-sm md:text-xs xl:text-sm xxl:text-base">
                  OpenDaylight offers a flexible and modular architecture,
                  allowing users to customize its capabilities to suit their
                  specific networking needs, making it a cost-effective choice
                  for businessess.
                </p>
              </div>
              <div className="Open Source">
                <div className="functionality-title">
                  <img
                    src={icon_2}
                    alt=""
                    className="functionality-image md:mb-5"
                  />
                  <h3>Open Source</h3>
                </div>
                <p className="functionality-body sm:text-sm md:text-xs xl:text-sm xxl:text-base">
                  Being an open-source platform, OpenDaylight fosters
                  collaboration and innovation among a diverse community of
                  developers, resulting in frequent updates, bug fixes, and new
                  features.
                </p>
              </div>
              <div className="Vendor Neutrality">
                <div className="functionality-title">
                  <img
                    src={icon_3}
                    alt=""
                    className="functionality-image md:mb-5"
                  />
                  <h3>Vendor Neutrality</h3>
                </div>
                <p className="functionality-body sm:text-sm md:text-xs xl:text-sm xxl:text-base">
                  OpenDaylight is vendor-agnostic, supporting diverse networking
                  devices and technologies, enabling users to avoid vendor
                  lock-in and choose optimal solutions for their network
                  environment.
                </p>
              </div>
            </div>
            <div className="functionality-row grid sm:grid-cols-1 md:grid-cols-3 sm:gap-16 md:gap-8 xl:gap-14 xxl:gap-16 md:px-8 lg:px-0">
              <div className=" Comprehensive Feature">
                <div className="functionality-title">
                  <img
                    src={icon_4}
                    alt=""
                    className="functionality-image md:mb-5"
                  />
                  <h3 className="sm:text-start">Features</h3>
                </div>
                <p className="functionality-body sm:text-sm md:text-xs xl:text-sm xxl:text-base">
                  OpenDaylight provides a rich set of features, including
                  network virtualization, SDN, network automation, traffic
                  engineering, and more, enabling users to build advanced
                  networking solutions.
                </p>
              </div>
              <div className="Scalability">
                <div className="functionality-title">
                  <img
                    src={icon_5}
                    alt=""
                    className="functionality-image md:mb-5"
                  />
                  <h3>Scalability</h3>
                </div>
                <p className="functionality-body sm:text-sm md:text-xs xl:text-sm xxl:text-base">
                  OpenDaylight is engineered for seamless scalability, catering
                  to networks spanning diverse sizes and complexities – from
                  modest enterprise setups to extensive service provider
                  infrastructures.
                </p>
              </div>
              <div className="Community Support">
                <div className="functionality-title">
                  <img
                    src={icon_6}
                    alt=""
                    className="functionality-image md:mb-5"
                  />
                  <h3>Community Support</h3>
                </div>
                <p className="functionality-body sm:text-sm md:text-xs xl:text-sm xxl:text-base">
                  OpenDaylight has a vibrant and active community that provides
                  support, resources, and collaboration opportunities to users.
                  This community-driven approach ensures that users can get
                  assistance easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="community flex flex-col justify-center items-center sm:px-6 lg:px-0 sm:py-6 md:py-2 xl:py-12 align-bottom">
        <h3 className="community-text sm:text-lg md:text-base lg:text-xl xl:text-2xl sm:text-center mt-10">
          OpenDaylight would like to thank the following project for supporting
          the community
        </h3>
        <img className="community-image" src={yourkit} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Homepage
