import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [cursorVariant, setCursorVariant] = useState('default');

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Hide on touch devices
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        setIsVisible(true);

        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;

            if (target.tagName === 'BUTTON' || target.tagName === 'A') {
                setCursorVariant('button');
                setIsHovering(true);
            } else if (target.tagName === 'IMG') {
                setCursorVariant('image');
                setIsHovering(true);
            } else if (target.classList.contains('glass-card')) {
                setCursorVariant('card');
                setIsHovering(true);
            } else {
                setCursorVariant('default');
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    const variants = {
        default: {
            height: 12,
            width: 12,
            backgroundColor: 'rgba(124, 58, 237, 0.8)',
        },
        button: {
            height: 50,
            width: 50,
            backgroundColor: 'rgba(124, 58, 237, 0.2)',
            border: '2px solid rgba(124, 58, 237, 0.8)',
        },
        image: {
            height: 80,
            width: 80,
            backgroundColor: 'rgba(124, 58, 237, 0.1)',
            border: '2px solid rgba(124, 58, 237, 0.6)',
        },
        card: {
            height: 60,
            width: 60,
            backgroundColor: 'rgba(168, 85, 247, 0.15)',
            border: '2px solid rgba(168, 85, 247, 0.6)',
        }
    };

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={cursorVariant}
                variants={variants}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            />

            {/* Trailing dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] w-1 h-1 rounded-full bg-primary"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            />
        </>
    );
};

export default CustomCursor;
