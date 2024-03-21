import React from "react";
import Nav from "../../layouts/Nav";
import Footer from "../../layouts/Footer";
import { MdCake } from "react-icons/md";
import Text from "../../components/Text";
import Title from "../../components/Title";
import ImagesContainer from "../../components/ImagesContainer";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import Image from "../../components/Image";
import Map from "../../layouts/Map";

export default function Tortas() {
  const imagesOne = [1, 2, 3, 4, 5, 6, 7, 8];
  const imagesTwo = [1, 2, 3, 4];

  return (
    <div>
      <Nav />
      <div className="my-36 flex justify-center">
        <div className="flex flex-col justify-center items-center w-8/12">
          <MdCake size="80" color="#EB6878" />
          <Text className="text-1xl text-neutral-400">TORTAS</Text>
          <Title type="h1" className="my-8 text-brown-500 text-center">
            SABORES QUE TE <br /> DESLUMBRAN
          </Title>
          <p className="text-center text-neutral-300 py-8">
            Nuestras tortas se destaca en la preparación, cocción y decoración
            de tortas, pasteles, mini tortas y muchos más te acompañamos en tus
            mejores momentos para llenarlos de sabor y felicidad Nuestras tortas
            se destaca por la dedicación y el amor por los detalles.
          </p>
        </div>
      </div>
      <ImagesContainer>
        <Image src="/images/tortas/1.webp" />
        <Image src="/images/tortas/2.webp" />
        <Image src="/images/tortas/3.webp" />
        <Image src="/images/tortas/4.webp" />
        <Image src="/images/tortas/5.webp" />
        <Image src="/images/tortas/6.webp" />
        <Image src="/images/tortas/7.webp" />
        <Image src="/images/tortas/8.webp" />
      </ImagesContainer>

      <div className="my-36 flex justify-center">
        <div className="flex flex-col justify-center items-center w-6/12">
          <Title type="h2" className="my-8 text-center text-pink-500">
            CREA TU TORTA A TU GUSTO
          </Title>
          <p className="text-center text-neutral-300 py-8">
            Crea y juega con la variedad de opciones que te damos para realizar
            tu torta a tu gusto, disfruta de un gran sabor. Tenemos toda la
            variedad que te puedes imaginar y te damos un presupuesto rapido
          </p>
          <Link href="/tortas" underline="always" className="text-brown-400">
            Crea tu torta
          </Link>
        </div>
      </div>
      <ImagesContainer>
        <Image src="/images/tortas/9.webp" />
        <Image src="/images/tortas/10.webp" />
        <Image src="/images/tortas/11.webp" />
        <Image src="/images/tortas/12.webp" />
      </ImagesContainer>
      <div className="my-36 flex justify-center">
        <div className="flex flex-col justify-center items-center w-6/12">
          <Title type="h2" className="my-8 text-center text-pink-500">
            PERSONALIZA AUN MAS
          </Title>
          <p className="text-center text-neutral-300 py-8">
            Quieres una atencion mas personalizada? Esta es tu mejor opcion para
            comunicarte con nosotros y tener una torta mucho mas personalizada
            a tu antojo
          </p>
          <Link href="/tortas" underline="always" className="text-brown-400">
            Personalizar
          </Link>
        </div>
      </div>
      <Map />
      <Footer />
    </div>
  );
}
