import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

//dynamic imports
const NavMenuDesktop = dynamic(() => import('./NavMenuDesktop/NavMenuDesktop'))
const NavMenuMobile = dynamic(() => import('./NavMenuMobile/NavMenuMobile'));
const MenuToggle = dynamic(() => import('./MenuToggle/MenuToggle'));
const Modal = dynamic(() => import('../Modal/Modal'));

export default function NavigationWrapper() {
    const [ navBarOpen, setNavBarOpen ] = useState(false);
    const closeNavBar = () => setNavBarOpen(false);

    const [ responsive, setResponsive ] = useState(false);
    useEffect(() => {
        const screenSize = window.matchMedia('max-width: 1000px');
        if (screenSize) {
            setResponsive(true);
        } else {
            setResponsive(false);
        }
    }, []);

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
        {responsive ? mobileMenu : <NavMenuDesktop />}
    </>
  )
}
