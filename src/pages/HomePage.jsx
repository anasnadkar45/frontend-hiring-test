import EmployeeList from '@/components/AppComponents/EmployeeList';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner';

const HomePage = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalEmployees, setTotalEmployees] = useState(0);
    const [offset, setOffset] = useState(0);
    const limit = 6;

    useEffect(() => {
        const fetchEmployeesWithDelay = async () => {
            setLoading(true);
            await fetchEmployees();
            setLoading(false);
        }
        const timer = setTimeout(() => {
            fetchEmployeesWithDelay();
        }, 400);

        return () => clearTimeout(timer);
    }, [offset]);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('https://free-ap-south-1.cosmocloud.io/development/api/employees', {
                headers: {
                    'projectId': '66aba561733137118d4cff16',
                    'environmentId': '66aba561733137118d4cff17',
                },
                params: {
                    limit,
                    offset
                }
            });
            setEmployees(response.data.data);
            setTotalEmployees(response.data.page.total);
            console.log(response.data.data);
        } catch (error) {
            console.error('Error fetching employees:', error.message);
        }
    };

    const handleNext = () => {
        if (offset + limit < totalEmployees) {
            setOffset(offset + limit)
        }
    }

    const handlePrev = () => {
        if (offset > 0) {
            setOffset(offset - limit)
        }
    }

    return (
        <div>
            <h1 className='font-bold text-3xl text-primary mb-4'>Employees List</h1>
            {loading ? (
                <div className='w-full h-[78vh] flex justify-center items-center'>
                    <ThreeDots
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            ) : employees.length === 0 ? (
                <div className='w-full border-2 min-h-[400px] rounded-lg flex justify-center items-center
                text-4xl font-bold text-primary'>
                    No Employees in the system
                </div>
            ) : (
                < div >
                    <EmployeeList employees={employees} setEmployees={setEmployees} fetchEmployees={fetchEmployees} />
                    <div className='w-full flex justify-center gap-4 py-2'>
                        <Button variant={"outline"} onClick={handlePrev} disabled={offset === 0}>Prev</Button>
                        <Button variant={"outline"} onClick={handleNext} disabled={offset + limit >= totalEmployees}>Next</Button>
                    </div>
                </div>
            )
            }
        </div >
    )
}

export default HomePage