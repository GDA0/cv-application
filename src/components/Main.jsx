import { UserInputs } from './UserInputs'
import CVPreviewer from './CVPreviewer'

export default function Main ({
  personalInformation,
  setPersonalInformation,
  experience,
  setExperience,
  education,
  setEducation,
  projects,
  setProjects
}) {
  return (
    <main className='flex-grow-1 row my-5 py-3'>
      <UserInputs
        personalInformation={personalInformation}
        setPersonalInformation={setPersonalInformation}
        experience={experience}
        setExperience={setExperience}
        education={education}
        setEducation={setEducation}
        projects={projects}
        setProjects={setProjects}
      />
      <CVPreviewer
        personalInformation={personalInformation}
        experience={experience}
        education={education}
        projects={projects}
      />
    </main>
  )
}
