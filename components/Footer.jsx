"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Checkbox } from "@/components/ui/checkbox";

import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightLine,
} from "react-icons/ri";
import { PiSpinnerBallLight } from "react-icons/pi";

import Socials from "./Socials";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState(""); // Hidden anti-spam field
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (honeypot) {
      console.log("Bot detected");
      return setStatus({
        loading: false,
        error: null,
        success: true, // Fake success to bots
      });
    }

    // GDPR validation
    if (!consent) {
      return setStatus({
        loading: false,
        error: "Tem de aceitar os termos da Política de Privacidade",
        success: false,
      });
    }

    setStatus({ loading: true, error: null, success: false });

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Subscription failed");

      setStatus({ loading: false, error: null, success: true });
      setEmail("");
      setConsent(false);
    } catch (error) {
      setStatus({
        loading: false,
        error: error.message || "Subscription failed",
        success: false,
      });
    }
  };

  return (
    <motion.footer
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="mt-16 xl:mt-32 bg-primary"
    >
      <div className="container mx-auto">
        <div className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-[60px] xl:gap-[30px]">
          {/* logo & text */}
          <div className="flex-1">
            <Link href="/" className="flex mb-6">
              <Image src="/assets/logo.png" width={250} height={60} alt="" />
            </Link>
            <p className="text-border max-w-[270px]">
              O seu parceiro na manutenção dos seus equipamentos móveis e
              industriais.
            </p>
          </div>
          {/* contact */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-10">Contatos</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="text-accent text-xl" />
                <p>
                  Centro Empresarial do Cacém - Armazém A
                  <br />
                  Estrada de Paço de Arcos 167 S.Marcos 2739-509 Agualva Cacém
                  &nbsp;&nbsp; (
                  <Link
                    target="_blank"
                    href="https://maps.app.goo.gl/8BCaMsU6kAfLuCLw8"
                    className="text-accent hover:underline"
                  >
                    Ver localização
                  </Link>
                  )
                </p>
              </li>
              <li className="flex items-center gap-4">
                <RiPhoneFill className="text-accent text-xl" />
                <p>215 832 631 - 915 273 840 - 915 273 862</p>
              </li>
              <li className="flex items-center gap-4">
                <RiMailFill className="text-accent text-xl" />
                <p>tecnidraulica@tecnidraulica.com</p>
              </li>
            </ul>
          </div>
          {/* newsletter */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-10">Newsletter</h4>
            <p className="mb-9">
              Receba no seu e-mail conteúdos exclusivos sobre soluções
              hidráulicas e pneumáticas, novidades do setor, dicas técnicas e
              ofertas especiais.
            </p>
            {/* input */}
            <div className="relative max-w-[370px]">
              <form onSubmit={handleSubmit}>
                {/* Honeypot Field (hidden from humans) */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="absolute opacity-0 w-0 h-0"
                  tabIndex="-1"
                  autoComplete="off"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite o seu email"
                  className="bg-[#222427] h-16 w-full pl-7 rounded-none outline-none flex items-center"
                  required
                />

                {/* GDPR Consent */}
                <div className="flex items-start">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(!!checked)}
                    className="mt-2 mr-2"
                  />
                  <label htmlFor="consent" className="text-sm mt-1">
                    Concordo em receber e-mails de marketing de acordo com a{" "}
                    <a
                      href="/privacy-policy"
                      className="text-accent hover:underline"
                    >
                      Política de Privacidade
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status.loading || !consent || !email}
                  className="bg-accent w-12 h-12 absolute right-2 top-2 bottom-2 text-primary text-xl flex items-center justify-center"
                >
                  {status.loading ? (
                    <PiSpinnerBallLight className="animate-spin w-6 h-6 text-neutral-950" />
                  ) : (
                    <RiArrowRightLine />
                  )}
                </button>
              </form>
              {status.error && (
                <p className="mt-2 text-red-500 text-sm">{status.error}</p>
              )}
              {status.success && (
                <p className="mt-2 text-green-500 text-sm">
                  Obrigado por subscrever!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="container mx-auto xl:px-0 py-12 border-t border-border/10 flex flex-col gap-6 xl:flex-row items-center justify-center">
        <p className="text-border">
          <span>© {new Date().getFullYear()} </span>
          &nbsp;&nbsp; | &nbsp;&nbsp;tecnidraulica@tecnidraulica.com
          &nbsp;&nbsp;| &nbsp;&nbsp; Agualva-Cacém - Portugal &nbsp;&nbsp; |
          &nbsp;&nbsp; 215 832631 - 915 273 840 - 915 273 862
        </p>

        {/* <Socials
          containerStyles="flex gap-6 text-white"
          iconStyles="hover:text-accent transition-all"
        />*/}
      </div>
    </motion.footer>
  );
};

export default Footer;
