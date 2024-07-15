export default function ExperienceForm () {
  return (
    <div className='accordion-item'>
      <h2 className='accordion-header'>
        <button
          className='accordion-button'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#experience-form-container'
          aria-expanded='true'
          aria-controls='experience-form-container'
        >
          Experience
        </button>
      </h2>
      <div
        id='experience-form-container'
        className='accordion-collapse collapse show'
        data-bs-parent='#user-inputs'
      >
        <div className='accordion-body'>
          <form className='experience-form'>
            <div className='mb-3'>
              <label className='form-label' htmlFor='job-title'>
                Job title
              </label>
              <input type='text' className='form-control' id='job-title' />
            </div>
            <div className='mb-3'>
              <label className='form-label' htmlFor='company-name'>
                Company name
              </label>
              <input type='text' className='form-control' id='company-name' />
            </div>
            <div className='mb-3'>
              <label className='form-label' htmlFor='from'>
                Dates of Employment
              </label>
              <div className='row'>
                <div className='col-6'>
                  <label htmlFor='from' className='form-label'>
                    From
                  </label>
                  <input type='date' className='form-control' id='from' />
                </div>
                <div className='col-6'>
                  <label htmlFor='to' className='form-label'>
                    To
                  </label>
                  <input type='date' className='form-control' id='to' />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
