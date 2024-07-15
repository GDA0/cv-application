import { UserInputs } from './UserInputs'
import CVPreviewer from './CVPreviewer'
import { useState } from 'react'

export default function Main () {
  const [personalInformation, setPersonalInformation] = useState({
    fullName: '',
    profession: '',
    bio: '',
    address: '',
    city: '',
    region: '',
    country: '',
    portfolioWebsite: '',
    phoneNumber: '',
    email: '',
    linkedinProfile: '',
    xProfile: '',
    skills: '',
    interests: ''
  })
  return (
    <main className='flex-grow-1 row my-5 py-3'>
      <UserInputs
        personalInformation={personalInformation}
        setPersonalInformation={setPersonalInformation}
      />
      <CVPreviewer personalInformation={personalInformation} />
    </main>
  )
}
