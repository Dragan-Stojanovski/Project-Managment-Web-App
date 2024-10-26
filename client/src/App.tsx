import { Route, Routes, useLocation } from 'react-router'
import HomePage from './presentation/pages/home-page'
import NavBar from './presentation/components/nav-bar'
import RegisterPage from './presentation/pages/register-page'
import GetStarted from './presentation/pages/get-started-page'
import LoginPage from './presentation/pages/login-page'
import { useSelector } from 'react-redux'

function App() {

  const location = useLocation();

  const userData = useSelector((state:any) => (state.user))
  
console.log("userData",userData)

  return (
    <>
   {location.pathname === '/signup' || location.pathname === '/signin' ? null : <NavBar />}
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/signup" element={<RegisterPage />} />
    <Route path="/signin" element={<LoginPage />} />

    <Route path="/getstarted" element={<GetStarted />} />
    </Routes>
    </>
  )
}

export default App