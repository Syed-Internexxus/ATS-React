import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              At Internexxus, we offer a comprehensive suite of tools designed
              to enhance your job search experience. Our Cover Letter Generator
              crafts personalized cover letters that stand out, while the Resume
              Analyser and Builder helps you create and refine resumes that
              showcase your strengths. Ensure your application passes through
              screening systems with our ATS Compatibility Checker, and optimize
              your professional profile with our LinkedIn Optimizer. Each
              product is tailored to give you a competitive edge in your career
              journey.
            </p>
            <div className="steps2-actions"></div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step1Title ?? (
                  <Fragment>
                    <h2 className="steps2-text30 thq-heading-2">
                      Upload Resume
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text31 thq-body-small">
                      Upload your resume to the tool
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text14 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step2Title ?? (
                  <Fragment>
                    <h2 className="steps2-text29 thq-heading-2">
                      Upload Job Description
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text26 thq-body-small">
                      Upload or paste the targeted job description
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text17 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step3Title ?? (
                  <Fragment>
                    <h2 className="steps2-text24 thq-heading-2">
                      Review Suggestions
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text28 thq-body-small">
                      Get suggestions on how to improve your resume for ATS
                      compatibility
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text20 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2>
                {props.step4Title ?? (
                  <Fragment>
                    <h2 className="steps2-text27 thq-heading-2">
                      Download Compatible Resume
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text25 thq-body-small">
                      Download the optimized resume for ATS submission
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text23 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step3Title: undefined,
  step4Description: undefined,
  step2Description: undefined,
  step4Title: undefined,
  step3Description: undefined,
  step2Title: undefined,
  step1Title: undefined,
  step1Description: undefined,
}

Steps2.propTypes = {
  step3Title: PropTypes.element,
  step4Description: PropTypes.element,
  step2Description: PropTypes.element,
  step4Title: PropTypes.element,
  step3Description: PropTypes.element,
  step2Title: PropTypes.element,
  step1Title: PropTypes.element,
  step1Description: PropTypes.element,
}

export default Steps2
