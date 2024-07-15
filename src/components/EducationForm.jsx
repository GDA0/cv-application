export default function EducationForm () {
  return (
    <div className='accordion-item'>
      <h2 className='accordion-header'>
        <button
          className='accordion-button'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#education-form-container'
          aria-expanded='true'
          aria-controls='education-form-container'
        >
          Education
        </button>
      </h2>
      <div
        id='education-form-container'
        className='accordion-collapse collapse show'
        data-bs-parent='#user-inputs'
      >
        <div className='accordion-body'>
          <form className='education-form'>
            <div className='mb-3'>
              <label className='form-label' htmlFor='degree'>
                Degree
              </label>
              <input type='text' className='form-control' id='degree' />
            </div>
            <div className='mb-3'>
              <label className='form-label' htmlFor='institution'>
                Institution
              </label>
              <input type='text' className='form-control' id='institution' />
            </div>
            <div className='mb-3'>
              <label className='form-label' htmlFor='education-from'>
                Dates of education
              </label>
              <div className='row'>
                <div className='col-6'>
                  <label htmlFor='education-from' className='form-label'>
                    From
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='education-from'
                  />
                </div>
                <div className='col-6'>
                  <label htmlFor='education-to' className='form-label'>
                    To
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='education-to'
                  />
                </div>
              </div>
            </div>
            <div className='mb-3'>
              <label htmlFor='education-description' className='form-label'>
                Description
              </label>
              <textarea
                className='form-control'
                id='education-description'
                style={{ minHeight: '120px' }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
