import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
      onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-primary via-primary-dark to-accent flex items-center justify-center overflow-hidden"
        >
          {/* Background world map pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              viewBox="0 0 1200 800"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <pattern
                  id="worldMap"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="50" cy="50" r="1" fill="white" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#worldMap)" />
            </svg>
          </div>

          {/* Animated plane path */}
          <svg
            viewBox="0 0 1200 800"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <path
                id="planePath"
                d="M100,400 Q300,200 600,300 T1100,400"
                fill="none"
                stroke="transparent"
              />
            </defs>
            
            {/* Plane icon */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.path
                d="M20,10 L5,5 L5,0 L15,2 L25,0 L25,5 L20,10 L15,8 Z"
                fill="white"
                transform="scale(2)"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
transition={{
                  duration: 2.5,
                  delay: 0.5
                }}
                style={{
                  offsetPath: "path('M100,400 Q300,200 600,300 T1100,400')",
                  offsetRotate: "auto",
                }}
              />
            </motion.g>

            {/* Trail effect */}
            <motion.path
              d="M100,400 Q300,200 600,300 T1100,400"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeOpacity="0.5"
              strokeDasharray="10,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
transition={{
                duration: 2.5,
                delay: 0.5
              }}
            />
          </svg>

          {/* Company text */}
          <div className="relative z-10 text-center">
            <motion.div
initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Easy World
              </h1>
              <p className="text-xl md:text-2xl font-light opacity-90">
                Anywhere You Want to Be
              </p>
            </motion.div>
          </div>

          {/* Subtle particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -80, -20],
                x: [-10, 10, -10],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;