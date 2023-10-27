import React from "react";
import Image from "next/image";

import Photo1 from "@/static/img/Foto-1.png";

export const Hero = () => {
  return (
    <div className="h-[35rem]">
      <div className="container h-full mx-auto">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="text-center px-4 md:text-start">
              <h2 className="font-semibold text-2xl xl:text-3xl">
                Las TICs Son Esenciales
              </h2>
              <p className="text-sm w-full lg:text-base">
                Transforma la educación, inspira el futuro. Forjando innovadores
                en TICs para una enseñanza conectada
              </p>
              <div className="my-2 bg-black text-white py-2 px-8 inline-block rounded-full hover:bg-white border border-black hover:text-black ease-in-out duration-300">
                <p className="text-sm">Ver Mas</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <Image
              className="md:w-[380px] lg:w-[420px] xl:w-[480px]"
              src={Photo1}
              alt="Personas bucando iformacion de las TICs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
