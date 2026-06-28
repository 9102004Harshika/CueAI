import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if loader has been shown before
        const hasShownLoader = sessionStorage.getItem('hasShownLoader');

        if (hasShownLoader) {
            setIsLoading(false);
            onComplete?.();
            return;
        }

        // Simulate loading progress
        const duration = 2500;
        const steps = 60;
        const increment = 100 / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            setProgress(Math.min(currentStep * increment, 100));

            if (currentStep >= steps) {
                clearInterval(interval);
                setTimeout(() => {
                    setIsLoading(false);
                    sessionStorage.setItem('hasShownLoader', 'true');
                    onComplete?.();
                }, 300);
            }
        }, duration / steps);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
                >
                    {/* Animated background gradient */}
                    <motion.div
                        className="absolute inset-0"
                        animate={{
                            background: [
                                'radial-gradient(circle at 30% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 50%)',
                                'radial-gradient(circle at 70% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
                                'radial-gradient(circle at 30% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 50%)',
                            ]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />

                    {/* Floating particles */}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-primary/30 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo with draw animation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="mb-12 relative"
                        >
                            <motion.div
                                className="text-6xl font-black bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                                style={{ backgroundSize: '200% 200%' }}
                            >
                                CUE AI
                            </motion.div>

                            {/* Orbiting particles */}
                            {[0, 120, 240].map((angle, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-primary rounded-full"
                                    style={{
                                        left: '50%',
                                        top: '50%',
                                    }}
                                    animate={{
                                        x: [
                                            Math.cos((angle * Math.PI) / 180) * 60,
                                            Math.cos(((angle + 360) * Math.PI) / 180) * 60,
                                        ],
                                        y: [
                                            Math.sin((angle * Math.PI) / 180) * 60,
                                            Math.sin(((angle + 360) * Math.PI) / 180) * 60,
                                        ],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                />
                            ))}
                        </motion.div>

                        {/* Progress bar */}
                        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-xl">
                            <motion.div
                                className="h-full bg-gradient-to-r from-primary to-secondary relative"
                                initial={{ width: '0%' }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.1 }}
                            >
                                {/* Shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    animate={{
                                        x: ['-100%', '200%'],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                />
                            </motion.div>
                        </div>

                        {/* Progress percentage */}
                        <motion.div
                            className="mt-6 text-on-surface-variant font-medium text-sm"
                            key={Math.floor(progress)}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {Math.floor(progress)}%
                        </motion.div>

                        {/* Loading text */}
                        <motion.div
                            className="mt-2 text-on-surface-variant/60 text-xs"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Loading premium experience...
                        </motion.div>
                    </div>

                    {/* Exit animation circle */}
                    <motion.div
                        className="absolute inset-0 bg-background rounded-full"
                        initial={{ scale: 0 }}
                        exit={{ scale: 3 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{ transformOrigin: 'center center' }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;
