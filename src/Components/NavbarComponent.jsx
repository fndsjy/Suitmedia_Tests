function NavbarComponent() {
    return (
        <nav className={"navbar navbar-expand-lg bg-body-tertiary"}>
            <div className={"container-fluid"}>
                <div className={"collapse navbar-collapse"} id={"navbarTogglerDemo01"}>
                <a className={"navbar-brand"} href={"/"}>Company</a>
                <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
                    <li className={"nav-item"}>
                        <a className={"nav-link px-4 dropdown"} href={"#"}>ABOUT
                            <ul>
                                <li className={"first-list"}>HISTORY</li>
                                <li className={"second-list"}>VISION MISSION</li>
                            </ul>
                        </a>
                        
                    </li>
                    <li className={"nav-item"}>
                        <a className={"nav-link px-4"} href={"#"}>OUR WORK</a>
                    </li>
                    <li className={"nav-item"}>
                        <a className={"nav-link px-4"} href={"#"}>OUR TEAM</a>
                    </li>
                    <li className={"nav-item"}>
                        <a className={"nav-link px-4"} href={"#"}>CONTACT</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;
