export const routeAnimations = {
    initial: {
        opacity: 0
    },
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
}

export const fade = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
};

export const fadeInAndDown = {
    hidden: {
        opacity: 0,
        y: -15
    },
    visible: {
        opacity: 1,
        y: 0
    }
};

export const buttonAnimation = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.3,
            type: "spring",
            stiffness: 400
        }
    },
    click: {
        scale: 0.9,
        transition: {
            duration: 0.3
        }
    }
}

export const overlay = {
    hidden: {
        opacity: 0,
        width: '500px',
        height: 'auto',
        transition: {
            duration: 0.4,
            width: { delay: 0.6 },
            height: { delay: 0.6 }
        }
    },
    hover: {
        opacity: 1,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.6)',
        transition: {
            duration: 0.4,
            opacity: { delay: 0.4 }
        }
    }
}