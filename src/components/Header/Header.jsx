import React, { useState } from "react";
import { Menu, Login } from './Header.js';
import { FaBars, FaUser } from "react-icons/fa";
import Sidebar from '../Sidebar/Sidebar.jsx';

const Header = () => {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <section>
            <Menu>
                <FaBars onClick={showSidebar} />
                {sidebar && <Sidebar active={setSidebar} />}
            </Menu>
            <Login>
                <p>Login</p>
                <FaUser />
            </Login>
        </section>
    );
}

export default Header
