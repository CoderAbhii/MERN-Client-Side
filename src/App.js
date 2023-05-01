import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Toaster from './components/Toaster'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AddPlayerPage from './pages/AddPlayerPage'
import GetAllPlayerPage from './pages/GetAllPlayerPage'
import GetUserPlayer from './pages/GetUserPlayer'
import UpdatePlayer from './pages/UpdatePlayer'
import ViewPlayer from './pages/ViewPlayer'
import { loggedUser, role } from './context/PayerContext';
import AccessDenied from './pages/AccessDenied';


const App = () => {

  const { userState } = useContext(loggedUser);
  const { userRole } = useContext(role)

  return (
    <>

      <Router>

        <Toaster />
        <Header userState={userState} />

        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={
            userRole === "Leader" ? <Signup /> : <AccessDenied status={"401 Unauthorized"} showText={"Access Denied...!!"} />
          } />

          <Route path="/add-player" element={<AddPlayerPage />} />

          <Route path="/get-all-player" element={
            userRole === "Leader" ? <GetAllPlayerPage /> : <AccessDenied status={"401 Unauthorized"} showText={"Access Denied...!!"} />
          } />

          <Route path="/get-user-player" element={<GetUserPlayer />} />
          <Route path="/update-player/:id" element={<UpdatePlayer />} />
          <Route path="/view-player/:id" element={<ViewPlayer />} />


          <Route path="*" element={<AccessDenied status={"404 Not Found"} showText={"Page Not Found...!!"} />} />

        </Routes>

      </Router>

    </>
  )
}

export default App