"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { motion, useInView } from "framer-motion";

import Agency from "@/static/img/Agency.png";
import Photo3 from "@/static/img/Foto-3.png";
import Photo4 from "@/static/img/Foto-4.png";
import IES from "@/static/img/ies.png";

import { listLaborField, listRegistrationReq, listStudyPlan } from "@/utils";

const defaulAnimation = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
  },
};

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="container mx-auto">
      {/* Que Son Las TICs */}
      <div className="my-8">
        <motion.h3
          initial="hidden"
          animate="visible"
          variants={defaulAnimation}
          transition={{ type: "tween", delay: 0.3 }}
          className="font-semibold text-center py-2 text-xl"
        >
          ¿Que Son Las TICs?
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-center flex items-center px-4">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={defaulAnimation}
              transition={{ type: "tween", delay: 0.4 }}
              className="text-sm pb-8"
            >
              Las TICs, o Tecnologías de la Información y la Comunicación, son
              herramientas y sistemas que utilizamos para obtener, procesar,
              almacenar y comunicar información utilizando la tecnología, como
              computadoras, teléfonos móviles e Internet. Estas tecnologías son
              fundamentales en la era digital para la educación y la
              comunicación.
            </motion.p>
          </div>
          <div className="flex items-center justify-center ">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={defaulAnimation}
              transition={{ type: "tween", delay: 0.5 }}
            >
              <Image
                className="w-[300px] md:w-[380px] lg:w-[420px] xl:w-[480px]"
                src={Agency}
                alt="Nothing"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* Cual Es El Campo Laboral */}
      <div className="my-12">
        <motion.h3
          variants={defaulAnimation}
          initial="hidden"
          whileInView={"show"}
          transition={{
            type: "tween",
            delay: 0.1,
          }}
          viewport={{ once: true, amount: 0.7 }}
          className="font-semibold text-center py-2 text-xl"
        >
          ¿Cual Es El Campo Laboral?
        </motion.h3>
        <div className="grid grid-cols-1">
          <div className="flex flex-col md:flex-row flex-wrap justify-center">
            {listLaborField.map((item, index) => (
              <motion.div
                key={index}
                variants={defaulAnimation}
                initial="hidden"
                whileInView={"show"}
                transition={{
                  type: "tween",
                  delay: 0.1 + index / 10,
                }}
                viewport={{ once: true, amount: 0.7 }}
                className="border mx-4 my-2 border-neutral-600 rounded-md flex items-center justify-center md:m-2"
              >
                <p className="py-4 text-sm md:px-4 lg:text-base">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Plan De Estudio */}
      <div className="my-8">
        <motion.h3
          variants={defaulAnimation}
          initial="hidden"
          whileInView={"show"}
          transition={{
            type: "tween",
            delay: 0.1,
          }}
          viewport={{ once: true, amount: 0.7 }}
          className="font-semibold text-center py-2 text-xl"
        >
          Plan De Estudio
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col md:justify-center pb-8">
            {listStudyPlan.map((item, index) => (
              <motion.div
                key={index}
                variants={defaulAnimation}
                initial="hidden"
                whileInView={"show"}
                transition={{
                  type: "tween",
                  delay: 0.1 + index / 10,
                }}
                viewport={{ once: true, amount: 0.7 }}
                className="border mx-4 my-2 border-neutral-600 rounded-md flex items-center justify-center md:m-2"
              >
                <p className="py-4 text-sm lg:text-base">{item.name}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex items-center justify-center ">
            <motion.div
              variants={defaulAnimation}
              initial="hidden"
              whileInView={"show"}
              transition={{
                type: "tween",
                delay: 0.3,
              }}
              viewport={{ once: true, amount: 0.7 }}
            >
              <Image
                className="w-[300px] md:w-[380px] lg:w-[420px] xl:w-[480px]"
                src={Photo3}
                alt="Dos manos concetado dos parte de un rompe cabeza"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* Requisitvos De Inscripcion */}
      <div className="my-8">
        <motion.h3
          variants={defaulAnimation}
          initial="hidden"
          whileInView={"show"}
          transition={{
            type: "tween",
            delay: 0.1,
          }}
          viewport={{ once: true, amount: 0.7 }}
          className="font-semibold text-center py-2 text-xl"
        >
          Requisitvos De Inscripcion
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center text-center pb-8">
            <motion.div
              variants={defaulAnimation}
              initial="hidden"
              whileInView={"show"}
              transition={{
                type: "tween",
                delay: 0.2,
              }}
              viewport={{ once: true, amount: 0.7 }}
            >
              {listRegistrationReq.map((item) => (
                <p
                  className="text-sm lg:text-base hover:tracking-widest ease-in-out duration-300"
                  key={item.id}
                >
                  {item.name}
                </p>
              ))}
            </motion.div>
          </div>
          <div className="flex items-center justify-center ">
            <motion.div
              variants={defaulAnimation}
              initial="hidden"
              whileInView={"show"}
              transition={{
                type: "tween",
                delay: 0.3,
              }}
              viewport={{ once: true, amount: 0.7 }}
            >
              <Image
                className="w-[280px] md:w-[340px] lg:w-[380px] xl:w-[420px]"
                src={Photo4}
                alt="Dos manos concetado dos parte de un rompe cabeza"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* Pagina Oficial Del IES */}
      <div className="my-8">
        <h3 className="font-semibold text-center py-2 text-xl">
          Requisitvos De Inscripcion
        </h3>
        <div className="grid grid-cols-1">
          <div className="text-center lg:text-base">
            <p className="text-sm px-4 lg:text-base pb-8">
              Ingrese A La Pagina Oficial Del IIES N°6 Para Enterarse De Las
              Novedades Sobre Las Incripciones
            </p>
          </div>
          <div className="flex items-center justify-center ">
            <Image
              className="w-[300px] md:w-[380px] lg:w-[420px] xl:w-[480px]"
              src={IES}
              alt="Dos manos concetado dos parte de un rompe cabeza"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
