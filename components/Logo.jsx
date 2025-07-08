import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="">
      <Image src="/assets/logo.png" width={250} height={60} alt="" />
    </Link>
  );
};

export default Logo;
