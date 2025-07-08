import Image from "next/image";
import Pretitle from "./Pretitle";
import Button from "./Button";

import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const About = () => {
  return (
    <div className="pt-16 xl:pt-32" id="quem-somos">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* text */}
          <div className="flex-1">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-[540px]"
            >
              {/* pretitle */}
              <Pretitle text="Quem somos" />
              <h2 className="h2 mb-6">Focados na excelência em cada projeto</h2>
              <p className="mb-11">
                A TECNIDRAULICA® nasce da vontade dos seus fundadores em
                oferecer produtos e serviços de excelência dentro da área da
                óleo-hidráulica e da pneumática. Com uma experiência acumulada
                superior a 30 anos nesta área, a criação da TECNIDRAULICA ®
                surgiu de modo natural, pois foi fácil concluir ao longo do
                tempo que neste sector existe grande procura de um serviço
                fiável, transparente e altamente profissional.
              </p>
              {/*<div className="w-max flex flex-col text-right mb-10">
                <Image
                  src="/assets/img/about/signature.svg"
                  width={154}
                  height={38}
                  alt=""
                />
                <p>Company CEO</p>
              </div>*/}
              {/* btn */}
              <ScrollLink
                to={"contatos"}
                smooth
                spy
                className="cursor-pointer"
                activeClass="text-accent"
              >
                <Button text="Entre em contato" />
              </ScrollLink>
            </motion.div>
          </div>
          {/* img */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 xl:flex xl:justify-center"
          >
            <div className="xl:w-[444px] xl:h-[493px] relative">
              {/* bg */}
              <div className="hidden xl:flex w-[444px] h-[493px] bg-accent absolute -top-4 -left-4 -z-10"></div>
              <Image
                src={"/assets/img/about/about1.jpg"}
                width={444}
                height={492}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
