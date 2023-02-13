import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { navWrapperLoadAnimation } from '../../../animations/NavBar';
import NavMenuDesktop from './NavMenuDesktop/NavMenuDesktop';
import NavMenuMobile from './NavMenuMobile/NavMenuMobile';
import MenuToggle from './MenuToggle/MenuToggle';
import Modal from '../Modal/Modal';

function getWindowWidth () {
    let innerWidth;
    if (typeof window !== "undefined") {
        innerWidth = window.innerWidth;
    } else {
        innerWidth = 900;
    }
    return innerWidth;
}

export default function NavigationWrapper() {
    const [ navBarOpen, setNavBarOpen ] = useState(false);
    const [ innerWidth, setInnerWidth ] = useState(getWindowWidth);
    const [ isMobile, setIsMobile ] = useState(false);

    const closeNavBar = () => setNavBarOpen(false);

    useEffect(() => {
        const handleResize = () => {
            if (innerWidth < 900) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
        handleResize();
        window.addEventListener('resize', () => {
            const newWindowWidth = getWindowWidth();
            setInnerWidth(newWindowWidth);
            handleResize();
        }) ;
    }, [innerWidth])

    const mobileMenu = (
        <motion.div variants={navWrapperLoadAnimation}>
            <MenuToggle toggle={() => setNavBarOpen(!navBarOpen)} isOpen={navBarOpen} />
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
