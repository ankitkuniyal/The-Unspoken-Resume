"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare, Instagram } from "lucide-react";
import NavBar from "../../components/ui/NavBar";

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background p-6 text-white md:p-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <NavBar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 max-w-xl text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="mx-auto mb-8 flex h-20 w-20 rotate-3 items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-800/50 backdrop-blur-md transition-transform hover:rotate-6"
        >
          <MessageSquare size={40} className="text-white" />
        </motion.div>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Let's build something sensible.
        </h1>
        <p className="mb-12 text-lg leading-relaxed text-neutral-400">
          I'm currently looking for roles where I can build backend systems that
          matter. No fluff, just good engineering.
        </p>

        <div className="mx-auto flex w-full max-w-sm flex-col gap-4">
          <a
            href="mailto:ankitkuniyal520@gmail.com"
            className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 transition-all hover:border-accent hover:bg-neutral-900"
          >
            <span className="flex items-center gap-3 text-neutral-300 group-hover:text-white">
              <Mail size={20} /> Say hello
            </span>
            <span className="text-sm text-neutral-500 group-hover:text-accent">
              ankitkuniyal520@gmail.com
            </span>
          </a>

          <a
            href="https://github.com/ankitkuniyal"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 transition-all hover:border-neutral-600 hover:bg-neutral-900"
          >
            <span className="flex items-center gap-3 text-neutral-300 group-hover:text-white">
              <Github size={20} /> Check the code
            </span>
            <span className="text-sm text-neutral-500 group-hover:text-white">
              GitHub
            </span>
          </a>

          <a
            href="https://linkedin.com/in/ankitkuniyal"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 transition-all hover:border-blue-500/50 hover:bg-neutral-900"
          >
            <span className="flex items-center gap-3 text-neutral-300 group-hover:text-white">
              <Linkedin size={20} /> Connect
            </span>
            <span className="text-sm text-neutral-500 group-hover:text-blue-400">
              LinkedIn
            </span>
          </a>
          <a
            href="https://instagram.com/ankit.kuniyal_"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 transition-all hover:border-blue-500/50 hover:bg-neutral-900"
          >
            <span className="flex items-center gap-3 text-neutral-300 group-hover:text-white">
              <Instagram size={20} /> More of Me
            </span>
            <span className="text-sm text-neutral-500 group-hover:text-blue-400">
              Instagram
            </span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
