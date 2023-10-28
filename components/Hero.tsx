"use client";
import Image from "next/image";

import { motion } from "framer-motion";

import Photo1 from "@/static/img/Foto-1.png";

const defaulAnimation = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const Hero = () => {
  return (
    <div className="h-[35rem]">
      <div className="container h-full mx-auto">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="text-center px-4 md:text-start">
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={defaulAnimation}
                className="font-semibold text-2xl xl:text-3xl"
              >
                Las TICs Son Esenciales
              </motion.h2>
              <motion.p
                className="text-sm w-full lg:text-base"
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1, ease: "linear" }}
                variants={defaulAnimation}
              >
                Transforma la educación, inspira el futuro. Forjando innovadores
                en TICs para una enseñanza conectada
              </motion.p>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={defaulAnimation}
                transition={{ type: "tween", delay: 0.2 }}
              >
                <div className="my-2 bg-black text-white py-2 px-8 inline-block rounded-full hover:bg-white border border-black hover:text-black ease-in-out duration-300">
                  <p className="text-sm">Ver Mas</p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={defaulAnimation}
            >
              <Image
                className="md:w-[380px] lg:w-[420px] xl:w-[480px]"
                src={Photo1}
                alt="Personas bucando iformacion de las TICs"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
