import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'

const initialState = {
  personalInformation: {
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
    languages: '',
    interests: ''
  },
  experience: {
    jobTitle: '',
    companyName: '',
    experienceFrom: '',
    experienceTo: '',
    experienceDescription: ''
  },
  education: {
    degree: '',
    institution: '',
    educationFrom: '',
    educationTo: '',
    educationDescription: ''
  },
  projects: {
    title: '',
    projectDescription: '',
    technologiesUsed: ''
  }
}

const template = {
  personalInformation: {
    fullName: 'Gideon Delali Adeti',
    profession: 'Web Developer',
    bio: 'I am a full-stack web developer specializing in the MERN stack (MongoDB, Express.js, React.js, and Node.js). I have a strong understanding of the MERN stack, enabling me to integrate front-end and back-end development for efficient application creation.',
    address: 'Ahenfie St, Srodae',
    city: 'Koforidua',
    region: 'Eastern',
    country: 'Ghana',
    portfolioWebsite: 'https://gda0.github.io/homepage/',
    phoneNumber: '+233500181208',
    email: 'gideondelaliadeti0@gmail.com',
    linkedinProfile: 'https://www.linkedin.com/in/gideon-delali-adeti/',
    xProfile: 'https://x.com/g_d_a_0',
    skills: 'MongoDB, Express.js, React.js, Node.js',
    languages: 'English, Twi, Ewe, French',
    interests: 'Science, Technology'
  },
  experience: {
    jobTitle: 'Web Developer',
    companyName: 'Self-employed',
    experienceFrom: '2022-01-01',
    experienceTo: '2024-07-15',
    experienceDescription:
      'Learning and building projects related to web development'
  },
  education: {
    degree: 'BEng Biomedical Engineering',
    institution: 'All Nations University',
    educationFrom: '2024-09-16',
    educationTo: '2028-09-16',
    educationDescription:
      'Would graduate with honors and focus on biomedical engineering.'
  },
  projects: {
    title: 'CV Application',
    projectDescription: 'A CV application',
    technologiesUsed: 'HTML, CSS, JS, React'
  }
}

export default function App () {
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
    languages: '',
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

  const [projects, setProjects] = useState({
    title: '',
    projectDescription: '',
    technologiesUsed: ''
  })

  function addTemplate () {
    setPersonalInformation(template.personalInformation)
    setExperience(template.experience)
    setEducation(template.education)
    setProjects(template.projects)
  }

  function removeTemplate () {
    setPersonalInformation(initialState.personalInformation)
    setExperience(initialState.experience)
    setEducation(initialState.education)
    setProjects(initialState.projects)
  }

  return (
    <div className='d-flex flex-column min-vh-100 container'>
      <Header addTemplate={addTemplate} removeTemplate={removeTemplate} />
      <Main
        personalInformation={personalInformation}
        setPersonalInformation={setPersonalInformation}
        experience={experience}
        setExperience={setExperience}
        education={education}
        setEducation={setEducation}
        projects={projects}
        setProjects={setProjects}
      />
      <Footer />
    </div>
  )
}
