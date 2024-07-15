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

  const [experience, setExperience] = useState({
    jobTitle: '',
    companyName: '',
    experienceFrom: '',
    experienceTo: '',
    experienceDescription: ''
  })

  const [education, setEducation] = useState({
    degree: '',
    institution: '',
    educationFrom: '',
    educationTo: '',
    educationDescription: ''
  })
  return (
    <main className='flex-grow-1 row my-5 py-3'>
      <UserInputs
        personalInformation={personalInformation}
        setPersonalInformation={setPersonalInformation}
        experience={experience}
        setExperience={setExperience}
        education={education}
        setEducation={setEducation}
      />
      <CVPreviewer
        personalInformation={personalInformation}
        experience={experience}
        education={education}
      />
    </main>
  )
}
