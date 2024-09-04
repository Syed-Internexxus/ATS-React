import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text32 thq-heading-2">
                  Testimonials
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text34 thq-body-small">
                  Using the ATS compatibility tool has saved us so much time in
                  the recruitment process. Highly recommended!
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text27 thq-body-large">
                            John Doe
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text37 thq-body-small">
                            HR Manager
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text26 thq-body-small">
                        5 stars
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text25 thq-body-large">
                            Jane Smith
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text24 thq-body-small">
                            Recruitment Specialist
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text28 thq-body-small">
                        Great tool for ensuring our candidates&apos; resumes get
                        through the ATS seamlessly.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text30 thq-body-large">
                            David Johnson
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text33 thq-body-small">
                            Talent Acquisition Lead
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text29 thq-body-small">
                        This tool has been a game-changer for our hiring team.
                        No more missed opportunities due to resume formatting
                        issues.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text36 thq-body-large">
                            Emily Brown
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text35 thq-body-small">
                            HR Coordinator
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text31 thq-body-small">
                        Easy to use and incredibly effective. Our recruitment
                        process has become much more efficient thanks to this
                        tool.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author2Alt: 'Image of Jane Smith',
  author3Alt: 'Image of David Johnson',
  author2Position: undefined,
  author2Name: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1636041241614-34cca8be1e93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTI5Mzc5MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Image of Emily Brown',
  review1: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1542513217-0b0eedf7005d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTI5Mzc5MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1617992477211-dfab5866182b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTI5Mzc5MHw&ixlib=rb-4.0.3&q=80&w=1080',
  review2: undefined,
  review3: undefined,
  author3Name: undefined,
  review4: undefined,
  heading1: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1670330701697-b15e6d6cc188?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTI5Mzc5MHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: undefined,
  content1: undefined,
  author4Position: undefined,
  author1Alt: 'Image of John Doe',
  author4Name: undefined,
  author1Position: undefined,
}

Testimonial17.propTypes = {
  author2Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  author2Position: PropTypes.element,
  author2Name: PropTypes.element,
  author3Src: PropTypes.string,
  author4Alt: PropTypes.string,
  review1: PropTypes.element,
  author2Src: PropTypes.string,
  author1Name: PropTypes.element,
  author1Src: PropTypes.string,
  review2: PropTypes.element,
  review3: PropTypes.element,
  author3Name: PropTypes.element,
  review4: PropTypes.element,
  heading1: PropTypes.element,
  author4Src: PropTypes.string,
  author3Position: PropTypes.element,
  content1: PropTypes.element,
  author4Position: PropTypes.element,
  author1Alt: PropTypes.string,
  author4Name: PropTypes.element,
  author1Position: PropTypes.element,
}

export default Testimonial17
