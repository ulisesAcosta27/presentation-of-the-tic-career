import React from "react";

const listSections = [
  { id: 1, name: "¿Que Son Las TICs?" },
  { id: 2, name: "¿Cual Es El Campo Laboral?" },
  { id: 3, name: "Plan De Estudio" },
  { id: 4, name: "Requisitvos De Inscripcion" },
  { id: 5, name: "Pagina Oficial Del IES" },
];

export const Footer = () => {
  return (
    <div className="bg-black mt-12 h-[27rem] mx-auto flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
        <div className=" text-white py-4 flex flex-col items-center justify-center">
          <p className="text-xl font-medium">Secciones</p>
          <div className="py-2 text-center">
            {listSections.map((item) => (
              <p className="text-sm" key={item.id}>
                {item.name}
              </p>
            ))}
          </div>
        </div>
        <div className="text-white py-4 flex flex-col items-center">
          <p className="text-xl font-medium">Secciones</p>
          <div className="py-2 text-center">
            {listSections.map((item) => (
              <p className="text-sm" key={item.id}>
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
