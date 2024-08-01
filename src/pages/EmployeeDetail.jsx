import React, { useEffect, useState } from 'react'

const EmployeeDetail = () => {
    const [employeeData, setEmployeeData] = useState(null);
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    useEffect(()=>{
        fetchEmployeeDetails(id);
    })

    const fetchEmployeeDetails =(id) =>{
        try{

        }catch(error){
            console.error('Error fetching employees:', error.message);
        }
    }
    return (
        <div>
            <h1 className='font-bold text-3xl text-primary mb-4'>
                EmployeeDetail
            </h1>
            <div>

            </div>
        </div>
    )
}

export default EmployeeDetail