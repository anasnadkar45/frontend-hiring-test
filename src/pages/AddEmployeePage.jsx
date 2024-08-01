import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import React, { useState } from 'react';

const AddEmployeePage = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState({
        line1: '',
        city: '',
        country: '',
        zipcode: ''
    });
    const [contact, setContact] = useState({
        email: '',
        phone: ''
    });

    const handleAddEmployee = async (e) => {
        e.preventDefault();

        const employeeData = {
            name,
            address,
            contact,
        };

        try {
            const response = await axios.post('https://free-ap-south-1.cosmocloud.io/development/api/employees', employeeData, {
                headers: {
                    'Content-Type': 'application/json', 
                    'projectId': '66ab2c7300af110a2a57a49a',
                    'environmentId': '66ab2c7300af110a2a57a49b',
                },
            });
            console.log('Employee data:', response.data);
            resetForm();
        } catch (err) {
            console.error('Error adding employee:', err);
        }
    };

    const resetForm = () => {
        setName('');
        setAddress({ line1: '', city: '', country: '', zipcode: '' });
        setContact({ email: '', phone: '' });
    };

    return (
        <div>
            <div className='mt-2 mx-auto'>
                <form onSubmit={handleAddEmployee} className='space-y-2'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold text-3xl text-primary'>Add New Employee</h1>
                        <Button type="submit">Save</Button>
                    </div>
                    <div className='border rounded-lg p-4 bg-white'>
                        <h1 className='text-2xl font-bold'>General information</h1>
                        <Label>Employee Name</Label>
                        <Input
                            type="text"
                            value={name}
                            placeholder="Enter employee name"
                            onChange={(e) => setName(e.target.value)}
                            required
                            className='col-span-3 bg-transparent mt-1'
                        />
                    </div>
                    <div className='border rounded-lg p-4 bg-white'>
                        <h1 className='text-2xl font-bold'>Address</h1>
                        <Label>Address Line1</Label>
                        <Input
                            type="text"
                            value={address.line1}
                            placeholder="Enter employee Line1 address"
                            onChange={(e) => setAddress({ ...address, line1: e.target.value })}
                            required
                            className='col-span-3 bg-transparent mb-2'
                        />
                        <Label>City</Label>
                        <Input
                            type="text"
                            value={address.city}
                            placeholder="Enter employee city"
                            onChange={(e) => setAddress({ ...address, city: e.target.value })}
                            required
                            className='col-span-3 bg-transparent mb-2'
                        />
                        <Label>Country</Label>
                        <Input
                            type="text"
                            value={address.country}
                            placeholder="Enter employee country"
                            onChange={(e) => setAddress({ ...address, country: e.target.value })}
                            required
                            className='col-span-3 bg-transparent mb-2'
                        />
                        <Label>Zip Code</Label>
                        <Input
                            type="number"
                            value={address.zipcode}
                            placeholder="Enter employee zip code"
                            onChange={(e) => setAddress({ ...address, zipcode: e.target.value })}
                            required
                            className='col-span-3 bg-transparent'
                        />
                    </div>

                    <div className='border rounded-lg p-4 bg-white'>
                        <h1 className='text-2xl font-bold'>Contact</h1>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={contact.email}
                            placeholder="Enter employee email address"
                            onChange={(e) => setContact({ ...contact, email: e.target.value })}
                            required
                            className='col-span-3 bg-transparent mb-2'
                        />
                        <Label>Phone Number</Label>
                        <Input
                            type="tel" 
                            value={contact.phone}
                            placeholder="Enter employee phone number"
                            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                            required
                            className='col-span-3 bg-transparent mb-2'
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEmployeePage;
