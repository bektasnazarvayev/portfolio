"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box mb-[50px] py-[15px] px-[15px] border border-[#7042f88b] opacity-[0.9]]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[16px]">
          Webデザインとワードプレスコーディングなら、私に任せてください
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[16px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        私はデザインとワードプレスのエキスパートであり、クライアントの要件を理解し、効果的なウェブソリューションを提供します<br/> デザインの美しさと技術の優れた組み合わせにより、クライアントのブランドイメージを強化し、顧客の関心を引きつけます
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a task, deadline or idea.
      </motion.div>
    </div>
  );
};
