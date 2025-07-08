import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import Socials from "./Socials";
import Form from "./Form";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Contact = () => {
  return (
    <section className="pt-16 xl:pt-32" id="contatos">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* info */}
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40 h-[640px]">
              <h4 className="text-[26px] font-primary font-bold mb-6">
                Entre em contato
              </h4>
              <p className="mb-9">
                Fale com nossa equipa e descubra como podemos ajudar no seu
                projeto.
              </p>
              {/* contact items */}
              <div className="flex flex-col gap-[40px] mb-16">
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiChat1Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Fale connosco
                    </h5>
                    <p className="mb-4">
                      Precisa de suporte ou deseja um orçamento?{" "}
                    </p>
                    <p className="font-semibold text-primary">
                      tecnidraulica@tecnidraulica.com
                    </p>
                  </div>
                </div>
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiMapPin2Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Sede
                    </h5>
                    <p className="mb-4">
                      Venha conhecer as nossas instalações.
                    </p>
                    <p className="font-semibold text-primary">
                      Agualva-Cacém - Portugal
                    </p>
                  </div>
                </div>
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiSmartphoneLine className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Contatos
                    </h5>
                    <p className="mb-4">Seg-Sex das 9h às 18h.</p>
                    <p className="font-semibold text-primary">
                      215 832631 - 915 273 840 - 915 273 862
                    </p>
                  </div>
                </div>
              </div>
              {/* <Socials
                containerStyles="flex gap-[40px]"
                iconStyles="text-primary text-[20px]"
              /> */}
            </div>
            {/* form */}
            <div className="flex-1">
              <h2 className="h2 mb-3">Pedir Orçamento</h2>
              <p className="mb-9">
                Quer saber mais? Solicite seu orçamento agora mesmo e tire todas
                as suas dúvidas.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
