import React from "react";
import Nav from "../../layouts/Nav";
import Footer from "../../layouts/Footer";
import Title from "../../components/Title";
import Text from "../../components/Text";
import Image from "../../components/Image";
import ImagesContainer from "../../components/ImagesContainer";
import { FaBreadSlice } from "react-icons/fa6";
import { Link } from "@nextui-org/react";

export default function Panes() {
  return (
    <div>
      <Nav />
      <div className="my-36 flex justify-center">
        <div className="flex flex-col justify-center items-center w-8/12">
          <FaBreadSlice size="80" color="#EB6878" />
          <Text className="text-1xl text-neutral-400">PANES</Text>
          <Title type="h1" className="my-8 text-brown-500 text-center">
            RECETAS TRADICIONALES QUE TODOS AMAN
          </Title>
          <p className="text-center text-neutral-300 py-8">
            Nuestros panaderos mezclan la cantidad perfecta de ingredientes y
            hornean el pan usando la temperatura idónea del horno, obteniendo
            siempre como resultado un producto crujiente, tierno y de sabor
            único.
          </p>
        </div>
      </div>
      <ImagesContainer>
        <Image src="/images/panes/1.webp" />
        <Image src="/images/panes/2.webp" />
        <Image src="/images/panes/3.webp" />
        <Image src="/images/panes/4.webp" />
        <Image src="/images/panes/5.webp" />
        <Image src="/images/panes/6.webp" />
        <Image src="/images/panes/7.webp" />
        <Image src="/images/panes/8.webp" />
      </ImagesContainer>
      <div className="my-36 flex justify-center">
        <div className="flex flex-col justify-center items-center w-6/12">
          <Title type="h2" className="my-8 text-center text-pink-500">
            TRES PEQUEÑAS RECETAS QUE PUEDES HACER EN CASA
          </Title>
          <p className="text-center text-neutral-300 py-8">
            Mas que tus amigos seremos tus complices y te enseñaremos 3
            grandiosas recetas faciles y sencillas para hacer en casa y
            disfrutar en famiilia
          </p>
        </div>
      </div>
      <ul className="flex w-full">
        <Image src="/images/panes/9.webp"  classname="w-4/12"/>
        <Image src="/images/panes/10.webp" classname="w-4/12"/>
        <Image src="/images/panes/11.webp" classname="w-4/12"/>
      </ul>
      <Footer />
    </div>
  );
}
