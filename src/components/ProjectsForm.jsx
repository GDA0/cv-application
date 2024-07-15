export default function ProjectsForm ({ projects, setProjects }) {
  function handleChange (e) {
    const { name, value } = e.target
    setProjects((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <div className='accordion-item'>
      <h2 className='accordion-header'>
        <button
          className='accordion-button'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#projects-form-container'
          aria-expanded='true'
          aria-controls='projects-form-container'
        >
          Projects
        </button>
      </h2>
      <div
        id='projects-form-container'
        className='accordion-collapse collapse show'
        data-bs-parent='#user-inputs'
      >
        <div className='accordion-body'>
          <form className='projects-form'>
            <div className='mb-3'>
              <label className='form-label' htmlFor='title'>
                Title
              </label>
              <input
                type='text'
                className='form-control'
                id='title'
                name='title'
                value={projects.title}
                onChange={handleChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='project-description' className='form-label'>
                Description
              </label>
              <textarea
                className='form-control'
                id='project-description'
                name='projectDescription'
                value={projects.projectDescription}
                onChange={handleChange}
                style={{ minHeight: '120px' }}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label' htmlFor='technologies-used'>
                Technologies used
              </label>
              <input
                type='text'
                className='form-control'
                id='technologies-used'
                name='technologiesUsed'
                value={projects.technologiesUsed}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
