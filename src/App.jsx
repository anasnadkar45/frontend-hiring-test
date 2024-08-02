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
      <div className="max-w-[1380px] w-full h-full mx-auto z-10 px-3 pb-10 space-y-5">
        <div className="max-w-[800px] mx-auto space-y-7 text-center">
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-employee" element={<AddEmployeePage />} />
          <Route path="/employee/:id" element={<EmployeeDetail />} />
          <Route path="/add-employee" element={<AddEmployeePage />} />
        </Routes>
      </div>
    </main>
  )
}

export default App