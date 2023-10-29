import React, { useState } from 'react'
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
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="">
      {/* home-section */}
      <div className=" home md:flex content-center gap-14 sm:py-12 xl:pt-16 md:pb-20 xl:pb-36 xxl:pb-36 lg:mb-4 xl:mb-40 xxl:mb-44 sm:px-8 lg:px-10 xl:px-14 xxl:px-48 relative">
        <div className="container mx-auto home grid md:grid-cols-2">
          <div className="home-text lg:pt-2 xl:pt-8 align-middle">
            <h1 className="home-title sm:text-3xl lg:text-4xl xl:text-6xl xxl:text-7xl uppercase">
              Automating <span>networks of any</span> size & scale.
            </h1>
            <p className="home-text font-normal sm:text-base md:text-sm lg:text-base xl:text-xl xxl:text-3xl text-justify py-6 lg:pr-4">
              The OpenDaylight project is an open source platform for Software
              Defined Networking (SDN) that uses open protocols to provide
              centralized, programmatic control and network device monitoring.
            </p>
            <button
              className="learn-button rounded-full"
              href="https://www.opendaylight.org/"
            >
              Learn More
            </button>
          </div>
          <div className="hidden md:block img-box mx-auto">
            {theme === 'dark-theme' ? (
              <img className="map" src={map_dark} alt="ODL Dark Logo" />
            ) : (
              <img className="map" src={map_light} alt="ODL Light Logo" />
            )}
          </div>
        </div>
      </div>
      <hr className="md:hidden" />
      <div className="container mx-auto sm:px-8 md:px-0">
        {/* stats-box */}
        <div className="container mx-auto stats justify-between flex md:py-8 xl:py-16 px-5 rounded-xl absolute sm:hidden md:flex">
          <div className="stats-box ">
            <img className="stats-icon" src={release} alt="" srcset="" />
            <h3 className="stats-text xl:text-xl xxl:text-2xl">
              Release: 18 Argon
            </h3>
          </div>
          <div className="stats-box">
            <img className="stats-icon" src={commits} alt="" srcset="" />
            <h3 className="stats-text lg:text-base xl:text-xl xxl:text-2xl">
              Total Commits: 2.6K+
            </h3>
          </div>
          <div className="stats-box">
            <img className="stats-icon" src={committers} alt="" srcset="" />
            <h3 className="stats-text lg:text-base xl:text-xl xxl:text-2xl">
              Committers: 45
            </h3>
          </div>
        </div>
        {/* why opendaylight/functionality section */}
        <div className="function text-justify xl:my-4 xxl:my-12">
          <h3 className="function-text ">
            <center className="sm:my-10 md:mt-24 xl:my-28 sm:text-3xl xl:text-4xl">
              Why Opendaylight?
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
                  <h3>Flexibilty</h3>
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
      {/*Email Form*/}
      <div className="email-form py-16 lg:px-28 xl:px-52 xxl:px-80">
        <div className="container mx-auto sm:px-8 lg:px-0">
          <h3 className="email-heading sm:text-xl lg:text-2xl text-center mb-8">
            Stay Connected with the LF Networking Newsletter
          </h3>
          <div className="email-inputs">
            <form onSubmit={handleSubmit}>
              <div className="first-name mb-7">
                <h5 className="mb-2">First Name*</h5>
                <input
                  className="input-box"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="last-name mb-7">
                <h5 className="mb-2">Last Name*</h5>
                <input
                  className="input-box"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="last-name mb-7">
                <h5 className="mb-2">Company Email*</h5>
                <input
                  className="input-box"
                  type="email"
                  placeholder="Company Email"
                  required
                />
              </div>
              <div className="email-text ml-1 mb-7 ">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 mt-0.5 text-indigo-600"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label className="ml-2 email-text sm:text-xs xl:text-base">
                    In addition, I would like to receive marketing emails about
                    news, events, and training from The Linux Foundation and its
                    Projects. I understand that I can unsubscribe at any time.
                    <p className="mt-2">
                      By submitting this form, I acknowledge that my information
                      is subject to The Linux Foundation's Privacy Policy.
                    </p>
                  </label>
                </div>
              </div>
              <div className="email-buttons text-center">
                <button
                  className="learn-button rounded-full uppercase"
                  type="submit" // Specify the button type as "submit" to trigger form submission
                  href="https://www.opendaylight.org/"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
