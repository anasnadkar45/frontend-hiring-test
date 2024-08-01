import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('https://free-ap-south-1.cosmocloud.io/development/api/employees', {
        headers: {
          'projectId': '66aa2910440310e3620e0bbc',
          'environmentId': '66aa2910440310e3620e0bbd',
        },
        params: {
          limit: 10,  // You can adjust the limit as needed
          offset: 0   // Adjust the offset for pagination if necessary
        }
      });
      setEmployees(response.data.data);
      console.log(response.data.data); // Log the fetched employees
    } catch (error) {
      console.error('Error fetching employees:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <div>
        <h1>Employee List</h1>
        {employees.length > 0 ? (
          <ul>
            {employees.map((employee, index) => (
              <li key={index}>
                <p>Name: {employee.name}</p>
                {/* <p>Address: {employee.address}</p>
                <p>Contact Methods: {employee.contact_methods.map((method, idx) => (
                  <div key={idx}>
                    <p>Type: {method.contact_method}</p>
                    <p>Value: {method.value}</p>
                  </div>
                ))}</p> */}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default App;
