import React from "react";
import Nav from "../layouts/Nav";
import Footer from "../layouts/Footer";
import Title from "../components/Title";
import { useLocation } from "react-router-dom";
import Map from "../layouts/Map";

export default function AboutUs() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      <Nav />
      <div className="flex">
        <div className="w-6/12 h-[30rem]">
          <img
            src="/images/sobre-nosotros/1.webp"
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-6/12 flex justify-center flex-col px-24">
          <Title type="h2" className="my-8 text-pink-500">
            NUESTRA PANADERIA
          </Title>
          <p>
            Somos una mini Panaderia con 2 años de trabajo en una pequeña
            tiendita, nuestras puertas se abrieron prometiendo calidad y sabor
            en cada uno de sus productos. Desde entonces, cada día ha sido un
            paso adelante. Con esfuerzo y dedicación, nuestra panadería ha
            crecido, no solo en tamaño, sino en la variedad de delicias que
            ofrecemos. Panes crujientes, dulces que endulzan los momentos,
            refrescos que acompañan las conversaciones, tortas que celebran cada
            ocasión especial, y víveres que completan la mesa de cada hogar.
            Esta panadería no es solo un negocio, es una historia de vida, de
            cómo un pequeño sueño puede crecer y endulzar la vida de muchos, día
            tras día. 
          </p>
        </div>
      </div>
      <div className="flex ">
        <div className="w-6/12 flex justify-center flex-col px-24">
          <Title type="h2" className="my-8 text-pink-500">
            NUESTRA VISION
          </Title>
          <p>
            Aspiramos a ser distinguidos por la excelencia, reconocidos por la
            calidad y frescura de nuestros productos, y por ser un espacio donde
            los clientes no solo vienen a comprar, sino a disfrutar de una
            experiencia cálida y acogedora. Deseamos crear un ambiente donde
            nuestros visitantes encuentren más que productos: una experiencia
            reconfortante y amistosa. Nuestra mision es ofrecer a nuestros
            clientes panes, dulces, refrescos, tortas y víveres de la más alta
            calidad, elaborados con amor y dedicación.
          </p>
        </div>
        <div className="w-6/12 h-[30rem]">
          <img
            src="/images/sobre-nosotros/2.webp"
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-6/12 h-[30rem]">
          <img
            src="/images/sobre-nosotros/3.webp"
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-6/12 flex justify-center flex-col px-24">
          <Title type="h2" className="my-8 text-pink-500">
            UN POCO MAS DE NOSOTROS
          </Title>
          <p>
            Somos una familiar de cuatro personas, que desde el primer destello
            de nuestra aventura empresarial, hemos vertido nuestro corazón y
            alma en la tarea de crecer y expandirnos. Con la mirada fija en
            metas ambiciosas, nos esforzamos por trascender los límites con cada
            nuevo día, buscando siempre la excelencia y la superación personal.
            Nuestro compromiso es firme: avanzar con pasos gigantes hacia el
            éxito, mientras ofrecemos a nuestros clientes no solo productos de
            calidad, sino también una porción de nuestro espíritu emprendedor y
            la calidez de nuestro servicio
          </p>
        </div>
      </div>
      <Map />
      <Footer />
    </div>
  );
}
