//Note that all of the animations for the navbarToggle button
//are located on the component inline.

export const navBGAnimation = {
    open: {
        width: '300px'
    },
    closed: {
        width: "0",
        transition: {
            when: "afterChildren",
            delay: 0.6,
            type: "ease-out"
        }
    }
}

export const navMenuAnimation = {
    open: {
        
        transition: {
            delay: 0.3,
            staggerChildren: 0.2
        }
    },
    closed: {
        
        transition: {
            staggerChildren: 0.1,
            staggerDirection: -1
        }
    }
}

export const navLinkAnimation = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.1,
            // type: "tween"
        }
    },
    closed: {
        opacity: 0,
        x: 50,
        transition: {
            duration: 0.1,
            // type: "tween"
        }
    }
}

export const overlayAnimation = {
    open: {
        width: "100%",
        opacity: 1
    },
    closed: {
        width: 0,
        opacity: 0,
        transition: {
            delay: 0.7
        }
    }
}

export const navWrapperLoadAnimation = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            type: "ease-in"
        }
    },
    exit: {
        opacity: 0
    }
}

export const desktopNavLoadAnimation = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 0.2,
            staggerChildren: 0.2
        }
    },
    exit: {
        opacity: 0
    }
}

export const desktopNavLinkAnimation = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        duration: 0.2
    },
    exit: {
        opacity: 0,
        duration: 0.2
    }
}