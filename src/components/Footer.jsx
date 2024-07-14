export default function Footer () {
  return (
    <footer className='text-center p-3'>
      <p className='mb-0'>
        &copy; {new Date().getFullYear()} CV Application. Created By{' '}
        <a
          className='text-primary'
          href='https://github.com/GDA0'
          target='_blank'
          rel='noopener noreferrer'
        >
          Gideon D. Adeti
        </a>
        . All Rights Reserved.
      </p>
    </footer>
  )
}
