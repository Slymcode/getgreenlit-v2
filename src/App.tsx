import React, { useEffect, useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
} from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { AllSpaces } from './Pages/Dashboard/SpacePage/SpaceNestedPages/AllSpaces'
import { AllProjects } from './Pages/Dashboard/ProjectPage/ProjectNestedPages/AllProjects'
import { FAQ } from './Pages/Dashboard/SpacePage/SpaceNestedPages/FAQ/FAQ'
import { SpaceSettings } from './Pages/Dashboard/ProjectPage/ProjectNestedPages/SpaceSettings/SpaceSettings'
import { Licensing } from './Pages/Dashboard/ProjectPage/ProjectNestedPages/Licensing/Licensing'
import { MainLayout } from './Components/Dashboard/Layouts/MainLayout/MainLayout'
import { SpacesLayout } from './Components/Dashboard/Layouts/SpacesLayout/SpacesLayout'
import { ProjectsLayout } from './Components/Dashboard/Layouts/ProjectsLayout/ProjectsLayout'

function App() {
  const { name } = useParams()
  const [showNestedSidebar, setShowNestedSidebar] = useState<Boolean>(false)
  const [showMainSidebar, setShowMainSidebar] = useState<Boolean>(false)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setShowNestedSidebar(false)
    })
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          element={
            <MainLayout
              navHeading={name}
              setNestedSidebarShow={setShowNestedSidebar}
              showMainSidebar={showMainSidebar}
              setShowMainSidebar={setShowMainSidebar}
            />
          }
        >
          <Route
            element={
              <SpacesLayout
                showSpacesSidebar={showNestedSidebar}
                setShowSpacesSidebar={setShowNestedSidebar}
              />
            }
          >
            <Route path="/greenlit-home" element={<AllSpaces />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
          </Route>
          <Route
            element={
              <ProjectsLayout
                showProjectsSidebar={showNestedSidebar}
                setShowProjectsSidebar={setShowNestedSidebar}
              />
            }
          >
            <Route path="/all-projects" element={<AllProjects />}></Route>
            <Route path="/space-setting" element={<SpaceSettings />}></Route>
            <Route path="/licensing" element={<Licensing />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
