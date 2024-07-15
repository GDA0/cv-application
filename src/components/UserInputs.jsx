import PersonalInformationForm from './PersonalInformationForm'
import ExperienceForm from './ExperienceForm'
import EducationForm from './EducationForm'
import ProjectsForm from './ProjectsForm'

export function UserInputs ({
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
    <section className='col col-md-5'>
      <div className='accordion user-inputs' id='user-inputs'>
        <PersonalInformationForm
          personalInformation={personalInformation}
          setPersonalInformation={setPersonalInformation}
        />
        <ExperienceForm experience={experience} setExperience={setExperience} />
        <EducationForm education={education} setEducation={setEducation} />
        <ProjectsForm projects={projects} setProjects={setProjects} />
      </div>
    </section>
  )
}
