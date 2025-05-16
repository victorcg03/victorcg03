import { personalInfo as info } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "../MotionWrapper";

export default function HeroSection() {
  const personalInfo = info.en;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl font-bold mb-2"
              variants={childVariants}
            >
              {personalInfo.name}{" "}
              <span className="inline-block animate-pulse">✨</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-6"
              variants={childVariants}
            >
              Web & Mobile Developer 👨‍💻
            </motion.p>

            <motion.div
              className="flex flex-col gap-2 items-center md:items-start"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center text-sm text-muted-foreground"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <MapPin className="h-4 w-4 mr-2" />
                <span className="w-7 text-center">📍</span>
                <span className="flex-1">{personalInfo.location}</span>
              </motion.div>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Mail className="h-4 w-4 mr-2" />
                <span className="w-7 text-center">✉️</span>{" "}
                <span className="flex-1">{personalInfo.email}</span>
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Github className="h-4 w-4 mr-2" />
                <span className="w-7 text-center">🌟</span>{" "}
                <span className="flex-1">GitHub</span>
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                <span className="w-7 text-center">🔗</span>{" "}
                <span className="flex-1">LinkedIn</span>
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="mt-6 md:mt-0 flex justify-center"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-48 md:w-60 rounded-full relative ring-2 ring-purple-500/50"
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </motion.div>

        <MotionWrapper>
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-purple-500/20 dark:border-purple-500/10 shadow-sm">
            <MotionWrapper>
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-purple-500/20 dark:border-purple-500/10 shadow-sm">
                <p className="text-muted-foreground pl-4 py-2 mb-4 relative">
                  <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                  👋 My name is Víctor and I’m a web and mobile developer. Since
                  I was a kid I’ve been passionate about tech: I started by
                  disassembling laptops and ended up programming everything I
                  can imagine. I’m not into design — I’m into writing code,
                  building things, researching, and learning something new every
                  day.
                </p>
                <p className="text-muted-foreground pl-4 py-2 mb-4 relative">
                  <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                  I love programming. I build tools, projects, or even silly
                  ideas just for fun or to learn something new. I'm curious,
                  self-taught, and I love to understand how things work. I want
                  to know the "why", not just make it work.
                </p>
                <p className="text-muted-foreground pl-4 py-2 mb-4 relative">
                  <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                  I've worked with React, React Native, TypeScript, PHP, HTML,
                  CSS, Java, and also some Node.js and Express. I've built
                  corporate websites, online stores, full mobile apps and even
                  small games. I have projects on GitHub, in production and on
                  my local machine. What matters most is to never stop learning.
                </p>
                <p className="text-muted-foreground pl-4 py-2 mb-4 relative">
                  <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                  I like to understand how everything works from start to
                  finish: I deploy my own servers on Ubuntu, configure Apache,
                  Docker, domains, SSL certificates, databases... everything
                  needed to take a project from scratch to production. If
                  something breaks, I’ll fight it.
                </p>
                <p className="text-muted-foreground pl-4 py-2 mb-4 relative font-medium">
                  <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                  Want to see what I've built? Check out my projects below 👇
                </p>
              </div>
            </MotionWrapper>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
