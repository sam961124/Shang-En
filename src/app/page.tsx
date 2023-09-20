"use client"
import { motion } from "framer-motion"
import { useCallback, useState, useEffect } from "react"

export default function Home() {
  const [terminalDate, setTerminalDate] = useState<Date>()
  const myName = "Shang En Lee"
  const myNameWords = myName.split(" ")
  const mySolgan = "Connecting People through Pixels, Codes, and Empathy."
  const mySolganChars = mySolgan.split("")

  useEffect(() => {
    setTerminalDate(new Date())
  }, [])

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

  const educationTitle = {
    offscreen: {
      y: 50,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.8,
      },
    },
  }
  const educationCommandContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 },
    },
  }
  const educationCommandChild = {
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

  const handleTitleDownClick = useCallback(() => {
    const education = document.getElementById("education")
    education?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const getTerminalLoginDate = useCallback(() => {
    if (!terminalDate) {
      return ""
    }
    const dateString = terminalDate
      .toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })
      .replace(",", "")
    const timeString = terminalDate.toLocaleTimeString("en-US", {
      hour12: false,
    })
    return dateString + " " + timeString
  }, [terminalDate])

  return (
    <main className="flex flex-col">
      <section
        id="title"
        className="flex h-[100vh] flex-col items-center justify-center bg-orange-50 p-6"
      >
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
          className="mt-auto flex cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05 * mySolganChars.length + 1 }}
          onClick={handleTitleDownClick}
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
      </section>
      <section id="education" className="flex flex-col">
        <div className="flex h-[100vh] flex-col items-center bg-orange-50 p-6 md:p-12">
          <motion.div
            variants={educationTitle}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="flex text-4xl text-orange-900 md:text-7xl"
          >
            Education
          </motion.div>
          <div className="mt-12 flex h-full w-full flex-col items-center">
            <div className="flex h-7 w-11/12 items-center gap-2 rounded-t-lg bg-stone-200 p-2 md:w-8/12">
              <button className="h-5 w-5 rounded-full bg-red-500" />
              <button className="h-5 w-5 rounded-full bg-amber-400" />
              <button className="h-5 w-5 rounded-full bg-green-400" />
            </div>
            <div className="flex h-5/6 w-11/12 flex-col flex-wrap rounded-b-lg bg-black p-1 font-mono text-white md:w-8/12 md:text-lg">
              <div className="flex">
                Last login: {getTerminalLoginDate()} on console
              </div>
              <div className="flex">
                <span className="mr-2">shangenlee@Home ~ %</span>
                <motion.div
                  className="flex flex-wrap"
                  variants={educationCommandContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {"Education".split("").map((char, index) => (
                    <motion.span variants={educationCommandChild} key={index}>
                      {char}
                    </motion.span>
                  ))}
                  <motion.div
                    className="flex"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      repeat: 3,
                      repeatType: "reverse",
                      duration: 0.5,
                      ease: "backInOut",
                    }}
                    viewport={{ once: true }}
                  >
                    _
                  </motion.div>
                </motion.div>
              </div>
              <motion.div
                className="flex h-4/6 items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                TBD: National Taiwan University
              </motion.div>
              <motion.div
                className="flex"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "linear", delay: 3.5, duration: 0.05 }}
              >
                <span className="mr-2">shangenlee@Home ~ %</span>
                <motion.div
                  className="flex"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 0.5,
                    ease: "backInOut",
                  }}
                >
                  _
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
