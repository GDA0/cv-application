export default function Header ({ addTemplate, removeTemplate }) {
  return (
    <header>
      <nav className='navbar fixed-top bg-white container-fluid border-bottom border-2'>
        <div className='container d-flex justify-content-between'>
          <span className='navbar-brand mb-0 h1'>CV Application</span>
          <div>
            <button
              onClick={addTemplate}
              className='btn btn-light rounded-pill me-3'
            >
              Add Template
            </button>
            <button
              onClick={removeTemplate}
              className='btn btn-light rounded-pill'
            >
              Remove Template
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
