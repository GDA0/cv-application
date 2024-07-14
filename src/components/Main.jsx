import UserInputs from './UserInputs'
import CVPreviewer from './CVPreviewer'

export default function Main () {
  return (
    <main className='flex-grow-1'>
      <UserInputs />
      <CVPreviewer />
    </main>
  )
}
