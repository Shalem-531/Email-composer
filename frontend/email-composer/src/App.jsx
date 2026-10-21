import { EmailProvider } from './useContext.jsx'
import EmailForm from './emailform'

function App() {

  return (
    <>
      <EmailProvider>
      <h1>Compose Email</h1>
      <EmailForm />
    </EmailProvider>
    </>
  )
}

export default App
