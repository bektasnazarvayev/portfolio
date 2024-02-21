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
            Web デザイナーおよび Wordpress 開発者ポートフォリオ
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-[22px] text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              最高
            </span>{" "}
            のWebデザインとWebサイト制作経験を提供します
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-md text-gray-400 my-5 max-w-[600px] leading-[30px]"
        >
          私の得意分野はデザインとワードプレスの融合にあります。豊富な経験と幅広い知識を持ちながらも、常に最新のトレンドや技術に対して敏感であり、クライアントのニーズに合わせた魅力的なウェブサイトを制作します。信頼性の高いパートナーとして、ビジネスのオンラインプレゼンスを成功させるお手伝いをします。Webデザイナーとして3年、現在はデザイナー兼コーダーとして活動しています。お客様のアイデアに込めた心を聞いてこれを現実にすることが私がすることだと考えており、何よりもお客様の悩みを解決することが最善という原則に固守しています。
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="#contact"
        >
          お問い合わせ
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
