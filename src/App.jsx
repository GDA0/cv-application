import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default function App () {
  return (
    <div className='d-flex flex-column min-vh-100 container'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
