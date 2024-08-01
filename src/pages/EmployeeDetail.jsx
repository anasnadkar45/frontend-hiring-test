import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

const EmployeeDetail = () => {
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

    const fetchEmployeeDetails = async (id) => {
        try {
            const response = await axios.get(`https://free-ap-south-1.cosmocloud.io/development/api/employees/${id}`, {
                headers: {
                    'projectId': '66ab2c7300af110a2a57a49a',
                    'environmentId': '66ab2c7300af110a2a57a49b',
                }
            });

            setEmployeeData(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error.message);
        }
    }
    return (
        <div>
            <h1 className='font-bold text-3xl text-primary mb-4'>
                EmployeeDetail
            </h1>
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
                        <div>
                            <div className="">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="name" className="text-sm font-medium">
                                                Name
                                            </Label>
                                            <Input id="name" placeholder="John Doe" className="border-2 bg-transparent" disabled />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="address-line1" className="text-sm font-medium">
                                                Address Line 1
                                            </Label>
                                            <Input id="address-line1" placeholder="123 Main St" className="border-2 bg-transparent" disabled />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="grid gap-2">
                                                <Label htmlFor="city" className="text-sm font-medium">
                                                    City
                                                </Label>
                                                <Input id="city" placeholder="San Francisco" className="border-2 bg-transparent" disabled />
                                            </div>
                                            <div className="grid gap-2">
                                                <Label htmlFor="country" className="text-sm font-medium">
                                                    Country
                                                </Label>
                                                <Input id="country" placeholder="USA" className="border-2 bg-transparent" disabled />
                                            </div>
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="zipcode" className="text-sm font-medium">
                                                Zipcode
                                            </Label>
                                            <Input id="zipcode" placeholder="94101" className="border-2 bg-transparent" disabled />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="email" className="text-sm font-medium">
                                                Email
                                            </Label>
                                            <Input id="email" type="email" placeholder="john@example.com" className="border-2 bg-transparent" disabled />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="phone" className="text-sm font-medium">
                                                Phone
                                            </Label>
                                            <Input id="phone" type="tel" placeholder="+1 (123) 456-7890" className="border-2 bg-transparent" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default EmployeeDetail