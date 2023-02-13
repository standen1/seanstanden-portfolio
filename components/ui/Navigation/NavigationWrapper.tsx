import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { navWrapperLoadAnimation } from '../../../animations/NavBar';
import NavMenuDesktop from './NavMenuDesktop/NavMenuDesktop';
import NavMenuMobile from './NavMenuMobile/NavMenuMobile';
import MenuToggle from './MenuToggle/MenuToggle';
import Modal from '../Modal/Modal';

export default function NavigationWrapper() {
    const [ navBarOpen, setNavBarOpen ] = useState(false);
    const [ isMobile, setIsMobile ] = useState(false);

    const closeNavBar = () => setNavBarOpen(false);

    const handleResize = () => {
        if (window.innerWidth < 900) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
    }, [])

    const mobileMenu = (
        <motion.div variants={navWrapperLoadAnimation}>
            <MenuToggle toggle={() => setNavBarOpen(!navBarOpen)} isOpen={navBarOpen} />
            {/* <NavMenuDesktop /> */}
            <NavMenuMobile isOpen={navBarOpen} closeNavBar={closeNavBar} />
            {navBarOpen && <Modal close={closeNavBar} />}
        </motion.div>
    );

  return (
    <>
        { isMobile ? mobileMenu : <NavMenuDesktop /> }
    </>
  )
}
