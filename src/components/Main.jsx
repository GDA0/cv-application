import UserInputs from './UserInputs'
import CVPreviewer from './CVPreviewer'

export default function Main () {
  return (
    <main className='flex-grow-1 row mt-5 pt-3'>
      <UserInputs />
      <CVPreviewer />
    </main>
  )
}
