import { Route, Routes } from 'react-router'
import HomePage from './presentation/pages/home-page'
import NavBar from './presentation/components/nav-bar'
import RegisterPage from './presentation/pages/register-page'
import GetStarted from './presentation/pages/get-started-page'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/signup" element={<RegisterPage />} />
    <Route path="/getstarted" element={<GetStarted />} />

    </Routes>
    </>
  )
}

export default App