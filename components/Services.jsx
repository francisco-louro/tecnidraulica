"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./Button";

import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
  PiSealWarningFill,
} from "react-icons/pi";
import Pretitle from "./Pretitle";

const serviceData = [
  {
    name: "servicos",
    nameDisplay: "Serviços",
    icon: <PiWrenchFill />,
    title: "Serviços",
    description:
      "Assistência, Fabricação e Comercialização dos seguintes equipamentos:",
    serviceList: [
      "Cilindros e outros atuadores",
      "Vedação",
      "Tubagem rígida e flexível",
      "Motores",
      "Bombas",
      "Válvulas",
      "Acumuladores",
      "Unidades hidráulicas",
      "Sistemas elétricos",
      "Instrumentação e automação",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-7.jpg" },
      { url: "/assets/img/services/thumb-8.jpg" },
    ],
  },
  {
    name: "stock",
    nameDisplay: "Em Stock",
    icon: <PiSealWarningFill />,
    title: "Em Stock",
    description:
      "Dispomos de alguns equipamentos para venda. Outros artigos sob consulta.",
    serviceList: [
      "REXROTH UPE5 - 1X/4,00A10VSO10 ANT R901103647",
      "Bomba REXROTH A10VSO18 DFR1/31R",
      "Bomba REXROTH A10VSO28 DFR1/31R",
      "Bomba REXROTH A10VSO45 DFR1/31R",
      "Bomba BOSCH PV7",
      "Bomba MOOG HPR18",
      "Pressóstatos Rexroth e Parker",
    ],
    thumbs: [
      { url: "/assets/img/services/REXROTH-1.jpg" },
      { url: "/assets/img/services/REXROTH-2.jpg" },
    ],
  } /*,
  {
    name: "restoration",
    icon: <PiWrenchFill />,
    title: "Restoration Services",
    description:
      "Bringing damaged or aging structures back to life. We specialize in restoring historical landmarks, fire-damaged buildings, and water-damaged properties with meticulous care.",
    serviceList: [
      "Historic Restore",
      "Water Damage",
      "Fire Repair",
      "Structural Fix",
      "Mold Removal",
      "Roof Restore",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-4.jpg" },
      { url: "/assets/img/services/thumb-5.jpg" },
    ],
  },
  {
    name: "consulting",
    icon: <PiUserGearFill />,
    title: "Consulting Services",
    description:
      "Providing expert guidance for construction and renovation projects. From planning and budgeting to compliance and sustainability, our consulting service ensure project success.",
    serviceList: [
      "Project Plans",
      "Costing",
      "Site Management",
      "Permits",
      "Sustainability",
      "Safety",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-3.jpg" },
    ],
  },*/,
];

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("servicos");
  return (
    <section className="pt-16 xl:pt-32" id="servicos">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto mb-20"
        >
          <Pretitle text="O que fazemos" center />
          <h2 className="h2 mb-3">Criamos soluções para Alto Desempenho</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Servimos clientes da área automóvel, industrial, naval, mineira,
            celulose, gestão de resíduos, construção, aeronáutica e alimentar.
          </p>
          <p className="mb-11 max-w-[480px] mx-auto">
            Os três vetores orientadores da empresa são os do cuidado ao
            cliente, da excelência do serviço e da aplicação da engenharia.
            Nesta perspetiva, a empresa oferece soluções integradas que vão
            desde a análise funcional de equipamentos em operação de modo a
            definir ações de manutenção preventiva, corretiva ou de outro tipo
            até ao desenvolvimento e fabricação de equipamentos para aplicações
            futuras.
          </p>
        </motion.div>

        {/* tabs */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue="servicos"
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col xl:flex-row w-full gap-[30px]"
          >
            <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full rounded-none p-0 bg-transparent xl:w-[345px]">
              {serviceData.map((item) => {
                return (
                  <TabsTrigger
                    key={item.name}
                    value={item.name}
                    className="w-full rounded-none h-[100px] flex items-center relative shadow-custom p-0 outline-none"
                  >
                    <div
                      className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                        activeTab === item.name
                          ? "bg-primary text-white"
                          : "bg-accent text-primary"
                      }`}
                    >
                      <div className="text-4xl">{item.icon}</div>
                    </div>
                    <div className="uppercase font-primary text-base font-semibold tracking-[.6px] w-[100px] ml-16">
                      {item.nameDisplay}
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {/* tabs content */}
            <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px]">
              {serviceData.map((item) => (
                <TabsContent key={item.name} value={item.name} className="m-0">
                  <motion.div
                    variants={fadeInVariant}
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                    className="flex flex-col md:flex-row gap-[30px]"
                  >
                    {/* images */}
                    <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                      {item.thumbs.map((thumb, index) => (
                        <div
                          key={index}
                          className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                        >
                          <Image src={thumb.url} fill alt="" />
                        </div>
                      ))}
                    </div>
                    {/* text & button */}
                    <div>
                      <div>
                        <h3 className="h3 mb-6">{item.title}</h3>
                        <p className="mb-10">{item.description}</p>
                        {/* service list */}
                        <ul className="grid grid-cols-2 gap-4 mb-12">
                          {item.serviceList.map((service, index) => {
                            return (
                              <li
                                key={index}
                                className="flex items-center gap-4"
                              >
                                <div className="w-[6px] h-[6px] bg-accent"></div>
                                <div className="capitalize font-medium text-primary">
                                  {service}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                        {/* btn */}
                        {/* <Button text="Read more" />*/}
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
