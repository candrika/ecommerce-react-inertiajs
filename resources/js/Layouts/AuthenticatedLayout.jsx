import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
// import Dropdown from '@/Components/Dropdown';
// import NavLink from '@/Components/NavLink';
// import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import Content from '@/Components/Content';
import Sidebar from '@/Components/Sidebar';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-base-100 drawer lg:drawer-open">
                <input type="checkbox" id="drawer" className="drawer-toggle" />
                <Content user={user} children={children}/>
                <Sidebar/>
            </div>
            
        </div>
    );
}
