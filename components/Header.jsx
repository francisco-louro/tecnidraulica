"use client";

import { Link as ScrollLink } from "react-scroll";
import { RiArrowRightUpLine } from "react-icons/ri";

// components
import Logo from "./Logo";
import NavMobile from "./NavMobile";

const links = [
  {
    name: "home",
    path: "home",
  },
  {
    name: "Quem somos",
    path: "quem-somos",
  },
  {
    name: "Serviços",
    path: "servicos",
  },
  {
    name: "Projetos",
    path: "projetos",
  },
  {
    name: "Contatos",
    path: "contatos",
  },
];

const Header = () => {
  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Logo />
          {/* nav & btn */}
          <nav className="hidden xl:flex items-center gap-12">
            <ul className="flex">
              {links.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="text-white text-sm uppercase font-primary font-medium tracking-[1.2px] after:content-['/'] after:mx-4 last:after:content-none after:text-accent"
                  >
                    <ScrollLink
                      to={link.path}
                      smooth
                      spy
                      className="cursor-pointer"
                      activeClass="text-accent"
                    >
                      {link.name}
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>
            {/* btn */}
            <ScrollLink
              to={"contatos"}
              smooth
              spy
              className="cursor-pointer"
              activeClass="text-accent"
            >
              <button className="w-[230px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[230px] bg-white group">
                <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase">
                  Pedir orçamento
                </div>
                <div className="w-11 h-11 bg-primary flex items-center justify-center">
                  <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
                </div>
              </button>
            </ScrollLink>
          </nav>

          {/* nav mobile */}
          <div className="xl:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
