import { useRef } from 'react'
import './App.css'
import { Navbar} from './components'
import { Outlet } from 'react-router-dom'
import { RefProvider } from "./contexts"

function App() {

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <RefProvider value={{ homeRef, aboutRef, projectRef, skillRef, contactRef}}>
      <Navbar />
      <main>
          <Outlet />
      </main>
    </RefProvider>
  )
}

export default App
