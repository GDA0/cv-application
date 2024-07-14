export default function PersonalInformationForm () {
  return (
    <div className='accordion-item'>
      <h2 className='accordion-header'>
        <button
          className='accordion-button'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#personal-information-form-container'
          aria-expanded='true'
          aria-controls='personal-information-form-container'
        >
          Personal Information
        </button>
      </h2>
      <div
        id='personal-information-form-container'
        className='accordion-collapse collapse show'
        data-bs-parent='#user-inputs'
      >
        <div className='accordion-body'>
          <form className='personal-information-form'>
            <div className='mb-3'>
              <label className='form-label' htmlFor='full-name'>
                Full name
              </label>
              <input
                className='form-control'
                id='full-name'
                type='text'
                placeholder='E.g.: Gideon Delali Adeti'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label' htmlFor='profession'>
                Profession
              </label>
              <input
                className='form-control'
                id='profession'
                type='text'
                placeholder='E.g.: Web Developer'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='bio' className='form-label'>
                Bio
              </label>
              <textarea
                className='form-control'
                id='bio'
                placeholder="E.g.: I'm a full-stack web developer specializing in the MERN stack (MongoDB, Express.js, React.js, and Node.js). I have a strong understanding of the MERN stack, enabling me to integrate front-end and back-end development for efficient application creation. My self-directed learning background has fostered a strong work ethic and a love for continuous improvement. Moreover, I thrive in collaborative environments, eager to learn and contribute."
                style={{ minHeight: '240px' }}
              />
            </div>
            <div className='mb-3 row g-3'>
              <div className='col-12'>
                <label htmlFor='address' className='form-label'>
                  Address
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='address'
                  placeholder='E.g.: Ahenfie St'
                />
              </div>
              <div className='col-4'>
                <label htmlFor='city' className='form-label'>
                  City
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='city'
                  placeholder='E.g.: Koforidua'
                />
              </div>
              <div className='col-4'>
                <label htmlFor='region' className='form-label'>
                  Region
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='region'
                  placeholder='E.g.: Eastern'
                />
              </div>
              <div className='col-4'>
                <label htmlFor='country' className='form-label'>
                  Country
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='country'
                  placeholder='E.g.: Ghana'
                />
              </div>
              <div className='col-6'>
                <label htmlFor='portfolio-website' className='form-label'>
                  Portfolio website
                </label>
                <input
                  type='url'
                  className='form-control'
                  id='portfolio-website'
                  placeholder='E.g.: https://gda0.github.io/homepage/'
                />
              </div>
              <div className='col-6'>
                <label htmlFor='phone-number' className='form-label'>
                  Phone number
                </label>
                <input
                  type='tel'
                  className='form-control'
                  id='phone-number'
                  placeholder='E.g.: +233500181208'
                />
              </div>
              <div className='col-12'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  placeholder='E.g.: gideondelaliadeti0@gmail.com'
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
