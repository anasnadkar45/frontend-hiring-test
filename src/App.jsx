import React from 'react'
import AddEmployeePage from './pages/AddEmployeePage'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/AppComponents/Navbar'
import EmployeeDetail from './pages/EmployeeDetail'

const App = () => {
  return (
    <main className="min-h-screen w-full dark:bg-black bg-[#F8FAFC]">
      <Navbar />
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
      <div className="max-w-[1380px] w-full h-full mx-auto z-10 px-3 pb-10 space-y-5">
        <div className="max-w-[800px] mx-auto space-y-7 text-center">
          {/* <h1 className="text-5xl md:text-7xl font-extrabold">Showcase and Collaborate <span className="text-primary">on Innovative Projects.</span></h1>
          <p className="text-muted md:text-lg">Spotlight your latest innovations and collaborate with a vibrant community. Project Hub helps your side projects gain the attention and support they need to thrive.</p> */}
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-employee" element={<AddEmployeePage />} />
          <Route path="/employee/:id" element={<EmployeeDetail />} />
        </Routes>
      </div>
    </main>
  )
}

export default App