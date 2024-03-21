import React from "react";
import Nav from "../../layouts/Nav";
import Footer from "../../layouts/Footer";
import Text from "../../components/Text";
import Title from "../../components/Title";
import ImagesContainer from "../../components/ImagesContainer";
import Image from "../../components/Image";
import { GiChocolateBar } from "react-icons/gi";

export default function Dulces() {
  return (
    <div>
      <Nav />
      <div className="my-36 flex justify-center">
        <div className="flex flex-col justify-center items-center w-8/12">
          <GiChocolateBar size="80" color="#EB6878" />
          <Text className="text-1xl text-neutral-400">DULCES</Text>
          <Title type="h1" className="my-8 text-brown-500 text-center">
            SABORES QUE DESLUMBRAN
          </Title>
          <p className="text-center text-neutral-300 py-8">
            Los postres son una celebración de la dulzura y la creatividad
            culinaria. Con una variedad que va desde las texturas ligeras y
            aireadas hasta las ricas y densas, ofrecen un final perfecto para
            cualquier comida. Los postres pueden ser simples, destacando un
            ingrediente principal, o complejos, con múltiples capas y sabores
            que se complementan entre sí. Son una expresión de tradición y
            innovación, donde cada bocado puede transportarte a recuerdos dulces
            o introducirte a nuevas experiencias gastronómicas. Ya sea que
            prefieras algo frutal, cremoso, crujiente o esponjoso, hay un postre
            para satisfacer cada antojo y celebrar cada ocasión.
          </p>
        </div>
      </div>
      <ImagesContainer>
        <Image src="/images/dulces/1.jpg" />
        <Image src="/images/dulces/2.jpg" />
        <Image src="/images/dulces/3.jpg" />
        <Image src="/images/dulces/4.jpg" />
        <Image src="/images/dulces/5.jpg" />
        <Image src="/images/dulces/6.jpg" />
        <Image src="/images/dulces/7.jpg" />
        <Image src="/images/dulces/8.jpg" />
      </ImagesContainer>
      <div className="my-36 flex justify-center">
        <div className="flex flex-col justify-center items-center w-6/12">
          <Title type="h2" className="my-8 text-center text-pink-500">
            DELICIAS PARA LA HORA DEL TÉ
          </Title>
          <p className="text-center text-neutral-300 py-8">
            La pastelería de Quibe se destaca por sus colores, texturas y
            formas. Vas a encontrar en ellas frescura y texturas perfectas y
            además, son tan lindas que decoran cualquier mesa! Encontralas en
            nuestra panadería en bandejas o hermosos packs, listos para llevar y
            compartir!
          </p>
        </div>
      </div>
      <ImagesContainer>
        <Image src="/images/dulces/9.jpg" />
        <Image src="/images/dulces/10.jpg" />
        <Image src="/images/dulces/11.jpg" />
        <Image src="/images/dulces/12.jpg" />
        <Image src="/images/dulces/13.jpg" />
        <Image src="/images/dulces/14.jpg" />
        <Image src="/images/dulces/15.jpg" />
        <Image src="/images/dulces/16.jpg" />
      </ImagesContainer>
      <Footer />
    </div>
  );
}
