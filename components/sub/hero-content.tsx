"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center mx-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[15px] px-[15px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[16px]">
          More than 5 years of experience in engineering/PM work
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-[22px] text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Highest
            </span>{" "}
            We provide website and system development experience.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-md text-gray-400 my-5 max-w-[600px] leading-[40px]"
        >
          I am involved in a wide range of work, from listening to customers to defining requirements and managing progress.
Currently, I am working on a wide range of web-related work.
I have a deep understanding of and interest in blockchain technology and AI, and have extensive experience in the resale of NFTs.
I also have a deep understanding of cutting-edge blockchain technology, including account abstraction.
We will respond carefully to even the smallest of inquiries, so please feel free to contact us! <br /><br />
・Frontend: React, Vue, Next.js, Nuxt.js, other JavaScript frameworks<br />
・Backend: Node.js, ASP.NET, Django, Laravel, Ruby on Rails, FuelPHP, WordPress, Go, C#, Unity, UE5, etc.<br />
・Blockchain: Solidity, Solana, Rust, etc.<br />
・AI development: TensorFlow, PyTorch, Scikit-Learn, LangChain, OpenAI, etc.<br />
・Database: MongoDB, MySQL, MariaDB, PostgreSQL, SQLite, etc.<br />
・Mobile apps: React Native, Flutter, etc.<br />
・Servers/infrastructure: AWS, EC2, S3, Cloudflare, etc.<br />
・PJM tools: GitHub, Jira, BitBucket, Heroku, etc.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="#contact"
        >
          inquiry
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
