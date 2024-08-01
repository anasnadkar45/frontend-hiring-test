import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const EmployeeDetailCard = ({ employeeData }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                        Name
                    </Label>
                    <Input id="name" value={employeeData.name} className="border-2 bg-transparent" disabled />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="address-line1" className="text-sm font-medium">
                        Address Line 1
                    </Label>
                    <Input id="address-line1" value={employeeData.address.line1} className="border-2 bg-transparent" disabled />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="city" className="text-sm font-medium">
                            City
                        </Label>
                        <Input id="city" value={employeeData.address.city} className="border-2 bg-transparent" disabled />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="country" className="text-sm font-medium">
                            Country
                        </Label>
                        <Input id="country" value={employeeData.address.country} className="border-2 bg-transparent" disabled />
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="zipcode" className="text-sm font-medium">
                        Zipcode
                    </Label>
                    <Input id="zipcode" value={employeeData.address.zipcode} className="border-2 bg-transparent" disabled />
                </div>
            </div>
            <div className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                        Email
                    </Label>
                    <Input id="email" type="email" value={employeeData.contact.email} className="border-2 bg-transparent" disabled />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                        Phone
                    </Label>
                    <Input id="phone" type="tel" value={employeeData.contact.phone} className="border-2 bg-transparent" disabled />
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetailCard