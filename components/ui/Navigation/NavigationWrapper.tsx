import { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

//dynamic imports
const NavMenuDesktop = dynamic(() => import('./NavMenuDesktop/NavMenuDesktop'));
const NavMenuMobile = dynamic(() => import('./NavMenuMobile/NavMenuMobile'));
const MenuToggle = dynamic(() => import('./MenuToggle/MenuToggle'));
const Modal = dynamic(() => import('../Modal/Modal'));

export default function NavigationWrapper() {
    const [ navBarOpen, setNavBarOpen ] = useState(false);
    const [ isMobile, setIsMobile ] = useState(false);

    const closeNavBar = () => setNavBarOpen(false);

    const handleResize = () => {
        if (window.innerWidth <= 900) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    })

    const mobileMenu = (
        <>
            <MenuToggle toggle={() => setNavBarOpen(!navBarOpen)} isOpen={navBarOpen} />
            {/* <NavMenuDesktop /> */}
            <NavMenuMobile isOpen={navBarOpen} closeNavBar={closeNavBar} />
            {navBarOpen && <Modal isOpen={navBarOpen} closeNavBar={closeNavBar} />}
        </>
    );

  return (
    <>
        { isMobile ? mobileMenu : <NavMenuDesktop /> }
    </>
  )
}
