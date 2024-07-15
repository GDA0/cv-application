export default function Header ({ addTemplate }) {
  return (
    <header>
      <nav className='navbar fixed-top bg-white container-fluid border-bottom border-2'>
        <div className='container d-flex justify-content-between'>
          <span className='navbar-brand mb-0 h1'>CV Application</span>
          <button onClick={addTemplate} className='btn btn-light rounded-pill'>
            Add Template
          </button>
        </div>
      </nav>
    </header>
  )
}
