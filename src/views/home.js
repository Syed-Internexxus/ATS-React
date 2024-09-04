import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Steps2 from '../components/steps2'
import Features24 from '../components/features24'
import Testimonial17 from '../components/testimonial17'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>ATS</title>
        <meta property="og:title" content="ATS" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10 thq-link thq-body-small">
              Cover Letter Generator
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11 thq-link thq-body-small">
              Explore Internships
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12 thq-link thq-body-small">#about</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13 thq-link thq-body-small">
              #contact
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15 thq-body-large">Features</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16 thq-body-large">About</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17 thq-body-large">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Sign Up</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Learn More</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text20 thq-body-small">
              Check your resume compatibility with ATS systems.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21 thq-body-small">
              Explore the features of our ATS compatibility tool.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22 thq-body-small">
              Learn more about our company and mission.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23 thq-body-small">
              Get in touch with us for any inquiries.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text24 thq-body-small">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text25 thq-body-large">
              Ensure your resume passes through Applicant Tracking Systems with
              flying colors. Use our tool to check compatibility and increase
              your chances of landing interviews.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text26 thq-heading-1">
              Boost Your Resume&apos;s Success with AI
            </span>
          </Fragment>
        }
      ></Hero17>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text27 thq-heading-2">Upload Resume</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text28 thq-heading-2">
              Upload Job Description
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text29 thq-heading-2">
              Review Suggestions
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text30 thq-heading-2">
              Download Compatible Resume
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text31 thq-body-small">
              Upload your resume to the tool
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text32 thq-body-small">
                              Upload or paste the targeted job description
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text33 thq-body-small">
              Get suggestions on how to improve your resume for ATS
              compatibility
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text34 thq-body-small">
              Download the optimized resume for ATS submission
            </span>
          </Fragment>
        }
      ></Steps2>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text35 thq-heading-2">
              ATS Compatibility Check
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text36 thq-heading-2">
              Keyword Optimization
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text37 thq-heading-2">
              Customized Feedback
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text38 thq-body-small">
              Instantly scan your resume to see how well it aligns with
              Applicant Tracking Systems.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text39 thq-body-small">
              Receive suggestions on how to optimize your resume with relevant
              keywords for better ATS performance.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text40 thq-body-small">
              Get personalized feedback on how to improve your resume&apos;s
              compatibility with ATS.
            </span>
          </Fragment>
        }
      ></Features24>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text41 thq-body-small">5 stars</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text42 thq-body-small">
              Great tool for ensuring our candidates&apos; resumes get through
              the ATS seamlessly.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text43 thq-body-small">
              This tool has been a game-changer for our hiring team. No more
              missed opportunities due to resume formatting issues.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text44 thq-body-small">
              Easy to use and incredibly effective. Our recruitment process has
              become much more efficient thanks to this tool.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text45 thq-body-small">
              Using the ATS compatibility tool has saved us so much time in the
              recruitment process. Highly recommended!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text46 thq-heading-2">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text47 thq-body-large">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text48 thq-body-large">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text49 thq-body-large">David Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text50 thq-body-large">Emily Brown</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text51 thq-body-small">HR Manager</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text52 thq-body-small">
              Recruitment Specialist
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text53 thq-body-small">
              Talent Acquisition Lead
            </span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text54 thq-body-small">HR Coordinator</span>
          </Fragment>
        }
      ></Testimonial17>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text55 thq-body-small">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text56 thq-body-small">Contact Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text57 thq-body-small">FAQs</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text58 thq-body-small">Terms of Service</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text59 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text60 thq-body-small">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text61 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text62 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
