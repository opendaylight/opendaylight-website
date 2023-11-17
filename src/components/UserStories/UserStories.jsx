import React from 'react'
import './UserStories.css'
import odl_usecase from '../../images/odl_usecase.png'
import quote_icon from '../../images/quote_icon.png'
import asd_icon from '../../images/asd_icon.png'
import nro_icon from '../../images/nro_icon.png'
import nfv_icon from '../../images/nfv_icon.png'
import platform_icon from '../../images/platform_icon.png'
import { Link } from 'react-router-dom'

const success = [
  {
    image: asd_icon,
    title: 'Automated Service Delivery',
    description:
      'Open source SDN and automation to accelerate service delivery.',
    link: '/automated-service-delivery',
  },
  {
    image: nro_icon,
    title: ' Network Resources Optimization',
    description: 'Dynamically optimizing the network based on load and state.',
    link: '/network-resource-optimization',
  },
  {
    image: nfv_icon,
    title: 'Cloud and NFV',
    description:
      'Providing on-demand services that may be controlled by the end user or service provider environment.',
    link: '/cloud-nvf',
  },
  {
    image: platform_icon,
    title: 'Platform Overview',
    description:
      'Centralized administration of the network and multiple controllers. This is sometimes used as a precursor to NRO.',
    link: '/platform-overview',
  },
]

const UserStories = () => {
  return (
    <div>
      {/* user-stories section */}
      <div className="user-stories mx-auto user flex content-center xl:gap-0 xxl:gap-2 sm:pt-5 lg:pt-10 xl:pt-16 xxl:pt-28 sm:pb-10 lg:pb-20 xl:pb-24 xxl:pb-36 xl:mb-8 xxl:mb-16 sm:px-6 lg:px-8 xl:px-14 xxl:px-48 ">
        <div className="user-text container mx-auto grid md:grid-cols-3 lg:px-4">
          <div className="user-text align-middle col-span-2">
            <h1 className="user-title sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl xxxl:text-8xl capitalize mb-2">
              Utilize usecases <span className="block">that grow your</span>{' '}
              business.
            </h1>
            <p className="user-text font-normal sm:text-sm lg:text-base xl:text-xl xxl:text-2xl xxxl:text-3xl text-justify py-6 pr-4 sm:w-100 md:w-11/12">
              OpenDaylight was designed to be a broad, general-purpose platform
              to support a wide range of use cases–including ones that haven’t
              been invented yet. ODL delivers the benefits of SDN and NFV to
              carriers, enterprises, research institutions and businesses.
            </p>
          </div>
          <div className="odl-image flex md:justify-end xl:justify-center xxl:justify-end xxxl:justify-center items-center col-span-1">
            <img className="odl-logo" src={odl_usecase} alt="ODL Dark Logo" />
          </div>
        </div>
      </div>
      {/* success section hidden for smaller screen */}
      <div className="sm:hidden lg:block xxxl:hidden success section lg:pt-12 xl:pt-16 lg:my-16 xl:my-28">
        <div className="success-background xxl:py-32 flex justify-end relative">
          <div className="align-middle blue-box relative"></div>
          <div className="success-box absolute align-middle py-28 px-14 ">
            <p className="success-text lg:text-3xl xl:text-3xl xxl:text-5xl font-medium">
              How we can help you succeed!
            </p>
          </div>
          <div className="success-cards ">
            <div className="asd-card px-3 py-1 rounded-3xl border shadow-xl lg:w-1/4 xl:w-80 xxl:w-1/5 absolute">
              <div className="flex flex-col items-center rounded-3xl text-center justify-center lg:p-6 xxl:p-10">
                <img className="mb-5 card-image" src={asd_icon} alt="" />
                <h3 className="mb-5 lg:text-lg xl:text-xl xxl:text-2xl">
                  Automated Service Delivery
                </h3>
                <p className="mb-5 lg:text-sm xxl:text-base">
                  Open source SDN and automation to accelerate service delivery.
                </p>
                <Link
                  className="read-more"
                  to="/automated-service-delivery"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="nro-card px-2 rounded-3xl border shadow-xl lg:w-1/4 xl:w-80 xxl:w-1/5 absolute">
              <div className="flex flex-col items-center rounded-3xl text-center justify-center lg:p-6 xxl:p-10">
                <img className="mb-5 card-image" src={nro_icon} alt="" />
                <h3 className="mb-5 lg:text-lg xl:text-xl xxl:text-2xl">
                  Network Resources Optimization (NRO){' '}
                </h3>
                <p className="mb-5 lg:text-sm xxl:text-base">
                  Dynamically optimizing the network based on load and state.
                </p>
                <Link
                  className="read-more"
                  to="/network-resource-optimization"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="nfv-card px-2 rounded-3xl border shadow-xl lg:w-1/4 xl:w-80 xxl:w-1/5 absolute">
              <div className="flex flex-col items-center rounded-3xl text-center justify-center lg:p-6 xxl:p-10">
                <img className="mb-5 card-image" src={nfv_icon} alt="" />
                <h3 className="mb-5 lg:text-lg xl:text-xl xxl:text-2xl">
                  Cloud and NFV
                </h3>
                <p className="mb-5 lg:text-sm xxl:text-base">
                  Providing on-demand services that may be controlled by the end
                  user or service provider environment.
                </p>
                <Link
                  className="read-more"
                  to="/cloud-nvf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="visibility-card px-2 rounded-3xl border shadow-xl lg:w-1/4 xl:w-80 xxl:w-1/5 absolute">
              <div className="flex flex-col items-center rounded-3xl text-center justify-center lg:p-6 xxl:p-10">
                <img className="mb-5 card-image" src={platform_icon} alt="" />
                <h3 className="mb-5  lg:text-lg xl:text-xl xxl:text-2xl">
                  Platform Overview
                </h3>
                <p className="mb-5 lg:text-sm xxl:text-base">
                  Centralized administration of the network and multiple
                  controllers. This is sometimes used as a precursor to NRO.
                </p>
                <Link
                  className="read-more"
                  to="/platform-overview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* success section shown only for smaller screen */}
      <div className="container mx-auto sm:block lg:hidden xxxl:block small-success my-10 px-6 text-center">
        <h3 className="mb-9">How we can help you succeed!</h3>
        <div className="grid sm:grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 align-middle">
          {/* Using map so that new card automatically get's created when new person is added. */}
          {success.map((value, index) => (
            <div className="cards-box sm:py-2 sm:px-4 md:py-4 md:px-6 rounded-lg shadow-xl flex-col">
              <div className="cards persons-images my-auto flex justify-center">
                <img
                  src={value.image}
                  alt={`Person ${index}`}
                  className="sm:w-20 xxxl:w-28 rounded-full mt-6"
                />
              </div>
              <div className="cards my-4">
                <h3 className="sm:text-lg md:text-base lg:text-2xl xxxl:text-4xl mb-3">
                  {value.title}
                </h3>
                <p className="text-center text-sm xxxl:text-xl mb-5">
                  {value.description}
                </p>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to={value.link}
                  className="read-more xxxl:text-2xl"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* testimonial section */}
      <div className="mx-auto testimonials text-center sm:p-6 lg:p-14 xl:p-10 xxl:p-20">
        <div className="testimonials-title sm:mb-5 lg:mb-6 xl:mb-10 xxl:mb-16">
          <h2 className="testimonials-title testimonial-company font-extrabold sm:text-3xl lg:text-4xl">
            Our Testimonials
          </h2>
          <h3 className="testimonials-title sm:text-lg lg:text-2xl xxl:text-3xl">
            See What Our Partners Are Saying
          </h3>
        </div>
        <div className="container testimonials-title testimonials-boxes mx-auto xl:px-16 xxl:px-32 flex flex-row sm:gap-8 lg:gap-10 xl:gap-16 xxl:gap-20">
          <div className="verizon sm:p-5 xl:px-5 xl:py-7 xxl:px-5 xxl:py-10 border text-justify ">
            <img
              className="sm:mb-5 lg:mb-5 xxl:mb-9 quote-image"
              src={quote_icon}
              alt=""
            />
            <p className="sm:mb-5 lg:mb-5 xxl:mb-9 w-11/12 sm:text-sm xl:text-sm xxl:text-lg">
              OpenDaylight is Verizon’s foundational and directional SDN
              controller with 2 use cases in production across the network. It
              provides us with the ability to innovate at our own pace and helps
              drive down both CapEx and OpEx.
            </p>
            <h4 className="testimonial-company sm:text-sm lg:text-xl xxl:text-2xl">
              - Verizon
            </h4>
          </div>
          <div className="pantheon sm:p-5 xl:px-5 xl:py-7 xxl:px-5 xxl:py-10 border text-justify ">
            <img
              className="sm:mb-5 lg:mb-5 xxl:mb-9 quote-image"
              src={quote_icon}
              alt=""
            />
            <p className="sm:mb-5 lg:mb-5 xxl:mb-9 w-11/12 sm:text-sm xl:text-sm xxl:text-lg">
              OpenDaylight's adaptable architecture enables us to address
              network challenges across RAN, edge, core, and SONiC-based
              enterprise datacenters & campuses, providing us with a
              comprehensive platform solution.
            </p>
            <h4 className="testimonial-company sm:text-sm lg:text-xl xxl:text-2xl">
              - PANTHEON.tech
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserStories
