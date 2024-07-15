import { format, parseISO } from 'date-fns'

import ImgSrc from '../assets/images/image-1.jpg'
import '../assets/CVPreviewer.css'

// Function to convert date input value to "MMM yyyy" format
function formatDate (inputDate) {
  if (!inputDate) return ''
  return format(parseISO(inputDate), 'MMM yyyy')
}

export default function CVPreviewer ({
  personalInformation,
  experience,
  education
}) {
  return (
    <section className='col col-md-7'>
      <div className='cv-previewer border row rounded sticky-top'>
        <div className='col col-md-4 bg-primary-subtle py-3 px-2 side-info'>
          <div className='profile-image mb-5  d-flex flex-column align-items-center'>
            <img
              src={ImgSrc}
              alt='Image 1'
              className='img-fluid rounded-circle'
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
          </div>
          <div className='px-3'>
            <div className='other'>
              <h5>OTHER INFO</h5>
              <div className='other-info'>
                <div className='mb-5'>
                  <h5>SKILLS</h5>
                  <p>{personalInformation.skills}</p>
                </div>
                <div className='mb-5'>
                  <h5>LANGUAGES</h5>
                  <p>{personalInformation.languages}</p>
                </div>
                <div className='mb-5'>
                  <h5>INTERESTS</h5>
                  <p>{personalInformation.interests}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col col-md-8 p-3'>
          <div className='my-5'>
            <h1>{personalInformation.fullName}</h1>
            <h4>{personalInformation.profession}</h4>
          </div>
          <div className='my-4'>
            <h5>ABOUT ME</h5>
            <p>{personalInformation.bio}</p>
          </div>
          <div className='contact my-4'>
            <h5>CONTACT ME</h5>
            <div className='contact-information'>
              <div>
                <i className='bi bi-pin-map' />
                <div>
                  <p>{personalInformation.address}</p>
                  <p>
                    {personalInformation.city}, {personalInformation.region},{' '}
                    {personalInformation.country}
                  </p>
                </div>
              </div>
              <div>
                <i className='bi bi-box-arrow-up-right' />
                <p>{personalInformation.portfolioWebsite}</p>
              </div>
              <div>
                <i className='bi bi-telephone' />
                <p>{personalInformation.phoneNumber}</p>
              </div>
              <div>
                <i className='bi bi-envelope' />
                <p>{personalInformation.email}</p>
              </div>
            </div>
          </div>
          <div className='social my-4'>
            <h5>SOCIAL PROFILE</h5>
            <div className='social-profiles'>
              <div>
                <i className='bi bi-linkedin' />
                <p>{personalInformation.linkedinProfile}</p>
              </div>
              <div>
                <i className='bi bi-twitter-x' />
                <p>{personalInformation.xProfile}</p>
              </div>
            </div>
          </div>
          <div className='my-4'>
            <h5>EXPERIENCE</h5>
            <div className='row'>
              <div className='col col-md-3'>
                <span>{formatDate(experience.experienceFrom)}</span> -{' '}
                <span>{formatDate(experience.experienceTo)}</span>
              </div>
              <div className='col col-md-9'>
                <div className='fw-bold'>
                  <span>{experience.companyName}</span> |{' '}
                  <span>{experience.jobTitle}</span>
                </div>
                <div>{experience.experienceDescription}</div>
              </div>
            </div>
          </div>
          <div className='my-4'>
            <h5>EDUCATION</h5>
            <div className='row'>
              <div className='col col-md-3'>
                <span>{formatDate(education.educationFrom)}</span> -{' '}
                <span>{formatDate(education.educationTo)}</span>
              </div>
              <div className='col col-md-9'>
                <div className='fw-bold'>
                  <span>{education.institution}</span> |{' '}
                  <span>{education.degree}</span>
                </div>
                <div>{education.educationDescription}</div>
              </div>
            </div>
          </div>
          <div>
            <h5>PROJECTS</h5>
            <div className='row mb-3'>
              <div className='col col-md-3'>
                <span>Jun 2024</span> - <span>Jul 2024</span>
              </div>
              <div className='col col-md-9'>
                <div className='fw-bold'>
                  <span>CV Application</span> |{' '}
                  <span>HTML, CSS, JS, React</span>
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit animi soluta ducimus provident veritatis ipsum,
                  eligendi molestias nihil quasi voluptatibus.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
