import React, { useEffect } from 'react';
import { Button } from '../ui/button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployeeList = ({ employees, setEmployees, fetchEmployees }) => {
    const navigate = useNavigate();
    const handleDeleteEmployee = async (id, e) => {
        e.stopPropagation();
        try {
            await axios.delete(`https://free-ap-south-1.cosmocloud.io/development/api/employees/${id}`, {
                headers: {
                    'projectId': '66aba561733137118d4cff16',
                    'environmentId': '66aba561733137118d4cff17',
                },
                data: {},

            });
            fetchEmployees();
        } catch (err) {
            console.error('Error deleting employee:', err);
        }
    }


    return (
        <div className='border bg-white rounded-lg'>
            <table className='w-full'>
                <thead className='w-full'>
                    <tr style={{ scrollbarWidth: 'none' }} className='w-full grid grid-cols-7 overflow-y-scroll' >
                        <th className='px-6 py-4 text-left col-span-2'>Name</th>
                        <th className='px-6 py-4 text-left col-span-2'>Emp_Id</th>
                        <th className='px-6 py-4 text-left col-span-2'>Email</th>
                        <th className='px-6 py-4 text-left'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => {
                        const { name, _id } = employee;
                        const { email } = employee.contact;
                        return (
                            <tr onClick={() => navigate(`/employee/${_id}`)} key={_id} style={{ scrollbarWidth: 'none' }} className=" w-full items-center hover:cursor-pointer hover:bg-background transition-all duration-400 grid grid-cols-7 overflow-y-scroll border-b border">
                                <td className="px-6 py-4 text-black col-span-2">{name}</td>
                                <td className="px-6 py-4 text-black col-span-2">{_id}</td>
                                <td className="px-6 py-4 text-black col-span-2">{email}</td>
                                <td className='px-6 py-4 col-span-1'>
                                    <Button variant={'destructive'} onClick={(e) => handleDeleteEmployee(_id, e)} className='w-full'>Delete</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
