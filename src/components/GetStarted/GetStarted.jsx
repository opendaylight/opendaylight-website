import React from 'react'
import './GetStarted.css'
import Casey from '../../images/Casey.png'
import Jill from '../../images/Jill.png'
import Venkat from '../../images/Venkatrangan.png'
import Linkedin from '../../images/Linkedin.png'
import Email from '../../images/Email.png'

const resources = [
  {
    heading: 'Gerrit',
    description:
      'Developers, Engineers, and Students are welcome to contribute to our project.',
    name: 'View Code',
    link: 'https://git.opendaylight.org/gerrit/',
  },
  {
    heading: 'Docs',
    description:
      'Read the documentation to learn more about how OpenDaylight works.',
    name: 'Getting Started',
    link: 'https://docs.opendaylight.org/en/latest/getting-started-guide/index.html',
  },
  {
    heading: 'Projects',
    description:
      'Checkout all our new projects are currently in progress. Take a look at our ongoing initiatives.',
    name: 'Other Projects',
    link: 'https://wiki.opendaylight.org/x/-QUF',
  },
  {
    heading: 'Tracking',
    description:
      'You can report any bug or issues through Jira and we will resolve it.',
    name: 'Tracking issues',
    link: 'https://jira.opendaylight.org/',
  },
  {
    heading: 'Wiki',
    description:
      'Get more information about Opendaylight through our Wiki page.',
    name: 'Learn More',
    link: 'https://wiki.opendaylight.org/x/DwYF',
  },
  {
    heading: 'TSC',
    description:
      'Join and engage yourself in discussions through TSC meetings.',
    name: 'Join Us',
    link: 'https://wiki.opendaylight.org/x/GwYF',
  },
]

const personality = [
  {
    image: Casey,
    name: 'Casey Cain',
    designation: 'Technical Community Architect ',
    description:
      'Casey Cain works on community development and all aspects of release management.',
    company: 'The Linux Foundation',
    companylink: 'https://www.linuxfoundation.org/',
    linkedin: 'https://www.linkedin.com/in/caseycain1/',
    gmail: 'ccain@linuxfoundation.org',
  },
  {
    image: Jill,
    name: 'Jill Lovato',
    designation: 'Senior Marketing Director',
    description:
      'Jill leads communications, public relations and analyst relations for the LF Networking and LF Edge.',
    company: 'The Linux Foundation',
    companylink: 'https://www.linuxfoundation.org/',
    linkedin: 'https://www.linkedin.com/in/jilllovato/',
    gmail: 'jlovato@linuxfoundation.org',
  },
  {
    image: Venkat,
    name: 'Venkatrangan',
    designation: 'TSC Chair, OpenDaylight',
    description:
      'Venkatrangan Govindaragan is the offical TSC chair for the OpenDaylight Community for this year.',
    company: 'Nvidia',
    companylink: 'https://www.nvidia.com/en-in/',
    linkedin:
      'https://www.linkedin.com/in/venkatrangan-govindarajan-sdn-test-automation/',
    gmail: 'gvrangan@gmail.com',
  },
]

const GettingStarted = () => {
  return (
    <div>
      <div className="started-banner mb-20">
        <div className="started-box mx-auto text-center sm:p-9 xl:p-10 xxl:p-20">
          <div className="started-box">
            <h1 className="started-title sm:pb-4 xl:pb-6 xxl:pb-9 xl:text-5xl xxl:text-7xl">
              Get <span className="started-span">Started</span>
            </h1>
            <p className="started-body sm:px-0 xl:px-44 xxl:px-48 text-center xl:text-lg xxl:text-2xl mb-9">
              Whether you’re a user, an engineer working for a solution
              provider, or an independent developer with a personal interest in
              open networking, there’s no better way to help drive forward the
              field of networking than to join the OpenDaylight developer
              community.
            </p>
          </div>
          <div className="buttons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="download-button sm:mr-2 lg:mr-10 py-2.5 px-6 text-base"
              href="https://docs.opendaylight.org/en/latest/downloads.html"
            >
              Download
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="download-button py-2.5 px-12 text-base"
              href="https://docs.opendaylight.org/en/latest/getting-started-guide/index.html"
            >
              Guide
            </a>
          </div>
        </div>
      </div>
      <div className="resources container mx-auto sm:p-6 lg:px-5 xl:p-0 mb-20">
        <div className="resources-title">
          <h2 className="text-center mb-20">Resources</h2>
        </div>
        <div className="resources-cards grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Using map so that new card automatically get's created when new resources is added. */}
          {resources.map((resources, index) => (
            <div
              key={index}
              className="cards-box px-2 rounded-lg shadow-xl w-11/12"
            >
              <div className="cards my-4 pl-4 sm:pt-1 lg:pt-5">
                <h2 className="cards sm:text-2xl xl:text-2xl xxl:text-3xl font-semibold sm:mb-3 lg:mb-5">
                  {resources.heading}
                </h2>
                <p className="sm:mb-3 lg:mb-5 w-11/12 sm:text-sm xl:text-base xxl:text-base">
                  {resources.description}
                </p>
                <a
                  href={resources.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="name underline underline-offset-4 decoration-orange-500 xl:text-sm xxl:text-base"
                >
                  {resources.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto media-personality mb-20 sm:p-6 lg:p-0 lg:px-6 xl:px-0">
        <div className="resources-title sm:mb-10 lg:mb-20">
          <h2 className="text-center xl:text-3xl xxl:text-4xl sm:mb-6 xl:mb-7 xxl:mb-10">
            Key Contacts
          </h2>
          <p className="text-center xl:text-xl xxl:text-2xl">
            Need help related to something?{' '}
            <span className="reach-out  sm:block md:inline">
              Reach out to us.
            </span>
          </p>
        </div>
        <div className="personility grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:gap-4 xl:gap-2 xxl:gap-9 sm:px-4 xl:px-0">
          {personality.map((personality, index) => (
            <div className="media-card border xl:w-11/12 xxl:w-10/12 rounded-xl p-4">
              <div className="personality-image flex justify-center mb-6">
                <img
                  className="rounded-xl w-fit md:h-72 lg:h-64 xl:h-80"
                  src={personality.image}
                  alt=""
                />
              </div>
              <div className="card-info sm:mb-4 xl:mb-4 xxl:mb-5 flex flex-col justify-start">
                <h4 className="mb-3 xl:text-lg xxl:text-xl">
                  {personality.name}
                </h4>
                <p className="text-normal font-semibold mb-3">
                  {personality.designation}
                </p>
                <p className="lg:text-sm xxl:text-base sm:w-100 xl:w-11/12 ">
                  {personality.description}
                </p>
              </div>
              <div className="media-links flex justify-between items-end">
                <div>
                  <a
                    href={personality.companylink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-name"
                  >
                    {personality.company}
                  </a>
                </div>
                <div className="flex sm:space-x-2 xl:space-x-3 xxl:space-x-4 media-icons">
                  <a
                    href={`mailto:${personality.gmail}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="sm:w-7 sm:h-7 md:w-8 md:h-8 xl:w-8 xl:h-8 cursor-pointer"
                      src={Email}
                      alt=""
                    />
                  </a>
                  <a
                    href={personality.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="sm:w-7 sm:h-7 md:w-8 md:h-8 xl:w-8 xl:h-8 cursor-pointer"
                      src={Linkedin}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GettingStarted
