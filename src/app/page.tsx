"use client"
import { motion } from "framer-motion"

export default function Home() {
  const myName = "Shang En Lee"
  const myNameWords = myName.split(" ")
  const mySolgan = "Connecting People through Pixels, Codes, and Empathy."
  const mySolganChars = mySolgan.split("")

  const nameContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  }

  const nameChild = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const sloganContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 },
    },
  }
  const sloganChild = {
    visible: {
      opacity: 1,
      transitionEnd: {
        display: "block",
      },
    },
    hidden: {
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
  }

  return (
    <div className="flex h-full flex-col items-center justify-center bg-orange-50 p-6">
      <div className="mt-auto flex flex-col items-center gap-6">
        <motion.div
          className="flex flex-wrap items-center justify-center overflow-hidden text-6xl md:text-9xl md:leading-tight"
          variants={nameContainer}
          initial="hidden"
          animate="visible"
        >
          {myNameWords.map((word, index) => (
            <motion.span
              className="mr-4 text-orange-900"
              variants={nameChild}
              key={index}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          className="flex min-h-[3.5rem] flex-wrap justify-center text-xl text-orange-900"
          variants={sloganContainer}
          initial="hidden"
          animate="visible"
        >
          {mySolganChars.map((char, index) => (
            <motion.span variants={sloganChild} key={index}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <motion.div
            className="flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.6,
              ease: "backInOut",
            }}
          >
            |
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="mt-auto flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.05 * mySolganChars.length + 1 }}
      >
        <motion.div
          className="h-0
          w-0 border-l-[20px]
          border-r-[20px] border-t-[30px]
          border-l-transparent border-r-transparent border-t-yellow-800"
          animate={{
            y: [-10, 0, -10],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        ></motion.div>
      </motion.div>
    </div>
  )
}
