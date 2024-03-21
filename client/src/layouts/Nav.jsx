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
import { useLinkLocation } from "../context/providers/LocationProvider";

export default function Nav({ className }) {
  return (
    <Navbar
      isBlurred={false}
      position="static"
      className={
        location.pathname == "/"
          ? `${className} justify-end `
          : `justify-end bg-neutral-500 `
      }
    >
      <NavbarContent className="hidden sm:flex gap-x-60" justify="end">
        <NavbarItem>
          <Link className="text-neutral-100 text-sm" href="/">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-neutral-100 text-sm" href="/sobre-nosotros">
            CONOCENOS
          </Link>
        </NavbarItem>
        <Dropdown className="bg-neutral-500">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent text-sm text-neutral-100 data-[hover=true]:bg-transparent"
                variant="light"
              >
                PRODUCTOS
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            <DropdownItem href="/tortas" className="text-neutral-100 text-sm">
              TORTAS
            </DropdownItem>
            <DropdownItem href="/panes" className="text-neutral-100 text-sm">
              PANES
            </DropdownItem>
            <DropdownItem href="/dulces" className="text-neutral-100 text-sm">
              DULCES
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link
            className="text-neutral-100 border px-3 text-sm"
            href="/contacto"
          >
            CONTACTO
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
