import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact10-text17 thq-heading-2">Contact Us</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact10-text19 thq-body-large">
                    Have a question or need support? Reach out to us!
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact10-text18 thq-heading-3">
                    Email: info@resumecheck.com
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact10-text21 thq-body-large">
                    Send us an email and we&apos;ll get back to you as soon as
                    possible.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact10-text16 thq-heading-3">
                    Phone: +1-123-456-7890
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <Fragment>
                  <p className="contact10-text20 thq-body-large">
                    Give us a call during our business hours for immediate
                    assistance.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location2: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1613052871755-fd2f1c2d8c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTI5Mzc4OXw&ixlib=rb-4.0.3&q=80&w=1080',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1677924656147-83b3b3d2858b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTI5Mzc4OXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  location2ImageAlt: 'Phone Icon',
  location1: undefined,
  content1: undefined,
  location2Description: undefined,
  location1Description: undefined,
  location1ImageAlt: 'Email Icon',
}

Contact10.propTypes = {
  location2: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  heading1: PropTypes.element,
  location2ImageAlt: PropTypes.string,
  location1: PropTypes.element,
  content1: PropTypes.element,
  location2Description: PropTypes.element,
  location1Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
}

export default Contact10
