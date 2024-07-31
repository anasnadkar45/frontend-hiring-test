import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    FetchEmploye();
    console.log(employee);
  }, [])

  const FetchEmploye = async () => {
    const employees = await axios('https://free-ap-south-1.cosmocloud.io/development/api/employees',
      {
        headers: {
          'projectId': '66aa2910440310e3620e0bbc',
          'environmentId': '66aa2910440310e3620e0bbd',
        },
      }
    );
    setEmployee(employees.data);
  }
  return (
    <>

    </>
  )
}

export default App
