import EmployeeDetailCard from '@/components/AppComponents/EmployeeDetailCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

const EmployeeDetail = () => {
    // State to hold employee data
    const [employeeData, setEmployeeData] = useState(null);
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    useEffect(() => {
        fetchEmployeeDetails(id);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 400);

        return () => clearTimeout(timer);
    }, [id])

    // Function to fetch employee details from the cosmocloud API
    const fetchEmployeeDetails = async (id) => {
        try {
            const response = await axios.get(`https://free-ap-south-1.cosmocloud.io/development/api/employees/${id}`, {
                headers: {
                    'projectId': '66aba561733137118d4cff16',
                    'environmentId': '66aba561733137118d4cff17',
                }
            });

            setEmployeeData(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error.message);
        }
    }
    return (
        <div>
            <div className='flex gap-4'>
                <h1 className='font-bold text-3xl text-primary mb-4'>
                    EmployeeDetail
                </h1>
                <Button variant={'outline'}>
                    <a href="/">Back</a>
                </Button>
            </div>
            <div>
                {
                    loading ? (
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
                    ) : (
                        <EmployeeDetailCard employeeData={employeeData} />
                    )
                }
            </div>
        </div>
    )
}

export default EmployeeDetail