import { MessageSquareText } from "lucide-react"
import { Button } from "../ui/button"
import { useLocation, useParams } from "react-router-dom"

const NavLink = [
    {
        id: 0,
        name: 'All Employees',
        href: '/'
    },
    {
        id: 1,
        name: 'Add Employee',
        href: '/add-employee'
    },
    
]


const Navbar = () => {
    const location = useLocation();
    return (
        <div className="w-full h-12 flex items-center border-b-2">
            <div className="max-w-[1380px] mx-auto">
                <div className="space-x-6">
                    {NavLink.map((link) => (
                        <a className={location.pathname === link.href ? "text-primary  font-bold" : "text-black  font-bold"} key={link.id} href={link.href}>{link.name}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar