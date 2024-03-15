import React from "react";
import ImagesContainer from "../ImagesContainer";
import Title from "../Title";
import { Link } from "@nextui-org/react";
import { MdCake } from "react-icons/md";
import { FaBreadSlice } from "react-icons/fa6";
import { GiChocolateBar } from "react-icons/gi";
import { useLocation } from "react-router-dom";

export default function SnOne() {
  const location = useLocation()
  return (
    <div>
      <div className="flex flex-col items-center my-36">
        <Title className="mb-36" type="h2">
          NUESTROS PRODUCTOS
        </Title>
        <div className="flex w-10/12 justify-between ">
          <div className="w-3/12 flex flex-col items-center justify-between">
            <MdCake size="80" color="#EB6878" />
            <Title type="h3">TORTAS</Title>
            <p className="text-center text-neutral-300 py-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis voluptatem odit at ratione doloribus quia impedit.{" "}
            </p>
            <Link
              href="/tortas"
              underline="always"
              className="text-brown-400"
            >
              Miralos
            </Link>
          </div>
          <div className="w-3/12 flex flex-col items-center justify-between">
            <FaBreadSlice size="80" color="#EB6878" />
            <Title type="h3">PANES</Title>
            <p className="text-center text-neutral-300 py-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis voluptatem odit at ratione doloribus quia impedit.{" "}
            </p>
            <Link
              href="/panes"
              underline="always"
              className="text-brown-400"
            >
              Miralos
            </Link>
          </div>
          <div className="w-3/12 flex flex-col items-center justify-between">
            <GiChocolateBar size="80" color="#EB6878" />
            <Title type="h3">DULCES</Title>
            <p className="text-center text-neutral-300 py-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis voluptatem odit at ratione doloribus quia impedit.{" "}
            </p>
            <Link
              href="/dulces"
              underline="always"
              className="text-brown-400"
            >
              Miralos
            </Link>
          </div>
        </div>
      </div>
      <ImagesContainer imgs="1" href="/home"/>
    </div>
  );
}
