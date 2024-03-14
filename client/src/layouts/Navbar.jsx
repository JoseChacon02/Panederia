import React from "react";
import HeaderLink from "../components/home/head/HeaderLink";

export default function Navbar({className}) {
  return (
    <nav className={`h-16 flex justify-end px-32 bg-neutral-500 ${className}`}>
      <ul className="flex items-center justify-between">
        <HeaderLink>HOME</HeaderLink>
        <HeaderLink>NOSOTROS</HeaderLink>
        <HeaderLink>PRODUCTOS</HeaderLink>
        <div className="border-white border-2">
          <HeaderLink>CONTACTOS</HeaderLink>
        </div>
      </ul>
    </nav>
  );
}
