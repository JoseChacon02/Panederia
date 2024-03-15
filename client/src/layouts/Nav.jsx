import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useLocation } from "react-router-dom";

export default function Nav({className}) {
  const [activeLink, setActiveLink] = useState("home")
  const [number, setNumber] = useState(0)
  const location = useLocation()

  useEffect(()=>{
    const onUpdateActiveLink = (value) => {
      setActiveLink(value)
    }
  }, [])


  return (
    <Navbar onScrollPositionChange={(e)=>{
      setNumber(e)
    }} isBlurred={false} className={number == 0  && location.pathname == '/' ? `${className} justify-end ` : `justify-end bg-neutral-500 `} >
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem isActive={activeLink === 'home' ? true : false} onClick={()=> onUpdateActiveLink('home')}>
          <Link className="text-neutral-100" href="/">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeLink === 'conocenos' ? true : false} onClick={()=> onUpdateActiveLink('conocenos')}>
          <Link className="text-neutral-100" href="/sobre-nosotros">
            CONOCENOS
          </Link>
        </NavbarItem>
        <Dropdown className="bg-neutral-500">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent text-base text-neutral-100 data-[hover=true]:bg-transparent"
                variant="light"
              >
                PRODUCTOS
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            <DropdownItem href="/tortas" className="text-neutral-100">TORTAS</DropdownItem>
            <DropdownItem href="/panes" className="text-neutral-100">PANES</DropdownItem>
            <DropdownItem href="/dulces" className="text-neutral-100">DULCES</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link className="text-neutral-100 border px-3" href="/contacto">
            CONTACTO
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
