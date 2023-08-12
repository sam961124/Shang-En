import { motion } from 'framer-motion'

interface AniSpinnerProps {
  size: number
}

export default function AniSpinner({ size }: AniSpinnerProps) {
  return (
    <motion.div
      className="flex bg-orange-800"
      style={{
        height: size,
        width: size,
      }}
      animate={{
        scale: [1, 1.5, 1.5, 1, 1],
        rotate: [0, 0, 180, 0, 180],
        borderRadius: ['0%', '0%', '50%', '50%', '0%'],
      }}
      transition={{
        duration: 1.4,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 1, 1.4],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    />
  )
}
