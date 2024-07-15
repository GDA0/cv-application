import PersonalInformationForm from './PersonalInformationForm'
import ExperienceForm from './ExperienceForm'
import EducationForm from './EducationForm'
import ProjectsForm from './ProjectsForm'

export function UserInputs () {
  return (
    <section className='col col-md-5'>
      <div className='accordion user-inputs' id='user-inputs'>
        <PersonalInformationForm />
        <ExperienceForm />
        <EducationForm />
        <ProjectsForm />
      </div>
    </section>
  )
}
