import Image from "next/image";
import Link from "next/link";
import Pretitle from "./Pretitle";

import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

const workData = [
  {
    img: "/assets/img/work/tecnico-em-acao-na-instalacao-industrial.jpg",
    name: "Instalação",
    description: "Técnico em ação na instalação industrial",
    href: "",
  },
  {
    img: "/assets/img/work/tecnico-repara-bomba-hidraulica.jpg",
    name: "Hidráulica",
    description: "Técnico repara bomba hidraulica",
    href: "",
  },
  {
    img: "/assets/img/work/tecnico-repara-grua-de-carga.jpg",
    name: "Hidráulica",
    description: "Técnico repara grua de carga",
    href: "",
  },
  {
    img: "/assets/img/work/tecnico.jpg",
    name: "Pneumática",
    description: "Técnico verifica pressão",
    href: "",
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Work = () => {
  return (
    <div className="pt-16 xl:pt-32" id="projetos">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="Projetos" center />
          <h2 className="h2 mb-3">Tecnologia e Eficiência</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Desenvolvemos, Implementamos e Mantemos Sistemas que Garantem Alto
            Desempenho.
          </p>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
      >
        {workData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center"
            >
              <Image
                src={item.img}
                fill
                className="object-cover"
                alt="Soluções Óleo-Hidráulicas e Pneumáticas"
                quality={100}
              />
              {
                <div className="w-[90%] h-[84px] bg-primary absolute bottom-4 flex justify-between items-center text-white md:translate-y-[108px] md:group-hover:translate-y-0 transition-all duration-500">
                  <div className="pl-8">
                    <h4 className="text-white font-primary font-semibold tracking-[1px] uppercase">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-1">
                      <RiCheckboxCircleFill className="text-accent text-xl" />
                      <p>{item.description}</p>
                    </div>
                  </div>
                  {/*<Link
                    href={item.href}
                    className="w-[44px] xl:w-[60px] xl:h-[60px] h-[44px] bg-accent text-primary text-2xl flex justify-center items-center absolute right-3"
                  >
                    <RiArrowRightUpLine />
                  </Link>*/}
                </div>
              }
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Work;
