import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const AI_CHARACTERS = [
    { id: 1, color: 'from-primary to-secondary', size: 60, speed: 25 },
    { id: 2, color: 'from-secondary to-primary', size: 45, speed: 30 },
    { id: 3, color: 'from-purple-500 to-pink-500', size: 50, speed: 20 },
];

const AICharacter = ({ config }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Initialize random position
        setPosition({
            x: Math.random() * (window.innerWidth - 100),
            y: Math.random() * (window.innerHeight - 100),
        });

        // Roaming behavior
        const moveInterval = setInterval(() => {
            setTargetPosition({
                x: Math.random() * (window.innerWidth - 100),
                y: Math.random() * (window.innerHeight - 100),
            });
        }, config.speed * 1000);

        return () => clearInterval(moveInterval);
    }, [config.speed]);

    return (
        <motion.div
            className="fixed pointer-events-none z-50"
            animate={{
                x: targetPosition.x,
                y: targetPosition.y,
            }}
            transition={{
                duration: config.speed,
                ease: 'easeInOut',
            }}
            style={{
                width: config.size,
                height: config.size,
            }}
        >
            {/* Main orb */}
            <motion.div
                className={`w-full h-full rounded-full bg-gradient-to-br ${config.color} opacity-60 blur-sm`}
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Glow effect */}
            <motion.div
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${config.color} opacity-30 blur-xl`}
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Particle trail */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute w-2 h-2 rounded-full bg-gradient-to-br ${config.color}`}
                    style={{
                        left: '50%',
                        top: '50%',
                    }}
                    animate={{
                        x: [0, (Math.random() - 0.5) * 40],
                        y: [0, (Math.random() - 0.5) * 40],
                        opacity: [0.6, 0],
                        scale: [1, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                    }}
                />
            ))}
        </motion.div>
    );
};

export default AICharacter;
