import React from 'react'
import './Governance.css'
import Anil from '../../images/Anil.png'
import Ivan from '../../images/Ivan.png'
import Manoj from '../../images/Manoj.png'
import Robert from '../../images/Robert.png'
import Venkatrangan from '../../images/Venkatrangan.png'
import Gilles from '../../images/Gilles.png'
import Linkedin from '../../images/Linkedin.png'
import Email from '../../images/Email.png'

const people = [
  {
    name: 'Anil Belur',
    image: Anil,
    linkedin: 'https://www.linkedin.com/in/abelur/',
    email: 'abelur@linuxfoundation.org',
  },
  {
    name: 'Ivan Hraško',
    image: Ivan,
    linkedin: 'https://www.linkedin.com/',
    email: 'ivan.hrasko@pantheon.tech',
  },
  {
    name: 'Manoj Chokka',
    image: Manoj,
    linkedin: 'https://www.linkedin.com/in/manoj-chokka-b5895b64/',
    email: 'cmanoj8@gmail.com',
  },
  {
    name: 'Robert Varga ',
    image: Robert,
    linkedin: 'https://www.linkedin.com/in/robert-varga-5086a24/',
    email: 'nite@hq.sk',
  },
  {
    name: 'Venkatrangan',
    image: Venkatrangan,
    linkedin:
      'https://www.linkedin.com/in/venkatrangan-govindarajan-sdn-test-automation/',
    email: 'gvrangan@gmail.com',
  },
  {
    name: 'Gilles Thouenon',
    image: Gilles,
    linkedin: 'https://www.linkedin.com/in/gilles-thouenon-2660b564/',
    email: 'gilles.thouenon@orange.com',
  },
  // Add more people here
]

const Governance = () => {
  return (
    <div>
      <div className="governance-banner">
        <div className="governance-box container mx-auto text-center sm:p-8 lg:p-12 xl:p-14 xxl:p-28">
          <h1 className="governance-title pb-8 sm:text-3xl md:text-4xl xxl:text-7xl uppercase">
            Committed to the Future
          </h1>
          <p className="governance-body sm:text-base xl:text-lg xxl:text-2xl font-normal lg:px-12 xl:px-56 xxl:px-32 text-center">
            OpenDaylight is a founding project of{' '}
            <a
              href="https://lfnetworking.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="governance-body font-bold underline underline-offset-4"
            >
              LF Networking (LFN)
            </a>
            . LFN integrates the governance of participating projects in order
            to improve operational efficiencies and simplify member engagement.
            Each technical project retains its technical independence and
            project roadmaps.
          </p>
        </div>
      </div>
      <div className="container mx-auto tsc-explain sm:px-6 lg:px-6 xl:px-0">
        <div className="tsc-columns grid sm:grid-cols-1 md:grid-cols-3 gap sm:gap-5 lg:gap-12 my-6 ">
          <div className="tsc-theory text-center sm:py-2 lg:py-8">
            <h3 className="tsc-title pb-5 md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl ">
              What is TSC
            </h3>
            <p className="tsc-body sm:text-sm md:text-xs lg:text-sm xl:text-base xxl:text-xl ">
              TSC stands for "Technical Steering Committee." The Technical
              Steering Committee is a group of individuals within an
              organization or project responsible for providing technical
              leadership, guidance, and decision-making. In the context of
              OpenDaylight, the TSC plays a crucial role in determining the
              technical direction of the OpenDaylight project, which focuses on
              software-defined networking.
            </p>
          </div>
          <div className="tsc-members text-center sm:py-2 lg:py-8">
            <h3 className="tsc-title pb-5 md:text-lg lg:text-2xl xl:text-3xl xxl:text-4xl">
              How can I become a{' '}
              <span className="tsc-title block">TSC Member?</span>
            </h3>
            <p className="tsc-body sm:text-sm md:text-xs lg:text-sm xl:text-base xxl:text-xl">
              OpenDaylight welcomes participation from anyone, allowing them to
              develop and contribute code, become elected members of the TSC,
              and contribute to the project's progress in various ways. The TSC
              comprises developers who have been elected or chosen as project
              leaders, and they play a crucial role in providing technical
              leadership for OpenDaylight.
            </p>
          </div>
          <div className="tsc-governance text-center sm:py-2 lg:py-8">
            <h3 className="tsc-title pb-5 md:text-lg lg:text-2xl xl:text-3xl xxl:text-4xl">
              Our Governance Model
            </h3>
            <p className="tsc-body sm:text-sm md:text-xs lg:text-sm xl:text-base xxl:text-xl">
              OpenDaylight follows an open governance model to ensure
              transparent decision-making and community participation. To
              understand more about OpenDaylight's governance model, you can
              refer to this{' '}
              <a
                href="https://www.opendaylight.org/wp-content/uploads/sites/14/2018/03/opendaylight_open_community_and_meritocracy_for_sdn_v3.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="tsc-span">White Paper</span>
              </a>{' '}
              and if you want to learn more about TSC member selection,
              governance, and activities checkout out{' '}
              <a
                href="https://www.opendaylight.org/wp-content/uploads/sites/14/2018/01/ODL-Technical-Charter-LF-Projects-LLC-FINAL.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="tsc-span">TSC Charter</span>
              </a>
              . If you wish to attend any meeting, please visit Meeting and
              notes.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-5 mb-16 sm:px-6 lg:px-6 xl:px-0">
        <div className="members-heading">
          <h3 className="text-center lg:pb-10 sm:my-10 lg:my-0">TSC Members</h3>
        </div>
        <div className="grid sm:grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 align-middle">
          {/* Using map so that new card automatically get's created when new person is added. */}
          {people.map((person, index) => (
            <div
              key={index}
              className="cards-box p-4 rounded-lg shadow-xl flex "
            >
              <div className="cards persons-images my-auto">
                <img
                  src={person.image}
                  alt={`Person ${index}`}
                  className="sm:w-32 md:w-24 lg:w-24 xl:w-32 xxl:w-32 h-1w rounded-full"
                />
              </div>
              <div className="cards my-4 sm:pl-4 lg:pt-2 xl:pl-8 xl:pt-5">
                <h2 className="cards sm:text-lg lg:text-lg xl:text-xl font-semibold ">
                  {person.name}
                </h2>
                <div className="social-links mt-3 flex gap-2">
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Linkedin}
                      alt="Linkedin Icon"
                      className="social-links w-8 h-8 cursor-pointer"
                    />
                  </a>
                  <a
                    href={`mailto:${person.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Email}
                      alt="Email Icon"
                      className=" social-links w-10 h-8 pl-2 cursor-pointer"
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

export default Governance
