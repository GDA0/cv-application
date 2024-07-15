import PersonalInformationForm from './PersonalInformationForm'
import ExperienceForm from './ExperienceForm'

export default function UserInputs () {
  return (
    <section className='col col-md-5'>
      <div className='accordion' id='user-inputs'>
        <PersonalInformationForm />
        <ExperienceForm />
      </div>
    </section>
  )
}
