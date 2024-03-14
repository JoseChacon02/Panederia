import HeaderLink from "../components/home/HeaderLink";
import { Navbar, NavbarContent } from "@nextui-org/react";

export default function Navbar({ className }) {


  return (
    <Navbar>
      <NavbarContent>
        
      </NavbarContent>
    </Navbar>
    // <nav className={`h-16 flex justify-end px-32  bg-neutral-500 ${className}`}>
    //   <ul className="flex items-center w-3/12 justify-between">
    //     <HeaderLink href="/">HOME</HeaderLink>
    //     <HeaderLink href="/sobre-nosotros">NOSOTROS</HeaderLink>
    //     <HeaderLink menu={true} objects={["TORTAS", "PANES", "DULCES"]}>PRODUCTOS</HeaderLink>
    //     <HeaderLink className="px-2 border-neutral-100 border-2" href="/contacto">
    //       CONTACTO
    //     </HeaderLink>
    //   </ul>
    // </nav>
  );
}
